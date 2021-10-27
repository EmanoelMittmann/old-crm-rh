import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import { 
    setProjectList,
} from '../../../redux/actions/index.js'
import api from '../../../api/api.js'
import Header from '../../organisms/Header/index.js'
import PagesContainer from '../../organisms/PagesContainer/styled'
import { SectionTitle } from '../../atoms/PageTitle/style.js'
import ArrowBack  from '../../../assets/icons/arrow-back.svg'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import DarkButton from '../../atoms/Buttons/DarkButton/style.js'
import RegisterProjectData from '../../organisms/RegisterProjectData'
import RegisterProjectTeam from '../../organisms/RegisterProjectTeam'
import {
    RegisterProjectTitleContainer,
    RegisterProjectContainer,
    RegisterProjectFooter,
    RegisterProjectButtons,
    Img
} from './style.js'

const RegisterProject = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const [projectName, setProjectName] = useState("");
    const [projectType, setProjectType] = useState("");
    const [inicialDate, setInitialDate] = useState("");
    const [finalDate, setFinalDate] = useState("");
    const [projectStatus, setProjectStatus] = useState("");
    const [teamCost, setTeamCost] = useState("");

    const [inicialYear, inicialMonth, inicialDay] = inicialDate.split('-')
    const [finalYear, finalMonth, finalDay] = finalDate.split('-')

    const registerProjectClickHandler = async () => {
        console.log(projectType);

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
            return data.data
        
        } catch (error) {
            console.error(error);
        }

    }

    const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24)
    
    const daysPassed = calcDaysPassed(new Date(inicialYear, inicialMonth, inicialDay), new Date(finalYear, finalMonth, finalDay))

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

                <RegisterProjectData
                    setProjectName={setProjectName}
                    setProjectType={setProjectType}
                    setInitialDate={setInitialDate}
                    setFinalDate={setFinalDate}
                    setProjectStatus={setProjectStatus}
                    setTeamCost={setTeamCost}
                />

                <RegisterProjectTeam/>

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