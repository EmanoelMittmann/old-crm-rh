import React, { useState } from 'react'
import { useHistory } from 'react-router'
import StatusLabel from '../../atoms/StatusLabel'
import MenuOptions from '../../atoms/MenuOptions/index.js'
import { ModalProjectStatus } from '../../molecules/ModalProjectStatus/index.js'
import ModalProjectTeam from '../../molecules/ModalProjectTeam/index.js'
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
} from './style.js'
import { formatDate } from '../../utils/formatDate.js'
import { ReactComponent as OptionsIcon } from '../../../assets/icons/options.svg'
import { TeamMemberAttachment } from '../../molecules/TeamMemberAttachment/index.js'


export const ProjectsListItem = ({ data, statusOptions, getProjects }) => {
    const history = useHistory()
    const [idProjectClicked, setIdProjectClicked] = useState(0)
    const [idProjectStatusClicked, setIdProjectStatusClicked] = useState(0)
    const [menuOptionsIsVisible, setMenuOptionsIsVisible] = useState(false)
    const [statusModalIsVisible, setStatusModalIsVisible] = useState(false)
    const [teamModalIsVisible, setTeamModalIsVisible] = useState(false)

    const menuOptionsClicked = (projectId, statusId) => {
        setMenuOptionsIsVisible(!menuOptionsIsVisible)
        setIdProjectClicked(projectId)
        setIdProjectStatusClicked(statusId)
    }

    const editProject = (id) => {
        history.push({
            pathname: `/project/${id}`
        })
    }

    const openModalEditProjectStatus = () => {
        setStatusModalIsVisible(true)
        setMenuOptionsIsVisible(false)
    }

    const closeModalEditProjectStatus = () => {
        setStatusModalIsVisible(false)
        getProjects()
    }

    const openProjectTeamModal = () => {
        setTeamModalIsVisible(true)
    }

    const closeProjectTeamModal = () => {
        setTeamModalIsVisible(false)
    }

    if (!data) {
        return (
            <ProjectsListItemContainer>
                <ProjectsListItemProject>
                    Loading...
                </ProjectsListItemProject>
            </ProjectsListItemContainer>
        )
    }

    if (!data.length) {
        return (
            <ProjectsListItemContainer>
                <ProjectsListItemProject>
                    Nenhum projeto encontrado...
                </ProjectsListItemProject>
            </ProjectsListItemContainer>
        )
    }

    return (
        <> {data.map((project) => {
            return (
                <ProjectsListItemContainer key={project.id}>
                    <ProjectsListItemProject>
                        {project.name}
                    </ProjectsListItemProject>
                    <ProjectsListItemType>
                        {project.project_type.name}
                    </ProjectsListItemType>
                    <ProjectsListItemBeginning>
                        {formatDate(project.date_start)}
                    </ProjectsListItemBeginning>
                    <ProjectsListItemTime>
                        <ContainerTeamMemberPic>
                            <TeamMemberAttachment
                                data={data}
                                project={project}
                                openProjectTeamModal={openProjectTeamModal}
                            />
                        </ContainerTeamMemberPic>
                    </ProjectsListItemTime>
                    <ProjectsListItemStatus>
                        <StatusLabel
                            name={project.status.name}
                            textColor={project.status.color.text_color}
                            buttonColor={project.status.color.button_color}
                        />
                    </ProjectsListItemStatus>
                    <ProjectListOptions optionsColor={menuOptionsIsVisible && project.id == idProjectClicked ? "#407BFF" : "#B7BDC2"}>
                        <ContainerIconOptions onClick={() => menuOptionsClicked(project.id, project.project_status_id)}>
                            <OptionsIcon />
                        </ContainerIconOptions>
                        {menuOptionsIsVisible && project.id === idProjectClicked &&
                            <MenuOptions
                                positionMenu="40px"
                                firstChosenOption={editProject}
                                firstOptionDescription="Editar Projeto"
                                secondChosenOption={openModalEditProjectStatus}
                                secondOptionDescription="Editar Status"
                                padding="0.3em 0.5em 0.3em 1.1em"
                                id={project.id}
                            />
                        }
                    </ProjectListOptions>

                    {statusModalIsVisible &&
                        <ModalProjectStatus
                            CloseButtonClickHandler={closeModalEditProjectStatus}
                            statusId={idProjectStatusClicked}
                            projectId={idProjectClicked}
                            options={statusOptions} />      
                    }
                    {teamModalIsVisible &&
                        <ModalProjectTeam
                            CloseButtonClickHandler={closeProjectTeamModal}
                            users={project.users} />



                    }
                </ProjectsListItemContainer>
            )
        })} </>
    )
}

export default ProjectsListItem