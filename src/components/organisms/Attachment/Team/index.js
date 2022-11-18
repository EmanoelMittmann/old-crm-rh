import React, { useState, useLayoutEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { checkArraysDifference } from '../../../utils/checkArraysDifference';
import {
  AttachmentContainer,
  AttachmentForm,
  AttachmentTableLine,
  ContainerIcon,
} from '../style';
import {
  ProfessionalInfo,
  ProfessionalName,
  ProfessionalJob,
  ProfessionalHours,
  ProfessionalStatus,
  ProfilePicture,
  ProfessionalOvertime,
  ProfessionalProfilePicture,
  ProfessionalPercent,
  ContainerLabel,
} from './style.js';
import User from '../../../../assets/user.png';
import { BlueButton } from '../../../atoms/Buttons/BlueButton/style.js';
import SecondaryText from '../../../atoms/SecondaryText/style';
import InputSelectWithLabel from '../../../atoms/InputSelectWithLabel';
import InputText from '../../../atoms/InputText';
import MenuOptions from '../../../atoms/MenuOptions';
import { Badge } from '../../../atoms/Badge';
import ModalRed from '../../../molecules/ModalRed';
import ModalEditAttachment from '../../../molecules/ModalEditAttachment';
import api from '../../../../api/api';
import InputSelect from '../../../atoms/InputSelect';
import { useEffect } from 'react';
import {
  ListHeaderContainer,
  ListHeaderTitle,
} from '../../../atoms/ListHeader/style';

const status = {
  ATIVO: {
    name: 'Ativo',
    color: {
      button_color: '#E4F8DD',
      text_color: '#229A16',
    },
  },
  INATIVO: {
    name: 'Inativo',
    color: {
      button_color: '#FFE2E1',
      text_color: '#BB2B3F',
    },
  },
};

const AttachmentTeam = ({ attachment, allOptions }) => {
  const { team, setTeam, addMember, removerMember, editMember } = attachment;
  const [dataTechLead, setDataTechLead] = useState([]);
  const [dataTeam, setDataTeam] = useState([]);
  const [rows, setRows] = useState([]);
  const [jobsMember, setJobsMember] = useState([]);
  const [options, setOptions] = useState([]);
  const [professionalSelected, setProfessionalSelected] = useState('');
  const [isTechLead, setIsTechLead] = useState(false);
  const [hoursMonth, setHoursMonth] = useState('');
  const [overtime, setOvertime] = useState('');
  const [reset] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [menuOptionsIsVisible, setMenuOptionsIsVisible] = useState(false);
  const [professionalClicked, setProfessionalClicked] = useState('');
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [hoursMonthEdit, setHoursMonthEdit] = useState('');
  const [overtimeEdit, setOvertimeEdit] = useState('');
  const [jobProject, setJobProject] = useState('');
  const { id } = useParams();

  useLayoutEffect(() => {
    const optionsValid = checkArraysDifference({
      completeArray: allOptions,
      comparisonArray: team,
      key: 'id',
    });
    setOptions(optionsValid);
    setDataTechLead(optionsValid);
    setDataTeam(optionsValid);
    handleRows();
  }, [allOptions, team]);

  useEffect(()=>{
    getJobs()
  },[])


  const getJobs = async () => {
    const { data } = await api({
      method: 'get',
      url: `/job/?limit=undefined`,
    });
    setJobsMember(data.data);
  };

  function handleRows() {
    setRows([]);
    team.map((member) => {
      const item = {
        id: member.id,
        avatar: member.avatar,
        name: member?.name,
        job: member?.job_ || member.job?.name,
        status: member.status,
        hours_estimed: member?.hours_mounths_estimated || member?.hours_estimed,
        hours_perfomed: member?.hours_mounths_performed,
        extrasHours_estimed:
          member.extrasHours_estimed || member.extra_hours_estimated,
        extrasHours_performed: member?.extra_hours_performed,
      };
      setRows((oldState) => [...oldState, item]);
    });
  }

  function handleAddMember() {
    const jobName = jobsMember.find(
      (job) => job.id === Number(jobProject)
    )?.name;
    if (!professionalSelected) return;
    const selected = allOptions.find(
      (member) => member.id == professionalSelected
    );

    if (!id) {
      setTeam((oldState) => [
        ...oldState,
        {
          id: selected.id,
          name: selected.name,
          hours_estimed: hoursMonth,
          extrasHours_estimed: overtime,
          avatar: selected.avatar,
          job_:isTechLead? "TechLead": jobName, 
          status: selected.status,
          isTechLead: isTechLead,
        },
      ]);
      resetInputs();
      return;
    }
    addMember(professionalSelected, hoursMonth, overtime, isTechLead, jobName, status);
    resetInputs();
  }


  function handleRemoveMember() {
    if (!id) {
      const data = team.filter((member) => member.id !== professionalClicked);
      setTeam(data);
      setModalIsVisible(false);
      return;
    }
    removerMember(professionalClicked);
    setModalIsVisible(false);
  }

  function resetInputs() {
    setProfessionalSelected(null);
    setHoursMonth('');
    setOvertime('');
  }

  function professionalClickHandler(memberId) {
    setMenuOptionsIsVisible(!menuOptionsIsVisible);
    setProfessionalClicked(memberId);
  }

  function handleEditModal() {
    setOpenModalEdit(true);
    setMenuOptionsIsVisible(false);
  }

  function handleRemoveModal() {
    setModalIsVisible(true);
    setMenuOptionsIsVisible(false);
  }

  return (
    <AttachmentContainer>
      <SecondaryText margin="0 0 2.5em 0">Time</SecondaryText>
      <SecondaryText margin="0 0 2.5em 0">Vicular Projetos</SecondaryText>
      <ContainerLabel>

        <InputSelectWithLabel
          onFocus={() =>
            setDataTechLead(
              options.filter((professional) => professional.id !== 0)
            )
          }
          setSelectedOption={(e) => {
            setProfessionalSelected(e.target.value);
            setIsTechLead(true);
            setDataTeam([]);
          }}
          options={dataTechLead}
          placeholder="Lider"
          width="100%"
          lineWidth="25%"
          label="selecionar o Lider"
          reset={reset}
        />
      </ContainerLabel>
  
      <AttachmentForm>
        <InputSelectWithLabel
          onFocus={() =>
            setDataTeam(options.filter((professional) => professional.id !== 0))
          }
          setSelectedOption={(e) => {
            setProfessionalSelected(e.target.value);
            setIsTechLead(false);
            setDataTechLead([]);
          }}
          options={dataTeam}
          placeholder="Time"
          width="100%"
          lineWidth="25%"
          label="Selecionar time"
          reset={reset}
        />

        <InputSelect
          onChange={(e) => setJobProject(e.target.value)}
          options={jobsMember}
          disabled={isTechLead}
          placeHolder="Cargo"
          width="100%"
          lineWidth="15%"
          label="Cargo"
        />
        <InputText
          width="100%"
          widthLine="22%"
          placeholder="Horas Mensais Estimadas"
          onChange={(e) => setHoursMonth(e.target.value)}
          value={hoursMonth}
          type="number"
        />
        <InputText
          width="100%"
          widthLine="20%"
          placeholder="Horas Extras Estimadas"
          onChange={(e) => setOvertime(e.target.value)}
          value={overtime}
          type="number"
        />
        <BlueButton width="13%" onClick={handleAddMember} type="button">
          Vincular
        </BlueButton>
      </AttachmentForm>
      <ListHeaderContainer>
     <ListHeader/>
      </ListHeaderContainer>
      {rows.map((member, index) => (
        <AttachmentTableLine key={index}>
          <ProfessionalInfo>
            <ProfessionalProfilePicture>
              <ProfilePicture src={member?.avatar || User} />
            </ProfessionalProfilePicture>
            <div className="professional">
              <ProfessionalName>{member?.name}</ProfessionalName>
              <ProfessionalJob>{member.job}</ProfessionalJob>
            </div>
          </ProfessionalInfo>
          <ProfessionalHours>{member?.hours_estimed || 0}</ProfessionalHours>
          <ProfessionalOvertime width="10em">
            {member?.hours_perfomed || 0}
          </ProfessionalOvertime>

          <ProfessionalPercent w="6em">
            {member.hours_perfomed
              ? (
                (member?.hours_estimed / member?.hours_perfomed) *
                100
              ).toFixed(1)
              : 0}
            %
          </ProfessionalPercent>
          <ProfessionalOvertime width="11em">
            {member?.extrasHours_estimed || 0}
          </ProfessionalOvertime>
          <ProfessionalOvertime width="10em">
            {member?.extrasHours_performed || 0}
          </ProfessionalOvertime>
          <ProfessionalPercent w="20em">
            {member.extrasHours_performed
              ? (
                (member?.extrasHours_estimed /
                  member?.extrasHours_performed) *
                100
              ).toFixed(1)
              : 0}
            %
          </ProfessionalPercent>
          <ProfessionalStatus>
            <Badge
              status={member?.status === true ? status.ATIVO : status.INATIVO}
            />
          </ProfessionalStatus>

          {modalIsVisible && (
            <ModalRed
              id={professionalClicked}
              redButtonClickHandler={handleRemoveMember}
              CloseButtonClickHandler={() => setModalIsVisible(false)}
              title="Remover profissional"
              message="Tem certeza que deseja remover profissional?"
            />
          )}
          <ContainerIcon>
            <BsThreeDotsVertical
              color="#919EAB"
              onClick={() => professionalClickHandler(member.id)}
            />
          </ContainerIcon>
          {menuOptionsIsVisible && member?.id === professionalClicked && (
            <MenuOptions
              positionMenu="25px"
              firstOptionDescription={id ? "Editar" : null}
              secondOptionDescription="Remover"
              firstChosenOption={() => handleEditModal()}
              secondChosenOption={handleRemoveModal}
              padding="0.3em 0.5em 0.3em 1.7em"
              id={member?.id}
            />
          )}
          {openModalEdit && (
            <ModalEditAttachment
              professionalClicked={professionalClicked}
              CloseButtonClickHandler={() => setOpenModalEdit(false)}
              editMember={editMember}
              setOpenModalEdit={setOpenModalEdit}
              setWorkload={setHoursMonthEdit}
              setOvertime={setOvertimeEdit}
              overtime={overtimeEdit}
              saveHandler={editMember}
              team={team}
              status={status}
            />
          )}
        </AttachmentTableLine>
      ))}
    </AttachmentContainer>
  );
};

export default AttachmentTeam;