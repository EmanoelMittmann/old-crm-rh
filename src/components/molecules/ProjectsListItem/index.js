import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import {
    ProjectListOptions,
    ProjectsListItemContainer,
    ProjectsListItemProject,
    ProjectsListItemType,
    ProjectsListItemBeginning,
    ProjectsListItemTime,
    ProjectsListItemStatus,
    ContainerIconOptions,
    TeamMemberPic,
    ContainerTeamMemberPic,
    TeamMemberDetails,
    Name,
    WorkLoad
} from './style.js'

import User from '../../../assets/user.png'
import {ReactComponent as OptionsIcon} from '../../../assets/icons/options.svg'
import StatusLabel from '../../atoms/StatusLabel'
import MenuOptions from '../../atoms/MenuOptions/index.js';
import { setProjectList, setStatusColors, setStatusList } from '../../../redux/actions';
import api from '../../../api/api';

export const ProjectsListItem = () => {
    const history = useHistory()
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [idProjectClicked, setIdProjectClicked] = useState(0)
    const [menuOptionsisVisible, setMenuOptionsisVisible] = useState(false)
    const [userDetailsIsVisible, setUserDetailsIsVisible] = useState(false)
    const [userProjects, setUserProjects] = useState([])
    const [userDetailsInfo, setUserDetailsInfo] = useState({})
    const [projectInfo, setProjectInfo]= useState('')

    const getProjectsList = async () => {
        
        try{
            const {data} = await api({
                method:'get',     
                url:`/project`,
            }); 
    
            dispatch(setProjectList(data.data))
          
        }catch(err){
            if(err.request?.status === 401){
                history.push("/");
            }
        }
    }

    const getStatusColor = async () => {
        try{
            const {data} = await api({
                method: 'get',
                url: '/color'
            })

            dispatch(setStatusColors(data))

        } catch(err){
            if(err.request.status === 401){
                history.push("/");
            }
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
            if(err.request.status === 401){
                history.push("/");
            }
        }
    }


    const menuOptionsClicked = (projectId) => {
        setMenuOptionsisVisible(!menuOptionsisVisible)
        setIdProjectClicked(projectId)
    }

    const editProject = (id) => {
        history.push({
            pathname: "/project",
            state: { projectId: id }
          })
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

            setUserProjects(data)

        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getUserProjects()
        getStatusColor()
        saveStatus()
        getProjectsList()
    }, [])
        
    
    return (
        <div>
             {state.projects.map((project) => {
            
            const date = new Date(project.date_start)
            const projectDate = new Intl.DateTimeFormat('pt-BR').format(date)
        
            const projectTypeName = state.projectType.map((type) => {
                if(project.project_type_id === type.id) return type.name
            })
        
            //project se relaciona com status
            // const projectStatus = state.status.find((status) => {
            //     return project.project_status_id === status.id
            // })
        
            // // status se relaciona com a cor
            const projectStatusColor = state.statusColors.find(color => {
                return project.status.id === color.id 
            })

            const menuPosition = (i, arr) => {
                let position = 65;
                arr.map((menu, index) => {
                    if(index < i){
                        position = position + 55
                    }

                })
                return `${position}px`

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
                                {project.users.map((user, i)=> (
                                    i < 5 && (
                                        <TeamMemberPic 
                                            src={user?.avatar || User}
                                            onMouseEnter={() => 
                                                detailsOnMouseEnter(project.id, user.id) 
                                            }
                                            onMouseLeave={() =>
                                                detailsOnMouseLeave(project.id, user.id)
                                            }
                                        />
                                    )
                                ))}

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
                                // name={projectStatus?.name}
                                textColor={projectStatusColor?.text_color}
                                buttonColor={projectStatusColor?.button_color}
                                />
                            </ProjectsListItemStatus>
                            <ProjectListOptions optionsColor={menuOptionsisVisible && project.id == idProjectClicked ? "#407BFF" : "#B7BDC2"}>
                                <ContainerIconOptions onClick={() => menuOptionsClicked(project.id)}>
                                    <OptionsIcon/>
                                </ContainerIconOptions>
                            {menuOptionsisVisible && project.id == idProjectClicked &&
                                <MenuOptions
                                chosenOption={editProject}
                                id={idProjectClicked}
                                />
                            }
                            </ProjectListOptions>
                    </ProjectsListItemContainer>
                )
            })}
        </div> 
    )
}

export default ProjectsListItem;