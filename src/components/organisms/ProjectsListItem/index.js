import React, { useRef, useState } from "react";
import {
  ProjectsListItemContainer,
  ProjectsListItemProject,
} from "./style.js";
import { useEffect } from "react";
import ProjectRow from "./row";

export const ProjectsListItem = ({ data, statusOptions, getProjects }) => {
  const [modalDetails,setModalDetails] = useState(false)

  if (!data) {
    return (
      <ProjectsListItemContainer>
        <ProjectsListItemProject>Loading...</ProjectsListItemProject>
      </ProjectsListItemContainer>
    );
  }

  if (!data.length) {
    return (
      <ProjectsListItemContainer>
        <ProjectsListItemProject>
          Nenhum projeto encontrado...
        </ProjectsListItemProject>
      </ProjectsListItemContainer>
    );
  }
  
  const handleDetails = () => {
    setModalDetails(prev => !prev)
  }

  return data.map((project) => <ProjectRow statusOptions={statusOptions} project={project} getProjects={getProjects} key={project.id}/>);

};

export default ProjectsListItem;
