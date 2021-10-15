import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { 
    setProjectTypeList,
    setStatusList,
    setProjectList,
    settingsPages
} from '../../../redux/actions/index.js'
import api from '../../../api/api.js'
import Header from '../../organisms/Header/index.js'
import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputWithLabel from '../../atoms/InputWithLabel'
import PagesContainer from '../../organisms/PagesContainer/styled'
import { SectionTitle } from '../../atoms/PageTitle/style.js'
import ArrowBack  from '../../../assets/icons/arrow-back.svg'
import InputSelect from '../../atoms/InputSelect'
import InputDate from '../../atoms/InputDate'
import InputText from '../../atoms/InputText'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import DarkButton from '../../atoms/Buttons/DarkButton/style.js'
import {
    RegisterProjectTitleContainer,
    RegisterProjectContainer,
    RegisterProjectForm,
    ContainerInputInitialDate,
    ContainerInputFinalDate,
    ContainerInputWithLabel,
    ContainerInputProjectStatusSelect,
    ContainerInputProjectTypeSelect,
    ContainerSecondRow,
    ContainerFirstRow,
    ContainerThirdLine,
    RegisterProjectFooter,
    RegisterProjectButtons,
    Img
} from './style.js'

const RegisterProject = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory()

    const [projectName, setProjectName] = useState("");
    const [projectType, setProjectType] = useState("");
    const [inicialDate, setInitialDate] = useState("");
    const [finalDate, setFinalDate] = useState("");
    const [projectStatus, setProjectStatus] = useState("");
    const [teamCost, setTeamCost] = useState("");

    const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24)

    const [inicialYear, inicialMonth, inicialDay] = inicialDate.split('-')
    const [finalYear, finalMonth, finalDay] = finalDate.split('-')
    
    const daysPassed = calcDaysPassed(new Date(inicialYear, inicialMonth, inicialDay), new Date(finalYear, finalMonth, finalDay))

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
            description: project.name,
            value: project.id
        }
    ))

    const filterProjectsStatusOptions = state.status.map(status => (
        {
            description: status.name,
            value: status.id
        }
    ))

    const registerProjectClickHandler = async () => {
    console.log(projectName, projectStatus, projectType, inicialDate, finalDate, teamCost);

            try {
                await api({
                    method: 'post',
                    url: '/project',
                    data: {
                        name: projectName,
                        project_status_id: projectStatus,
                        project_type_id: projectType,
                        date_start: inicialDate,
                        date_end: finalDate,
                        team_cost: teamCost,
                    }
                });
    
                const {data} = await api({
                    method: 'get',
                    url: '/project',
                });

                dispatch(setProjectList(data.data))
                history.push("/projects");
                console.log(data);
                return data.data
            
            } catch (error) {
                console.error(error);
            }

    }

        console.log(state);

    return (
        <PagesContainer>
            <Header/>
            <RegisterProjectTitleContainer>
                <Img src={ArrowBack} alt="Voltar"
                onClick={() => history.push("/projects")}/>
                <SectionTitle>
                    Novo Projeto
                </SectionTitle>
            </RegisterProjectTitleContainer>
            <RegisterProjectContainer>
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
                            // defaultValue={editValue}
                        />
                    </ContainerThirdLine>

                </RegisterProjectForm>

                <RegisterProjectFooter>
            
                    <RegisterProjectButtons>
                        <CancelButton onClick={() => history.push("/projects")}>
                            Cancelar
                        </CancelButton>

                        <DarkButton
                        width="115px"
                        height="40px"
                        fontSize="0.84rem"
                        onClick={() => daysPassed >= 0 ? registerProjectClickHandler() : console.log("Data inválida")}
                        >
                            Cadastrar
                        </DarkButton>
                    </RegisterProjectButtons>

                </RegisterProjectFooter>

            </RegisterProjectContainer>
        </PagesContainer>
    )
}

export default RegisterProject;