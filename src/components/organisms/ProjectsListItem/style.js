import styled from "styled-components";

export const ProjectsListItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
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
  height: 60px;
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
  width: 28%;
`;

export const ProjectsListItemType = styled.div`
  display: flex;
  width: 16%;
  padding-right: 10em;
`;

export const ProjectsListItemBeginning = styled.div`
  width: 19%;
`;

export const ProjectsListItemTime = styled.div`
  width: 20%;
  display: flex;
`;
export const ProjectsListItemStatus = styled.div`
  width: 15%;
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
  cursor: pointer;
  svg {
    fill: ${(props) => props.optionsColor}; 
  }
`;

export const ContainerDateFinal = styled.div`
  display: flex;
`;
