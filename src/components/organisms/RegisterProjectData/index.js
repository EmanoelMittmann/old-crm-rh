import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { 
    setProjectTypeList,
    setStatusList,
} from '../../../redux/actions/index.js'
import api from '../../../api/api.js'
import InputSelectEdit from '../../atoms/InputSelectEdit/index.js'
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

const RegisterProjectData = ({inicialDate, finalDate, componentRendered, editData, setProjectName, setProjectType, setInitialDate, setFinalDate, setProjectStatus, setTeamCost}) => {
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

    const getDate = (inputDate) => {
        const newDate = new Date(inputDate)
        const day = newDate.getDate().toString()
        const newDay = day.length === 1 ? day.padStart(2, '0') : day
        let month = newDate.getMonth() + 1
        month = month.toString()
        const newMonth = month.length === 1 ? month.padStart(2, '0') : month;
        const year = newDate.getFullYear()
        const projectDate = `${year}-${newMonth}-${newDay}`
        
        return projectDate;
    }

    
    useEffect(() => {
        getStatusList()
        getProjectTypeList()
        
        if(componentRendered){
            setInitialDate(getDate(editData.date_start))
            setFinalDate(getDate(editData.date_end))
        }

    },[componentRendered]);


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
                            inputValue={editData.name}
                            />
                        </ContainerInputWithLabel>

                        <ContainerInputProjectTypeSelect>
                            {editData?.id ? (
                                <InputSelectEdit
                                optionId={editData.project_type_id}
                                setSelectedOption={setProjectType}
                                options={filterProjectsTypesOptions}
                                width="200px"
                                />
                            ) : (
                                <InputSelect
                                setSelectedOption={setProjectType}
                                options={filterProjectsTypesOptions}
                                placeholder="Tipo de projeto"
                                width="200px"
                                />
                            )}
                        </ContainerInputProjectTypeSelect>

                    </ContainerFirstRow>

                    <ContainerSecondRow>
                        <ContainerInputInitialDate>
                            <InputDate
                            setDate={setInitialDate}
                            placeholder="Data início"
                            date={inicialDate}
                            />
                        </ContainerInputInitialDate>

                        <ContainerInputFinalDate>
                            <InputDate
                             setDate={setFinalDate}
                             placeholder="Final estimado"
                             date={finalDate}
                            />
                        </ContainerInputFinalDate>

                        <ContainerInputProjectStatusSelect>
                            {editData?.id ? (
                                <InputSelectEdit
                                optionId={editData.project_status_id}
                                setSelectedOption={setProjectStatus}
                                options={filterProjectsStatusOptions}
                                width="100%"
                                />
                            ) :
                                <InputSelect
                                setSelectedOption={setProjectStatus}
                                options={filterProjectsStatusOptions}
                                placeholder="Status do projeto"
                                width="100%"    
                            />
                            }
                        </ContainerInputProjectStatusSelect>

                    </ContainerSecondRow>

                    <ContainerThirdLine>
                        <InputText
                            width="100%"
                            widthLine="260px"
                            placeholder="Custo estimado de equipe"
                            setTextValue={setTeamCost}
                            value={editData.team_cost}
                        />
                    </ContainerThirdLine>

                </RegisterProjectForm>
        </ContainerRegisterProjectData>
    )
}

export default RegisterProjectData;