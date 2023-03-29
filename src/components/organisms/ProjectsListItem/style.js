import styled from "styled-components";

export const ProjectsListItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color:#f4f6f8;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1em;
  border-radius: 10px;
  height: 50px;
`;

export const ProjectsListItemId = styled.div`
  display: flex;
  width: 5%;
  font-weight: 600;
`;

export const ProjectsListItemProject = styled.div`
  display: flex;
  padding-left: 2.7em;
  justify-content: left;
  width: 27.5%;
`;

export const ProjectsListItemType = styled.div`
  display: flex;
  width: 17%;
  padding-right: 10em;
`;

export const ProjectsListItemBeginning = styled.div`
  width: 17%;
`;

export const ProjectsListItemTime = styled.div`
  width: 18%;
  display: flex;
`;
export const ProjectsListItemStatus = styled.div`
  width: 15%;
`;
export const ProjectListOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10%;

  svg {
    fill: ${(props) => props.optionsColor};
  }
`;

export const ContainerIconOptions = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "1em")};
  cursor: pointer;
  svg {
    fill: ${(props) => props.optionsColor}; 
  }
`;

export const ContainerDateFinal = styled.div`
  display: flex;
`;
