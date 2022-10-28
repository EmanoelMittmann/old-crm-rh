import styled from "styled-components"

export const ProjectsListItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 65px;
`

export const ProjectsListItemProject = styled.div`
    display: flex;
    width: 22.5%;
    padding-left: 3em;
`

export const ProjectsListItemType = styled.div`
    width: 15%;
    align-items: center;
    padding-left: 3em;
`

export const ProjectsListItemBeginning = styled.div`
    width: 16%;  
    padding-left: 3em;
    `

export const ProjectsListItemTime = styled.div`
    display: flex;
    width: 23%;
    padding-left: 3em;

`
export const ProjectsListItemStatus = styled.div`
    width: 10%;
    padding-left: 5em;
`
export const ProjectListOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 13%;

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
