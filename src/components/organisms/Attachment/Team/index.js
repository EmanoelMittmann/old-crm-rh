import React, { useState, useEffect, useLayoutEffect } from "react";
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
} from "./style.js";
import User from "../../../../assets/user.png";
import { BlueButton } from "../../../atoms/Buttons/BlueButton/style.js";
import SecondaryText from "../../../atoms/SecondaryText/style";
import InputSelectWithLabel from "../../../atoms/InputSelectWithLabel";
import InputText from "../../../atoms/InputText";
import {
  ListHeaderContainer,
  ListHeaderTitle,
} from "../../../atoms/ListHeader/style.js";
import MenuOptions from "../../../atoms/MenuOptions";
import { Badge } from "../../../atoms/Badge";
import ModalRed from "../../../molecules/ModalRed";
import ModalEditAttachment from "../../../molecules/ModalEditAttachment";

const status = {
  ATIVO: {
    name: "Ativo",
    color: {
      button_color: "#E4F8DD",
      text_color: "#229A16",
    },
  },
  INATIVO: {
    name: "Inativo",
    color: {
      button_color: "#FFE2E1",
      text_color: "#BB2B3F",
    },
  },
};

const AttachmentTeam = ({ attachment, allOptions }) => {
  const { team, setTeam, addMember, removerMember, editMember } = attachment;
  const [rows, setRows] = useState([]);
  const [options, setOptions] = useState([]);
  const [professionalSelected, setProfessionalSelected] = useState(null);
  const [hoursMonth, setHoursMonth] = useState("");
  const [overtime, setOvertime] = useState("");
  const [reset, setReset] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [menuOptionsIsVisible, setMenuOptionsIsVisible] = useState(false);
  const [professionalClicked, setProfessionalClicked] = useState("");
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [hoursMonthEdit, setHoursMonthEdit] = useState("");
  const [overtimeEdit, setOvertimeEdit] = useState("");
  const { id } = useParams();

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
        name: member.name,
        job: member.job.name || member.job,
        status: member.is_active || member.status,
        workload: member.workload,
        extra_hours_limit: member.extra_hours_limit,
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
          workload: hoursMonth,
          extra_hours_limit: overtime,
          avatar: selected.avatar,
          job: selected.job.name,
          status: selected.is_active,
        },
      ]);
      resetInputs();
      return;
    }

    addMember(professionalSelected, hoursMonth, overtime);
    resetInputs();
  }

  function handleEditMember() {
    if (!id) {
      const edited = team.map((member) => {
        if (member.id == professionalClicked) {
          return {
            ...member,
            workload: hoursMonthEdit,
            extra_hours_limit: overtimeEdit,
          };
        }
        if (member.id !== professionalClicked) {
          return member;
        }
      });
      setTeam(edited);
      setOpenModalEdit(false);
      return;
    }
    editMember(professionalClicked, hoursMonthEdit, overtimeEdit);
    setOpenModalEdit(false);
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
      <ListHeaderContainer>
        <ListHeaderTitle width="24%" margin="1em" wrap="nowrap">
          Profissional e Cargo
        </ListHeaderTitle>
        <ListHeaderTitle width="11%" margin="1em" left="1em">
          Horas Mensais Estimadas
        </ListHeaderTitle>
        <ListHeaderTitle width="10%" margin="1px">
          Horas Mensais Realizadas
        </ListHeaderTitle>
        <ListHeaderTitle width="10%" margin="0" right="1em">
          %
        </ListHeaderTitle>
        <ListHeaderTitle width="11%" margin="1px">
          Horas Extras Estimadas
        </ListHeaderTitle>
        <ListHeaderTitle width="10%" margin="1px">
          Horas Extras Realizadas
        </ListHeaderTitle>
        <ListHeaderTitle width="10%" margin="1px">
          %
        </ListHeaderTitle>
        <ListHeaderTitle width="20%" margin="1px">
          Status
        </ListHeaderTitle>
      </ListHeaderContainer>
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
          <ProfessionalHours>{member?.workload}</ProfessionalHours>
          <ProfessionalOvertime width='9%'>
            {member?.extra_hours_limit || 0}
          </ProfessionalOvertime>
          <ProfessionalPercent>0%</ProfessionalPercent>
          <ProfessionalOvertime width="10%">
            0
          </ProfessionalOvertime>
          <ProfessionalOvertime width='8.5%'>
            0
          </ProfessionalOvertime>
          <ProfessionalPercent>0%</ProfessionalPercent>
           <ProfessionalStatus>
            <Badge
              status={member?.status === 1 ? status.ATIVO : status.INATIVO}
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
                handleEditModal(member?.workload, member?.extra_hours_limit)
              }
              secondChosenOption={handleRemoveModal}
              padding="0.3em 0.5em 0.3em 1.7em"
              id={member?.id}
            />
          )}
          {openModalEdit && (
            <ModalEditAttachment
              CloseButtonClickHandler={() => setOpenModalEdit(false)}
              setWorkload={setHoursMonthEdit}
              workload={hoursMonthEdit}
              setOvertime={setOvertimeEdit}
              overtime={overtimeEdit}
              saveHandler={handleEditMember}
            />
          )}
        </AttachmentTableLine>
      ))}
    </AttachmentContainer>
  );
};

export default AttachmentTeam;

