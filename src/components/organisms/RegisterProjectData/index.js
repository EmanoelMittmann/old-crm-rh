import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { 
    setProjectTypeList,
    setStatusList,
    settingsPages
} from '../../../redux/actions/index.js'
import api from '../../../api/api.js'
import { formatFirstLetter } from '../../utils/formatFirstLetter.js'
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
    ContainerRegisterProjectData
} from './style.js'

const RegisterProjectData = ({setProjectName, projectName, setProjectType, setInitialDate, setFinalDate, setProjectStatus, setTeamCost}) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const getProjectTypeList = async () => {
        const {data} = await api({
            method:'get',     
            url:`/projectTypeNoFilter`,
        }); 
        const formattedProjectTypeList =  formatFirstLetter(data)
        dispatch(setProjectTypeList(formattedProjectTypeList))
        return data;
    }

    const getStatusList = async () => {
        const {data} = await api({
            method:'get',     
            url:`/projectStatusNoFilter`,
        }); 
        const formattedStatusList =  formatFirstLetter(data)

        dispatch(setStatusList(formattedStatusList))
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
        <ContainerRegisterProjectData>
               <SecondaryText margin="0 0 2.5em 0">Dados do projeto</SecondaryText>
                <RegisterProjectForm>

                    <ContainerFirstRow>
                        <ContainerInputWithLabel>
                            <InputWithLabel
                            placeholder="Projeto..."
                            label="Nome do projeto"
                            setinputWithLabelValue={setProjectName}
                            width="95%"
                            value={projectName}

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
                            width="100%"
                            widthLine="260px"
                            placeholder="Custo estimado de equipe"
                            setTextValue={setTeamCost}
                        />
                    </ContainerThirdLine>

                </RegisterProjectForm>
        </ContainerRegisterProjectData>
    )
}

export default RegisterProjectData;