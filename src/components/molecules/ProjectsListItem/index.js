import React from 'react'
import { useEffect } from 'react';
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
} from './style.js'
import StatusLabel from '../../atoms/StatusLabel'
import { setProjectList, setStatusColors, setStatusList } from '../../../redux/actions';
import Options from '../../atoms/icons/Options/index.js'
import api from '../../../api/api';

export const ProjectsListItem = () => {
    const history = useHistory()
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const getProjectsList = async () => {
        
        try{
            const {data} = await api({
                method:'get',     
                url:`/project`,
            }); 
    
            dispatch(setProjectList(data.data))
          
        }catch(err){
            if(err.request.status === 401){
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

    useEffect(() => {
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
                const projectStatus = state.status.find((status) => {
                    return project.project_status_id === status.id
                })
                
                // status se relaciona com a cor
                const projectStatusColor = state.statusColors.find(color => {
                    return projectStatus.colors_id === color.id 
                })

                
                return(
                    <ProjectsListItemContainer key={project.id}>
                            <ProjectsListItemProject>
                                {project.name}
                            </ProjectsListItemProject>
                            <ProjectsListItemType>
                                {projectTypeName}
                            </ProjectsListItemType>
                            <ProjectsListItemBeginning>
                                {projectDate}
                            </ProjectsListItemBeginning>
                            <ProjectsListItemTime>
                                Time
                            </ProjectsListItemTime>
                            <ProjectsListItemStatus>
                                <StatusLabel
                                name={projectStatus.name}
                                textColor={projectStatusColor.text_color}
                                buttonColor={projectStatusColor.button_color}
                                />
                            </ProjectsListItemStatus>
                            <ProjectListOptions>
                                <Options info={project}/>
                            </ProjectListOptions>
                    </ProjectsListItemContainer>
                )
            })}
        </div> 
    )
}

export default ProjectsListItem;