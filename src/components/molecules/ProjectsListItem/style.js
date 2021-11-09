import styled from "styled-components";

export const ProjectsListItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 60px;
`

export const ProjectsListItemProject = styled.div`
    display: flex;
    width: 20%;
    padding-left: 3em;
`

export const ProjectsListItemType = styled.div`
    width: 13%;
    padding-left: 3em;
`

export const ProjectsListItemBeginning = styled.div`
    width: 17%;
    padding-left: 3em;
    `

export const ProjectsListItemTime = styled.div`
    width: 20%;
    padding-left: 0em;
    display: flex;
    position: relative;
`

export const ProjectsListItemStatus = styled.div`
    width: 17.5%;
    padding-left: 3em;
`
export const ProjectListOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 10%;

    svg {
        fill: ${props => props.optionsColor};
    }
`

export const ContainerIconOptions = styled.div`
    padding: 1em;
    cursor: pointer;
`

export const ContainerTeamMemberPic = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
`

export const TeamMemberDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    position: absolute;
    left: ${props => props.position};
    width: 155px;
    height: 50px;
    padding-left: 20px;
    border-radius: 8px; 
    background-color: white;
    box-shadow: 0px 16px 32px #919EAB66;
    z-index: 5;

    &:before {
        content: "";
        width: 20px;
        height: 25px;
        left: -10px;
        top: 13px;
        clip-path: polygon(0 50%, 100% 100%, 100% 0);
        position: absolute;
        background-color: white;
  }
`

export const Name = styled.p`
    font-size: 0.9rem;
`

export const WorkLoad = styled.span`
    font-size: 0.7rem;
`