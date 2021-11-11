import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'



// TRISTEZA PARA MAIS UM CAPITULO DUVIDOSO DO LUCAS NO FRONT..
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

    const [selectedOptionStatus, setSelectedOptionStatus] = useState('');
    const [selectedOptionTypes, setSelectedOptionTypes] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [projectsOptionStatus, setprojectsOptionStatus] = useState([]);
    const [projectsOptionTypes, setprojectsOptionTypes] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');


    let params = {}

    const handleFilterRequestProject = () => {
        params.page = 1


        if (state.projectStatusProjects !== "" && selectedOptionStatus !== "")
            params.status_id = selectedOptionStatus

        if (state.projectTypeProjects !== "" && selectedOptionTypes !== "")
            params.type_id = selectedOptionTypes


        if (state.projectsSearchFilter !== "" && searchResult !== "")
            params.search = searchResult

        if (state.filterOrder !== "" && searchResult !== "")
            params.orderField = 'name'

        if (state.filterOrder !== "" && searchResult !== "")
            params.order = state.filterOrder

        if (selectedOption !== " " && selectedOption !== "")
            params.is_active = selectedOption

    }

    const filterStatus = async () => {

        try {
            handleFilterRequestProject()

            const { data } = await api({
                method: 'get',
                url: `/project`,
                params: params
            });

            dispatch(setProjectList(data.data))
            dispatch(projectsPages(data.meta))


            //  console.log(data)
        } catch (error) {
            return console.error(error)
        }
    }



    useEffect(() => {
        filterStatus()
        dispatch(setStatusListProjects(selectedOptionStatus))
    }, [selectedOptionStatus])



    useEffect(() => {
        filterStatus()
        dispatch(setTypeListProjects(selectedOptionTypes))
    }, [selectedOptionTypes])



    const projectsFilterTypesOptions = async () => {

        const { data } = await api({
            method: 'get',
            url: `/projectType`,
            params: params

        });

        setprojectsOptionTypes(data.data)


        return data;


    }

    const projectsFilterStatusOptions = async () => {

        const { data } = await api({
            method: 'get',
            url: `/projectStatus`,
            params: params
        });
        setprojectsOptionStatus(data.data)

        return data;

    }

    const projectsFilterStatusOptionsAll = [
        {
            name: "Todos",
            id: ""
        },
    ]

    useEffect(() => {
        projectsFilterTypesOptions()
        projectsFilterStatusOptions()
    }, [])

    console.log(state);

    //Chamar api para filtrar a pesquisa

    const searchList = async () => {

        try {
            handleFilterRequestProject()

            const { data } = await api({
                method: 'get',
                url: `/project`,
                params: params
            });

            dispatch(setProjectList(data.data));
            dispatch(projectsPages(data.meta));


            return data;
        } catch (err) {
            if (err.request.status === 401) {
                return console.error(err)
            }
        }
    }

    useEffect(() => {
        searchResult !== '' && searchList()
        dispatch(setSearchNameProject(searchResult))
    }, [searchResult])

    return (
        <ProjectsInputsContainer>
            <InputSearch
                lineWidth="280px"
                inputWidth="230px"
                setSearchResult={setSearchResult}
            />
            <InputSelect
                options={projectsOptionTypes}
                setSelectedOption={setSelectedOptionTypes}
                placeholder="Tipo"
                width="220px"
            />
            <InputSelect
                options={projectsOptionStatus}
                setSelectedOption={setSelectedOptionStatus}
                placeholder="Status"
                width="230px"
            />
        </ProjectsInputsContainer>
    )
}

export default ProjectsInputs;
