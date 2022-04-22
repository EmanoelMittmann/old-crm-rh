import styled from "styled-components"

export const ProjectsListItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 65px;
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
