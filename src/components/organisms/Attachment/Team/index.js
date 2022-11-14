import React, { useState, useLayoutEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { checkArraysDifference } from "../../../utils/checkArraysDifference";
import {
  AttachmentContainer,
  AttachmentForm,
  AttachmentTableLine,
  ContainerIcon,
} from "../style";
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
} from "./style.js";
import User from "../../../../assets/user.png";
import { BlueButton } from "../../../atoms/Buttons/BlueButton/style.js";
import SecondaryText from "../../../atoms/SecondaryText/style";
import InputSelectWithLabel from "../../../atoms/InputSelectWithLabel";
import InputText from "../../../atoms/InputText";
import MenuOptions from "../../../atoms/MenuOptions";
import { Badge } from "../../../atoms/Badge";
import ModalRed from "../../../molecules/ModalRed";
import ModalEditAttachment from "../../../molecules/ModalEditAttachment";
import { status } from "./OptionStatus";
import ListHeader from "./ListHeader";


const AttachmentTeam = ({ attachment, allOptions }) => {
  const { team, setTeam, addMember, removerMember, addMemberTeachLead } = attachment
  const [rows, setRows] = useState([])
  const [options, setOptions] = useState([])
  const [professionalSelected, setProfessionalSelected] = useState(null)
  const [selectLeader, setSelectLeader] = useState(null)
  const [hoursMonth, setHoursMonth] = useState('')
  const [overtime, setOvertime] = useState('')
  const [reset, setReset] = useState(true)
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [menuOptionsIsVisible, setMenuOptionsIsVisible] = useState(false)
  const [professionalClicked, setProfessionalClicked] = useState('')
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [hoursMonthEdit, setHoursMonthEdit] = useState('')
  const [overtimeEdit, setOvertimeEdit] = useState('')
  const { id } = useParams()

  useLayoutEffect(() => {
    const optionsValid = checkArraysDifference({
      completeArray: allOptions,
      comparisonArray: team,
      key: "id",
    });
    setOptions(optionsValid);
    handleRows();
  }, [allOptions, team]);


  function handleRows() {
    setRows([]);
    team.map((member) => {
      const item = {
        id: member.id,  
        avatar: member.avatar,
        name: member?.name,
        job: member.job?.name || member.job,
        status: member?.is_active || member.status,
        hours_estimed: member.hours_estimed || member.hours_mounths_estimated,
        hours_perfomed: member?.hours_mounths_performed,
        extrasHours_estimed: member.extrasHours_estimed || member.extra_hours_estimated,
        extrasHours_performed: member?.extra_hours_performed,
      };
      setRows((oldState) => [...oldState, item]);
    });
  }

  function handleAddMember() {
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
          job: selected.job.name,
          status: selected.is_active,
        },
      ]);
      resetInputs();
      return;
    }

    if (!professionalSelected) return;
    const selectedTechLead = allOptions.find(
      (member) => member.id === professionalSelected.is_techlead
    );
    if (!id) {
      setTeam((oldState) => [
        ...oldState,
        {
          id: selectedTechLead.id,
          name: selectedTechLead.name,
          workload: hoursMonth,
          extra_hours_limit: overtime,
          avatar: selectedTechLead.avatar,
          job: selectedTechLead.job.name,
          status: selectedTechLead.is_active,
        },
      ]);
      resetInputs();
      return;
    }

    addMember(professionalSelected, hoursMonth, overtime, selected.name, selected.avatar, selected.job.name, selected.is_active);
    addMemberTeachLead(professionalSelected, hoursMonth, overtime, selectedTechLead.name, selectedTechLead.avatar, selectedTechLead.job.name, selectedTechLead.is_active)
    resetInputs();
  }

  function handleEditMember() {
        if(!id) {
            const edited = team.map((member) => {
                if(member.id === professionalClicked){
                    return {...member, workload: hoursMonthEdit, extra_hours_limit: overtimeEdit}
                }
                if(member.id !== professionalClicked){
                    return member
                }
            })
            setTeam(edited)
            setOpenModalEdit(false)
            return
        }
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
    setHoursMonth("");
    setOvertime("");
  }

  function professionalClickHandler(memberId) {
    setMenuOptionsIsVisible(!menuOptionsIsVisible);
    setProfessionalClicked(memberId);
  }

  function handleEditModal(hoursMonth, overtime) {
    setOpenModalEdit(true);
    setMenuOptionsIsVisible(false);
    setHoursMonthEdit(hoursMonth);
    setOvertimeEdit(overtime);

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
          setSelectedOption={e => setSelectLeader(e.target.value)}
          options={options}
          placeholder="Lider"
          width="100%"
          lineWidth="36%"
          label="selecionar o Lider"
          reset={reset}
        />
      </ContainerLabel>
      <AttachmentForm>
        <InputSelectWithLabel
          setSelectedOption={(e) => setProfessionalSelected(e.target.value)}
          options={options}
          placeholder="Time"
          width="100%"
          lineWidth="38%"
          label="Selecionar time"
          reset={reset}
        />
        <InputText
          width="100%"
          widthLine="22%"
          placeholder="Horas Mensais Estimadas"
          onChange={(e) => setHoursMonth(e.target.value)}
          value={hoursMonth}
          type="number"
          margin="0 2em 0 2em"
        />
        <InputText
          width="100%"
          widthLine="20%"
          placeholder="Horas Extras Estimadas"
          onChange={(e) => setOvertime(e.target.value)}
          value={overtime}
          type="number"
          margin="0 2em 0 0"
        />
        <BlueButton width="13%" onClick={handleAddMember} type="button">
          Vincular
        </BlueButton>
      </AttachmentForm>

      <ListHeader />

      {rows.map((member, index) => (
        <AttachmentTableLine key={index}>
          <ProfessionalInfo>
            <ProfessionalProfilePicture>
              <ProfilePicture src={member?.avatar || User} />
            </ProfessionalProfilePicture>
            <div className="professional">
              <ProfessionalName>{member?.name}</ProfessionalName>
              <ProfessionalJob>{member?.job}</ProfessionalJob>
            </div>
          </ProfessionalInfo>
          <ProfessionalHours>{member?.hours_estimed}</ProfessionalHours>
          <ProfessionalOvertime width='10em'>
            {member?.hours_perfomed || 0}
          </ProfessionalOvertime>
          <ProfessionalPercent width='6em'>{member.hours_perfomed ? (member?.hours_estimed / member?.hours_perfomed * 100).toFixed(1) : 0}%</ProfessionalPercent>
          <ProfessionalOvertime width="11em">
            {member?.extrasHours_estimed}
          </ProfessionalOvertime>
          <ProfessionalOvertime width='10em'>
            {member?.extrasHours_performed || 0} 
          </ProfessionalOvertime>
          <ProfessionalPercent w='20em'>{member.extrasHours_performed ? (member?.extrasHours_estimed/member?.extrasHours_performed * 100).toFixed(1) : 0 }%</ProfessionalPercent>
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
              firstOptionDescription="Editar"
              secondOptionDescription="Remover"
              firstChosenOption={() =>
                handleEditModal(member?.hours_estimed, member?.hours_perfomed)
              }
              secondChosenOption={handleRemoveModal}
              padding="0.3em 0.5em 0.3em 1.7em"
              id={member?.id}
            />
          )}
          {openModalEdit && (
            <ModalEditAttachment
              professionalClicked={professionalClicked}
              CloseButtonClickHandler={() => setOpenModalEdit(false)}
              setOpenModalEdit={setOpenModalEdit}
              setWorkload={setHoursMonthEdit}
              setOvertime={setOvertimeEdit}
              overtime={overtimeEdit}
              saveHandler={handleEditMember}
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

