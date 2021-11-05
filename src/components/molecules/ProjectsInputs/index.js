import React, { useEffect, useState } from 'react'
import  {useDispatch} from 'react-redux'
import { useLocation } from 'react-router'
import { useSelector} from 'react-redux'





// TRISTEZA PARA MAIS UM CAPITULO DUVIDOSO DO LUCAS NO FRONT..
import { 
    setFilterStatus,
    setProjectList,
    projectsPages,
    setSearchName

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

    const projectsFilterTypesOptions = [
        {
            description: "Tipo 1",
            value: "1"
        },

        {
            description: "Tipo 2",
            value: "2"
        }
    ]

    const projectsFilterStatusOptions = [
        {
            description: "Status 1",
            value: "1"
        },

        {
            description: "Status 2",
            value: "2"
        }
    ]

    console.log(state);

    //Chamar api para filtrar a pesquisa

    const searchList = async () =>{
        const {data} = await api({
            method:'get',
            url:`${location.pathname}`,
            params:{
                search: searchResult,
            }
        });

        if(location.pathname === "/projects")dispatch(setProjectList(data.data));
        dispatch(projectsPages(data.meta));

        return data
    }

    const resetProjectList = async () =>{
        const {data} = await api({
            method:'get',
            url:`${location.pathname}`,
            params:{
                page:1
            }
        });
        if(location.pathname === "/projects")dispatch(setProjectList(data.data));
        dispatch(projectsPages(data.meta));

        return data 
    }

    useEffect(()=>{
        searchResult !== '' && searchList()
        searchResult === '' && resetProjectList()
        dispatch(setSearchName(searchResult))
    },[searchResult])

    return (
        <ProjectsInputsContainer>
            <InputSearch 
            lineWidth="280px" 
            inputWidth="230px"
            setSearchResult ={setSearchResult}
            />
            <InputSelect
            options={projectsFilterTypesOptions}
            setSelectedOption={setSelectedOption}
            placeholder="Tipo"
            width="220px"
            />
            <InputSelect
            options={projectsFilterStatusOptions}
            setSelectedOption={setSelectedOption}
            placeholder="Status"
            width="230px"
            />
        </ProjectsInputsContainer>
    )
}

export default ProjectsInputs;