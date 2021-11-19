import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { BsThreeDots } from "react-icons/bs";
import { TeamMemberPic } from '../../atoms/TeamMemberPic/style.js';

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
    TeamMemberDetails,
    Name,
    WorkLoad
} from './style.js'

import User from '../../../assets/user.png'
import {ReactComponent as OptionsIcon} from '../../../assets/icons/options.svg'
import StatusLabel from '../../atoms/StatusLabel'
import MenuOptions from '../../atoms/MenuOptions/index.js';
import { projectsPages, setProjectList, setStatusColors, setStatusList } from '../../../redux/actions';
import api from '../../../api/api';
import { ModalProjectStatus } from '../ModalProjectStatus/index.js';
import ModalProjectTeam from '../ModalProjectTeam/index.js';

export const ProjectsListItem = () => {
    const history = useHistory()
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [idProjectClicked, setIdProjectClicked] = useState(0)
    const [idProjectStatusClicked, setIdProjectStatusClicked] = useState(0)
    const [menuOptionsisVisible, setMenuOptionsisVisible] = useState(false)
    const [userDetailsIsVisible, setUserDetailsIsVisible] = useState(false)
    const [userProjects, setUserProjects] = useState([])
    const [userDetailsInfo, setUserDetailsInfo] = useState({})
    const [projectInfo, setProjectInfo]= useState('')
    const [statusModalIsVisible, setStatusModalIsVisible] = useState(false)
    const [teamModalIsVisible, setTeamModalIsVisible] = useState(false)

    const getProjectsList = async () => {
        
        try{
            const {data} = await api({
                method:'get',     
                url:`/project`
            }); 
            dispatch(setProjectList(data.data))
            dispatch(projectsPages(data.meta));
    

        }catch(err){

        }
    }

    const saveStatus = async () => {
        try {

            const {data} = await api({
                method: 'get',
                url: '/projectStatus',
            });

            dispatch(setStatusList(data.data))
            
        } catch (err) {
        }
    }


    const menuOptionsClicked = (projectId, statusId) => {
        setMenuOptionsisVisible(!menuOptionsisVisible)
        setIdProjectClicked(projectId)
        setIdProjectStatusClicked(statusId)
    }

    const editProject = (id) => {
        history.push({
            pathname: `/project/${id}`
          })
        return getUserProjects();
    }


    const detailsOnMouseEnter = (projectId, userId) => {
        const project = userProjects.find(project => {
            return projectId === project.project_id
        })

       const user = project?.users.find(user => {
            return userId === user.user_id
       })
  
       const fullName = user?.name.split(' ')
       let firstName;
       let lastName;
       if(fullName){
            firstName = fullName[0]
            lastName = fullName[fullName.length - 1]
       }

        setUserDetailsInfo({...user, name: `${firstName} 
        ${lastName !== firstName ? lastName : ''}`})
        setProjectInfo(project)
        setUserDetailsIsVisible(true)

 
    };

    const detailsOnMouseLeave = (projectId, userId) => {
        setUserDetailsIsVisible(false)
    }

    const getUserProjects = async () => {
        try{

            const {data} = await api({
                method: 'get',
                url: '/userProjects',
            });

            console.log(data)
            setUserProjects(data)
           

        }catch(error){
        }
    }

    useEffect(() => {
        saveStatus()
        getProjectsList()
    }, [])
        
    
    return (
        <div>
             {state.projects.map((project) => {
            
           const date = new Date(project.date_start)
           const projectDate = new Intl.DateTimeFormat('pt-BR').format(date)
          
         
            //project se relaciona com status

            const projectStatus = state.status.find((status) => {
                return project.project_status_id === status.id
               
            })


            const menuPosition = (i, arr) => {
                let position = 46;
                arr.map((menu, index) => {
                    if(index < i){
                        position = position + 46
                    }

                })
                return `${position}px`

            }

            //Lógica dos modais
            const openModalEditProjectStatus = () => {
                setStatusModalIsVisible(true)
                setMenuOptionsisVisible(false)
            }

            const closeModalEditProjectStatus = () => {
                setStatusModalIsVisible(false)
            }

            const openProjectTeamModal = () => {
                setTeamModalIsVisible(true)
            }

            const closeProjectTeamModal = () => {
                setTeamModalIsVisible(false)
            }
                
                return(
                    <ProjectsListItemContainer key={project.id}>
                            <ProjectsListItemProject>
                                {project.name}
                            </ProjectsListItemProject>
                            <ProjectsListItemType>
                                {project.project_type.name}
                            </ProjectsListItemType>
                            <ProjectsListItemBeginning>
                               {projectDate}
                            </ProjectsListItemBeginning>
                            <ProjectsListItemTime>
                                <ContainerTeamMemberPic>
                                {project.users.map((user, i, arr)=> (
                                    i < 5 && (
                                        <TeamMemberPic 
                                            src={user?.avatar || User}
                                            size="35px"
                                            margin="0 0.7em 0 0"
                                            onMouseEnter={() => 
                                                detailsOnMouseEnter(project.id, user.id) 
                                            }
                                            onMouseLeave={() =>
                                                detailsOnMouseLeave(project.id, user.id)
                                            }
                                        />
                                    )
                                ))}

                                {project.users.length > 4 &&
                                    <BsThreeDots
                                    color="black"
                                    size="1.4em"
                                    style={{cursor: 'pointer', margin: '0.7em'}}
                                    onClick={openProjectTeamModal}
                                    /> 
                                    
                                }

                                {project.users.map((user, i, arr) => {
                                    return user.id === userDetailsInfo.user_id &&
                                    project.id === projectInfo?.project_id &&
                                    userDetailsIsVisible && 
                                        <TeamMemberDetails position={menuPosition(i, arr)}>
                                            <Name>
                                                {userDetailsInfo.name}
                                            </Name>
                                            <WorkLoad>
                                                {`${userDetailsInfo.workload} h/mês`}
                                            </WorkLoad>
                                        </TeamMemberDetails>    
                                })}
                                </ContainerTeamMemberPic>
                            </ProjectsListItemTime>
                            <ProjectsListItemStatus>
                                <StatusLabel
                                name={projectStatus?.name}
                                textColor={projectStatus?.color.text_color}
                                buttonColor={projectStatus?.color.button_color}
                                />
                            </ProjectsListItemStatus>
                            <ProjectListOptions optionsColor={menuOptionsisVisible && project.id == idProjectClicked ? "#407BFF" : "#B7BDC2"}>
                                <ContainerIconOptions onClick={() => menuOptionsClicked(project.id, project.project_status_id)}>
                                    <OptionsIcon/>
                                </ContainerIconOptions>
                            {menuOptionsisVisible && project.id == idProjectClicked &&
                                <MenuOptions
                                positionMenu="40px"
                                firstChosenOption={editProject}
                                firstOptionDescription="Editar Projeto"
                                secondChosenOption={openModalEditProjectStatus}
                                secondOptionDescription="Editar Status"
                                padding="0.3em 0.5em 0.3em 1.1em"
                                id={idProjectClicked}
                                />
                            }
                            </ProjectListOptions>
                            {statusModalIsVisible && <ModalProjectStatus 
                            CloseButtonClickHandler={closeModalEditProjectStatus}
                            statusId={idProjectStatusClicked}
                            projectId={idProjectClicked}
                            />}
                            {teamModalIsVisible && <ModalProjectTeam
                            CloseButtonClickHandler={closeProjectTeamModal}
                            users={project.users}
                            />}
                    </ProjectsListItemContainer>
                )
            })}
        </div> 
    )
}

export default ProjectsListItem;