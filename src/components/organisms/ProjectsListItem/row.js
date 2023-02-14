import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import StatusLabel from "../../atoms/StatusLabel";
import MenuOptions from "../../atoms/MenuOptions/index.js";
import { ModalProjectStatus } from "../../molecules/ModalProjectStatus/index.js";
import ModalProjectTeam from "../../molecules/ModalProjectTeam/index.js";
import {
  ProjectListOptions,
  ProjectsListItemContainer,
  ProjectsListItemProject,
  ProjectsListItemType,
  ProjectsListItemBeginning,
  ProjectsListItemTime,
  ProjectsListItemStatus,
  ContainerIconOptions,
  ContainerTeamMemberPic,
  ProjectsListItemId,
  ContainerDateFinal,
} from "./style.js";
import { formatDate } from "../../utils/formatDate.js";
import { ReactComponent as OptionsIcon } from "../../../assets/icons/options.svg";
import { useEffect } from "react";

export const ProjectRow = ({ project, statusOptions, getProjects }) => {
  const history = useHistory();
  const [idProjectClicked, setIdProjectClicked] = useState(0);
  const [menuOptionsIsVisible, setMenuOptionsIsVisible] = useState(false);
  const [statusModalIsVisible, setStatusModalIsVisible] = useState(false);
  const [teamModalIsVisible, setTeamModalIsVisible] = useState(false);
  const modalRef = useRef();
  const buttonRef = useRef();

  const editProject = (id) => {
    history.push({
      pathname: `/project/${id}`,
    });
  };

  const openModalEditProjectStatus = () => {
    setStatusModalIsVisible(true);
    setMenuOptionsIsVisible(false);
  };

  const closeModalEditProjectStatus = () => {
    setStatusModalIsVisible(false);
    getProjects();
  };

  const closeProjectTeamModal = () => {
    setTeamModalIsVisible((prev) => !prev);
  };

  const handlerOutside = (e) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setMenuOptionsIsVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handlerOutside);
    return () => {
      document.removeEventListener("mousedown", handlerOutside);
    };
  }, []);

  return (
    <ProjectsListItemContainer key={project.id}>
      <ProjectsListItemId>{project.id}</ProjectsListItemId>
      <ProjectsListItemProject>{project.name}</ProjectsListItemProject>
      <ProjectsListItemType>{project.project_type?.name}</ProjectsListItemType>
      <ProjectsListItemBeginning>
        {formatDate(project.date_start)}
      </ProjectsListItemBeginning>
      <ProjectsListItemTime>
        <ContainerDateFinal>{formatDate(project.date_end)}</ContainerDateFinal>
      </ProjectsListItemTime>
      <ProjectsListItemStatus>
        <StatusLabel
          name={project.status.name}
          textColor={project.status.color.text_color}
          buttonColor={project.status.color.button_color}
        />
      </ProjectsListItemStatus>
      <ProjectListOptions
        optionsColor={
          menuOptionsIsVisible
            ? "#407BFF"
            : "#B7BDC2"
        }
      >
        <ContainerIconOptions>
          <OptionsIcon
            ref={buttonRef}
            onClick={() => setMenuOptionsIsVisible(!menuOptionsIsVisible)}
          />
        </ContainerIconOptions>
        {menuOptionsIsVisible && (
          <MenuOptions
            ref={modalRef}
            positionMenu="40px"
            firstChosenOption={editProject}
            firstOptionDescription="Editar Projeto"
            secondChosenOption={openModalEditProjectStatus}
            secondOptionDescription="Editar Status"
            padding="0.3em 0.5em 0.3em 1.1em"
            id={project.id}
          />
        )}
      </ProjectListOptions>

      {statusModalIsVisible && (
        <ModalProjectStatus
          CloseButtonClickHandler={closeModalEditProjectStatus}
          statusId={project.project_status_id}
          projectId={project.id}
          options={statusOptions}
        />
      )}
      {teamModalIsVisible && (
        <ModalProjectTeam
          CloseButtonClickHandler={closeProjectTeamModal}
          users={project.users}
        />
      )}
    </ProjectsListItemContainer>
  );
};

export default ProjectRow;
