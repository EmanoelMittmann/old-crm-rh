import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'



// TRISTEZA PARA MAIS UM CAPITULO DUVIDOSO DO LUCAS NO FRONT..
import {
    setProjectList,
    projectsPages,
    setSearchNameProject,
    setStatusList,
    setProjectTypeList,
    setFilterStatusProjects
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

    const [selectedOption, setSelectedOption] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const[ projectsOptionStatus, setprojectsOptionStatus]= useState([]);
    const[ projectsOptionTypes, setprojectsOptionTypes]= useState([]);

    
    const filterStatus = async () => {
        let params;

        if (state.filterOrderProjects !== "") {

            params = {
                page: 1,
                is_active: selectedOption,
                search: state.projectsSearchFilter,
                orderField: 'name',
                order: state.filterOrderProjects
            }
        }

        if (state.filterOrderProjects === "") {
            params = {
                page: 1,
                is_active: selectedOption,
                search: state.filterSearchNameProjects,
            }
        }

        try {
            const { data } = await api({
                method: 'get',
                url: `${location.pathname}`,
                params: params
            });

            if (location.pathname === "/project") dispatch(setProjectList(data.data));
            if (location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
            if (location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
            dispatch(projectsPages(data.meta));


        } catch (error) {
            return console.error(error)
        }
    }

    useEffect(() => {
        filterStatus()
        dispatch(setFilterStatusProjects(selectedOption))
    }, [selectedOption])
    
    
      const projectsFilterTypesOptions = async () =>{

      const { data } = await api({
            method: 'get',
            url: `/projectType`,
        });

        setprojectsOptionTypes(data.data)

    console.log(data)

        return data;

       
    } 

    const projectsFilterStatusOptions = async () =>{

        const { data } = await api({
              method: 'get',
              url: `/projectStatus`,
          });
  
          setprojectsOptionStatus(data.data)
  
      console.log(data.data)
  
          return data;
    
      } 

      useEffect(() => {
          projectsFilterTypesOptions()
          projectsFilterStatusOptions()
    },[])

    console.log(state);

    //Chamar api para filtrar a pesquisa

    const searchList = async () => {
        const { data } = await api({
            method: 'get',
            url: `/project`,
            params: {
                search: searchResult,
            }
        });

        dispatch(setProjectList(data.data));
        dispatch(projectsPages(data.meta));

        return data;
    }

    const resetProjectList = async () => {
        const { data } = await api({
            method: 'get',
            url: `/project`,
            params: {
                page: 1
            }
        });
        dispatch(setProjectList(data.data));
        dispatch(projectsPages(data.meta));

        return data
    }

    useEffect(() => {
        searchResult !== '' && searchList()
        searchResult === '' && resetProjectList()
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
                setSelectedOption={setSelectedOption}
                placeholder="Tipo"
                width="220px"
            />
            <InputSelect
                options={projectsOptionStatus}
                setSelectedOption={setSelectedOption}
                placeholder="Status"
                width="230px"
            />
        </ProjectsInputsContainer>
    )
}

export default ProjectsInputs;