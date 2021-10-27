import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { 
    setProjectTypeList,
    setStatusList,
    settingsPages
} from '../../../redux/actions/index.js'
import api from '../../../api/api.js'
import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputWithLabel from '../../atoms/InputWithLabel'
import InputSelect from '../../atoms/InputSelect'
import InputDate from '../../atoms/InputDate'
import InputText from '../../atoms/InputText'
import {
    RegisterProjectForm,
    ContainerInputInitialDate,
    ContainerInputFinalDate,
    ContainerInputWithLabel,
    ContainerInputProjectStatusSelect,
    ContainerInputProjectTypeSelect,
    ContainerSecondRow,
    ContainerFirstRow,
    ContainerThirdLine,
} from './style.js'

const RegisterProjectData = ({setProjectName, setProjectType, setInitialDate, setFinalDate, setProjectStatus, setTeamCost}) => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const getProjectTypeList = async () => {
        const {data} = await api({
            method:'get',     
            url:`/projectType`,
        }); 
    
        dispatch(setProjectTypeList(data.data))
        dispatch(settingsPages(data.meta));
        return data;
    }

    const getStatusList = async () => {
        const {data} = await api({
            method:'get',     
            url:`/projectStatus`,
        }); 
    
        dispatch(setStatusList(data.data))
        dispatch(settingsPages(data.meta));
        return data;
    }

    useEffect(() => {
        getStatusList()
        getProjectTypeList()
    },[]);
    

    const filterProjectsTypesOptions = state.projectType.map(project => (
        {
            name: project.name,
            id: project.id
        }
    ))

    const filterProjectsStatusOptions = state.status.map(status => (
        {
            name: status.name,
            id: status.id
        }
    ))



    return (
        <div>
               <SecondaryText margin="0 0 2.5em 0">Dados do projeto</SecondaryText>
                <RegisterProjectForm>

                    <ContainerFirstRow>
                        <ContainerInputWithLabel>
                            <InputWithLabel
                            label="Nome do projeto"
                            setinputWithLabelValue={setProjectName}
                            width="95%"
                            // editValue={displayNameBeingEdited}
                            />
                        </ContainerInputWithLabel>

                        <ContainerInputProjectTypeSelect>
                            <InputSelect
                            setSelectedOption={setProjectType}
                            options={filterProjectsTypesOptions}
                            placeholder="Tipo de projeto"
                            width="200px"
                            />
                        </ContainerInputProjectTypeSelect>

                    </ContainerFirstRow>

                    <ContainerSecondRow>
                        <ContainerInputInitialDate>
                            <InputDate
                            setDate={setInitialDate}
                            placeholder="Data início"
                            />
                        </ContainerInputInitialDate>

                        <ContainerInputFinalDate>
                            <InputDate
                             setDate={setFinalDate}
                             placeholder="Final estimado"
                            />
                        </ContainerInputFinalDate>

                        <ContainerInputProjectStatusSelect>
                            <InputSelect
                            setSelectedOption={setProjectStatus}
                            options={filterProjectsStatusOptions}
                            placeholder="Status do projeto"
                            width="100%"
                            />
                        </ContainerInputProjectStatusSelect>

                    </ContainerSecondRow>

                    <ContainerThirdLine>
                        <InputText
                            width="260px"
                            placeholder="Custo estimado de equipe"
                            setTextValue={setTeamCost}
                        />
                    </ContainerThirdLine>

                </RegisterProjectForm>
        </div>
    )
}

export default RegisterProjectData;