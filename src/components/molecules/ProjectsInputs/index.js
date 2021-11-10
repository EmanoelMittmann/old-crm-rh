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
    setFilterTypesProjects 
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
    const[ projectsOptionStatus, setprojectsOptionStatus]= useState([]);
    const[ projectsOptionTypes, setprojectsOptionTypes]= useState([]);


    let params ={}

    const handleFilterRequestProject = () =>{
    params.page = 1

    if(state.projectStatusProjects!== "" && selectedOptionStatus !== "") 
    params.project_status_id = selectedOptionStatus 

    console.log(selectedOptionStatus)

    if(state.projectTypeProjects !== "" && selectedOptionTypes!== "") 
    params.project_type_id = selectedOptionTypes

    if(state.projectsSearchFilter !== "" && searchResult !== "") 
    params.search = searchResult

    if(state.filterOrder !== "" && searchResult !== "")
    params.orderField = 'name'

    if(state.filterOrder !== "" && searchResult !== "") 
    params.order = state.filterOrder

    }

    const filterStatus = async () => {

        try {
            handleFilterRequestProject()

            const {data} = await api({
                method: 'get',
                url: `/project`,
                params:params
            });

            dispatch(projectsPages(data.meta));

        } catch (error) {
            return console.error(error)
        }
    }

    

    useEffect(() => {
        filterStatus()
        dispatch(setFilterStatusProjects(selectedOptionStatus))
    }, [selectedOptionStatus])


    useEffect(() => {
        filterStatus()
        dispatch(setFilterTypesProjects(selectedOptionTypes))
    }, [selectedOptionTypes])


    
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

        try{
        handleFilterRequestProject()

        const { data } = await api({
            method: 'get',
            url: `/project`,
           params:params
        });

        dispatch(setProjectList(data.data));
        dispatch(projectsPages(data.meta));

        return data;
    }catch(err){
        if(err.request.status === 401){
            return console.error(err)
        } 
    }
  }

    /* const resetProjectList = async () => {
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
    } */

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