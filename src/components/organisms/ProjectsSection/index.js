import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

import api from '../../../api/api.js';
import ProjectsListHeader from '../../atoms/ProjectsListHeader'
import ProjectsInputs from '../../molecules/ProjectsInputs/index.js'
import ProjectsListItem from '../../molecules/ProjectsListItem'
import { ProjectsSectionContainer } from './style.js'

import Footer from '../Footer'


import {
    projectsPages,
    setProjectList
} from '../../../redux/actions'

// ta funfando porem falta coisa em peso

export const ProjectsSection = () => { 
    const dispatch = useDispatch()
    const location = useLocation();
    const state = useSelector(state => state)
    
    const lastPage = state.projectsPagesFilter.last_page
    const currentPage = state.projectsPagesFilter.current_page
    const firstPage = state.projectsPagesFilter.first_page


const nextPage = async () => {
    let params;

    if (state.filterOrder === "") {
        params = {
            page: `${state.projectsPagesFilter.current_page + 1}`,
            is_active: state.filterStatus,
            search: state.projectsSearchFilter,
        }
    }

    if (state.filterOrder !== "") {
        params = {
            page: `${state.projectsPagesFilter.current_page + 1}`,
            is_active: state.filterStatus,
            search: state.projectsSearchFilter,
            orderField: 'name',
            order: state.filterOrder,
        }
    }

    const { data } = await api({
        method: 'get',
        url: `${location.pathname}`,
        params: params
    });

    if (location.pathname === "/projects") dispatch(setProjectList(data.data));
    dispatch(projectsPages(data.meta));

    return data;
}

const previousPage = async () => {
    let params;

    if (state.filterOrder === "") {
        params = {
            page: `${state.projectsPagesFilter.current_page - 1}`,
            is_active: state.filterStatus,
            search: state.projectsSearchFilter,
        }
    }

    if (state.filterOrder !== "") {
        params = {
            page: `${state.projectsPagesFilter.current_page - 1}`,
            is_active: state.filterStatus,
            search: state.projectsSearchFilter,
            orderField: 'name',
            order: state.filterOrder,
        }
    }

    const { data } = await api({
        method: 'get',
        url: `${location.pathname}`,
        params: params
    });

    if (location.pathname === "/projects") dispatch(setProjectList(data.data));
    dispatch(projectsPages(data.meta));

    return data;
}

    return (
        <ProjectsSectionContainer>
            <ProjectsInputs />
            <ProjectsListHeader />
            <ProjectsListItem />
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