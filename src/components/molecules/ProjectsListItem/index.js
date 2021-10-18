import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    ProjectListOptions,
    ProjectsListItemContainer,
    ProjectsListItemProject,
    ProjectsListItemType,
    ProjectsListItemBeginning,
    ProjectsListItemTime,
    ProjectsListItemStatus

} from './style.js'
import StatusToDo from '../../atoms/StatusToDo/index.js';
import { setProjectList } from '../../../redux/actions';
import Options from '../../atoms/icons/Options/index.js'
import api from '../../../api/api';

export const ProjectsListItem = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const getProjectsList = async () => {
        const {data} = await api({
            method:'get',     
            url:`/project`,
        }); 

        dispatch(setProjectList(data.data))
        return data;
    }

    useEffect(() => {
        getProjectsList()
    }, []);

        

    return (
        <div>
             {state.projects.map((project) => {
                 const date = new Date(project.date_start)
                 const projectDate = new Intl.DateTimeFormat('pt-BR').format(date)

                const projectTypeName = state.projectType.map((type) => {
                    if(project.project_type_id === type.id) return type.name
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
                                <StatusToDo/>
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