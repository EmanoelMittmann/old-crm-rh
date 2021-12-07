import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

import api from '../../../api/api.js';
import ProjectsListHeader from '../../atoms/ProjectsListHeader'
import ProjectsInputs from '../../molecules/ProjectsInputs/index.js'
import ProjectsListItem from '../../molecules/ProjectsListItem'
import { ProjectsSectionContainer, ContainerMainContent } from './style.js'
import Footer from '../Footer'



import {
    projectsPages,
    setProjectList
} from '../../../redux/actions'



export const ProjectsSection = () => { 
    const dispatch = useDispatch()
    const location = useLocation();
    const state = useSelector(state => state)
    
    const lastPage = state.projectsPagesFilter.last_page
    const currentPage = state.projectsPagesFilter.current_page
    const firstPage = state.projectsPagesFilter.first_page
    let params={};
 
 const handleFilterRequestProject = (pagesFilter) => {
     if(pagesFilter === "previous") params.page = `${
         state.projectsPagesFilter.current_page - 1
     }`

     if(pagesFilter === "next") params.page = `${
         state.projectsPagesFilter.current_page + 1
     }`

     if(state.filterStatusProjects !== "" && state.filterStatusProjects!== "") 
     params.is_active = state.filterStatusProjects

     if(state.projectsSearchFilter !== "") 
     params.search = state.projectsSearchFilter

     if(state.filterOrder !== "") 
     params.orderField = 'name'

     if(state.filterOrder !== "") 
     params.order = state.filterOrder
 }
const nextPage = async () => {
   
    handleFilterRequestProject("next")

    const { data } = await api({
        method: 'get',
        url: `/project`,
        params: params
    });

    dispatch(setProjectList(data.data));
    dispatch(projectsPages(data.meta));

    return data;
}

const previousPage = async () => {
    
    handleFilterRequestProject("previous")

    const { data } = await api({
        method: 'get',
        url: `/project`,
        params: params
    });
    dispatch(setProjectList(data.data));
    dispatch(projectsPages(data.meta));


    return data;
}

    return (
        <ProjectsSectionContainer>
            <ContainerMainContent>
                <ProjectsInputs />
                <ProjectsListHeader />
                <ProjectsListItem />
            </ContainerMainContent>
                <Footer
                    previousPage={previousPage}
                    nextPage={nextPage}
                    lastPage={lastPage}
                    currentPage={currentPage}
                    firstPage={firstPage}
                />
        </ProjectsSectionContainer>
    )

}
export default ProjectsSection;