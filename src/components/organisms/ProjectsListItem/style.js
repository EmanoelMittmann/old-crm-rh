import styled from "styled-components";

export const ProjectsListItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1em;
  height: 65px;
`;

export const ProjectsListItemId = styled.div`
  display: flex;
  width: 5%;
  font-weight: 600;
`;

export const ProjectsListItemProject = styled.div`
  display: flex;
  padding-left: 2.1em;
  justify-content: left;
  width: 25.4%;
`;

export const ProjectsListItemType = styled.div`
  display: flex;
  width: 15.5%;
  padding-right: 10em;
`;

export const ProjectsListItemBeginning = styled.div`
  width: 16%;
`;

export const ProjectsListItemTime = styled.div`
  width: 20%;
  display: flex;
`;
export const ProjectsListItemStatus = styled.div`
  width: 8%;
`;
export const ProjectListOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 13%;

  svg {
    fill: ${(props) => props.optionsColor};
  }
`;

export const ContainerIconOptions = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "1em")};
  
  svg {
    fill: ${(props) => props.optionsColor};
    cursor: pointer;
  }
`;

export const ContainerDateFinal = styled.div`
  display: flex;
`;
