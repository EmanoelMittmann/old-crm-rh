import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'


import {
    setProjectList,
    projectsPages,
    setSearchNameProject,
    setTypeListProjects,
    setStatusListProjects,
    setFilterStatusProjects,
    setFilterTypesProjects,
    setProjectListProjects
} from '../../../redux/actions/index.js'

import api from '../../../api/api.js'
import { ProjectsInputsContainer } from './style.js'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'


export const ProjectsInputs = () => {

    //ver como introduzir a funcionalidade do redux
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useLocation()

    const [selectedOptionStatus, setSelectedOptionStatus] = useState('')
    const [selectedOptionTypes, setSelectedOptionTypes] = useState('')
    const [searchResult, setSearchResult] = useState('')
    const [projectsOptionStatus, setProjectsOptionStatus] = useState([])
    const [projectsOptionTypes, setProjectsOptionTypes] = useState([])
    const [selectedOption, setSelectedOption] = useState('')

    let params = {}

    const handleFilterRequestProject = () => {
        params.page = 1

        if (selectedOptionStatus !== "")
            params.status_id = selectedOptionStatus

        if (selectedOptionTypes !== "")
            params.type_id = selectedOptionTypes

        if (searchResult !== "")
            params.search = searchResult

        if (state.filterOrder !== "" )
            params.orderField = 'name'

        if (state.filterOrder !== "")
            params.order = state.filterOrder

        if (selectedOption !== " " && selectedOption !== "")
            params.is_active = selectedOption

    }

    const projectsFilterTypesOptions = async () => {

        const { data } = await api({
            method: 'get',
            url: `/projectType`,

        })

        data.data.push({ name: "Todos"})

        setProjectsOptionTypes(data.data)
        dispatch(projectsPages(data.meta))

        return data
    }

    const projectsFilterStatusOptions = async () => {


        const { data } = await api({
            method: 'get',
            url: `/projectStatus`,
        })

        data.data.push({ name: "Todos"})

        setProjectsOptionStatus(data.data)
        dispatch(projectsPages(data.meta))

        return data
    }

    
    //Chamar api para filtrar a pesquisa

    const filterProjects = async () => {

        try {
            handleFilterRequestProject()

            const { data } = await api({
                method: 'get',
                url: `/project`,    
                params: params
            });

            dispatch(setProjectList(data.data));
            dispatch(projectsPages(data.meta))

        } catch (error) {
        }
    }

    useEffect(() => {
        projectsFilterTypesOptions()
        projectsFilterStatusOptions()
        dispatch(setSearchNameProject(searchResult))
        dispatch(setStatusListProjects(selectedOptionStatus))
        dispatch(setTypeListProjects(selectedOptionTypes))
        return filterProjects()
    }, [searchResult, selectedOptionStatus, selectedOptionTypes])


 
    return (
        <ProjectsInputsContainer>
            <InputSearch
                lineWidth="100%"
                inputWidth="100%"
                setSearchResult={setSearchResult}
            />
            <InputSelect
                options={projectsOptionTypes}
                setSelectedOption={setSelectedOptionTypes}
                placeholder="Tipo"
                width="100%"
                lineWidth="100%"
            />
            <InputSelect
                options={projectsOptionStatus}
                setSelectedOption={setSelectedOptionStatus}
                placeholder="Status"
                width="100%"
                lineWidth="100%"
            />
        </ProjectsInputsContainer>
    )
}

export default ProjectsInputs;
