import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

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
    Img,
    ContainerArrow
} from './style.js'

const RegisterProject = () => {
    const state = useSelector(state => state)
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch();

    const [projectName, setProjectName] = useState("");
    const [projectType, setProjectType] = useState("");
    const [inicialDate, setInitialDate] = useState("");
    const [finalDate, setFinalDate] = useState("");
    const [projectStatus, setProjectStatus] = useState("");
    const [teamCost, setTeamCost] = useState("");
    const [payloadTeam, setPayloadTeam] = useState("")
    const [EditProjectData, setEditProjectData] = useState({})
    const [EditProjectTeam, setEditProjectTeam] = useState([])

    const [inicialYear, inicialMonth, inicialDay] = inicialDate.split('-')
    const [finalYear, finalMonth, finalDay] = finalDate.split('-')
    const [componentRendered, setComponentRendered] = useState(false)

        const editProject = async () => {

            try {
                await api({
                    method: 'put',
                    url: `/project/${location.state?.projectId}`,
                    data: {
                        name: projectName,
                        project_status_id: projectStatus,
                        project_type_id: projectType,
                        date_start: inicialDate,
                        date_end: finalDate,
                        team_cost: +teamCost,
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

    const registerProject = async () => {

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
                    team_cost: +teamCost,
                    users: payloadTeam
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

    const projectBeingEdited = state?.projects.find(project => {
        return project?.id === location.state?.projectId
    })
    
    const projectHandler = () => {
        if(projectBeingEdited) return editProject();
        
        return registerProject()
    }

    const editProjectData = async () => {
        try{
            const {data} = await api({
                method: 'get',
                url: `/project/${location.state.projectId}`,
            });

            const [{users}] = data
            setEditProjectTeam(users)
           
           const projectData = data.map(el => {
               delete el.users
               return el
           })
            setEditProjectData(...projectData)
            setComponentRendered(true)

        }catch(error){

        }
    }
    
    useEffect(() => {
        editProjectData()
        console.log('primeiro renderiza esse');
    }, [])


    const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24)
    
    const daysPassed = calcDaysPassed(new Date(inicialYear, inicialMonth, inicialDay), new Date(finalYear, finalMonth, finalDay))

    return (
        <PagesContainer padding="0 0 5em 0">
            <Header/>
            <RegisterProjectTitleContainer>
                <ContainerArrow onClick={() => history.push("/projects")}>
                    <Img src={ArrowBack} alt="Voltar"/>
                </ContainerArrow>
                <SectionTitle>
                {projectBeingEdited ? "Edição de projeto" : "Novo Projeto"}
                </SectionTitle>
            </RegisterProjectTitleContainer>

            <RegisterProjectContainer>

                <RegisterProjectData
                    editData={EditProjectData}
                    projectName={projectName}
                    projectName={projectName}
                    componentRendered={componentRendered}
                    setProjectName={setProjectName}
                    setProjectType={setProjectType}
                    projectType={projectType}
                    setInitialDate={setInitialDate}
                    inicialDate={inicialDate}
                    finalDate={finalDate}
                    setFinalDate={setFinalDate}
                    setProjectStatus={setProjectStatus}
                    projectStatus={projectStatus}
                    setTeamCost={setTeamCost}
                    teamCost={teamCost}
                />

                <RegisterProjectTeam
                componentRendered={componentRendered}
                editData={EditProjectTeam}
                payloadTeam={payloadTeam}
                setPayloadTeam={setPayloadTeam}
                projectId={location.state?.projectId}
                />

                <RegisterProjectFooter>
            
                    <RegisterProjectButtons>
                        <CancelButton onClick={() => history.push("/projects")}>
                            Cancelar
                        </CancelButton>

                        <DarkButton
                        width="115px"
                        height="40px"
                        fontSize="0.84rem"
                        onClick={() => daysPassed >= 0 ? projectHandler() : console.log("Data inválida")}
                        >
                            {projectBeingEdited ? "Atualizar" : "Cadastrar"}
                        </DarkButton>
                    </RegisterProjectButtons>

                </RegisterProjectFooter>

            </RegisterProjectContainer>
        </PagesContainer>
    )
}

export default RegisterProject;