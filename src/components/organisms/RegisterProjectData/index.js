import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { 
    setProjectTypeList,
    setStatusList,
} from '../../../redux/actions/index.js'
import api from '../../../api/api.js'
import { getDate } from '../../utils/getDate.js'
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

const RegisterProjectData = ({projectType, projectStatus, projectName, teamCost, inicialDate, finalDate, componentRendered, editData, setProjectName, setProjectType, setInitialDate, setFinalDate, setProjectStatus, setTeamCost}) => {
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

    
    useEffect(() => {
        getStatusList()
        getProjectTypeList()
        
        if(componentRendered){
            setInitialDate(getDate(editData.date_start))
            setFinalDate(getDate(editData.date_end))
            setProjectName(editData.name)
            setTeamCost(editData.team_cost)
            setProjectType(editData.project_type_id)
            setProjectStatus(editData.project_status_id)
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
                            setInputWithLabelValue={setProjectName}
                            width="95%"
                            inputValue={projectName}
                            />
                        </ContainerInputWithLabel>

                        <ContainerInputProjectTypeSelect>
                            {editData?.id ? (
                                <InputSelectEdit
                                optionId={projectType}
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
                                optionId={projectStatus}
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
                            value={teamCost}
                        />
                    </ContainerThirdLine>

                </RegisterProjectForm>
        </ContainerRegisterProjectData>
    )
}

export default RegisterProjectData;