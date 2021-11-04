import React, { useEffect, useState } from 'react'

import { ProjectsInputsContainer } from './style.js'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'
import { useDispatch, useSelector } from 'react-redux'

//VOLTAREMOS.. PARA MAIS UM CAPITULO DUVIDOSO DO LUCAS NO FRONT..
import { 
    setFilterStatus,
    setSearchName

} from '../../../redux/actions/index.js'

const ProjectsInputs = () => {

     //ver como introduzir a funcionalidade do redux
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useLocation()

    const [selectedOption, setSelectedOption] = useState("")

    const filterStatus = async () =>{
        let params;

        if(state.filterOrder !== ""){

            params ={
                page:1,
                is_active:selectedOption,
                search: state.settingsSearchFilter,
                orderField: 'name',
                order: state.filterOrder
            }
        }

        if(state.filterOrder ==""){
            params ={
                page = 1,
                is_active: selectedOption,
                search: state.filterSearchName,
            }
        }
    }


    useEffect(() =>{
        filterStatus()
        dispatch(setFilterStatus(selectedOption))
    },[selectedOption]) 

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

    return (
        <ProjectsInputsContainer>
            <InputSearch lineWidth="280px" inputWidth="230px"/>
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