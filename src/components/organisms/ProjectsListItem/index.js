import React, { useRef, useState } from "react";
import {
  ProjectsListItemContainer,
  ProjectsListItemProject,
} from "./style.js";
import { useEffect } from "react";
import ProjectRow from "./row";

export const ProjectsListItem = ({ data, statusOptions, getProjects }) => {
  const [menuOptionsIsVisible, setMenuOptionsIsVisible] = useState(false);
  const modalRef = useRef();
  const buttonRef = useRef();

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

  return data.map((project) => <ProjectRow statusOptions={statusOptions} project={project} getProjects={getProjects}/>);

};

export default ProjectsListItem;
