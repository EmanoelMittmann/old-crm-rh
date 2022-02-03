import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import api from '../../../api/api.js'

import { setProjectList } from '../../../redux/actions/index.js'

import ArrowRegister from '../../atoms/ArrowRegister/index.js'
import { SectionTitle } from '../../atoms/PageTitle/style.js'
import RegisterFooter from '../../molecules/RegisterFooter/index.js'
import ModalRed from '../../molecules/ModalRed/index.js'
import RegisterProjectData from '../../organisms/RegisterProjectData'
import AttachmentTeam from '../../organisms/Attachment/Team'
import {
    RegisterProjectTitleContainer,
    RegisterProjectContainer,
} from './style.js'

const RegisterProject = (props) => {
    const state = useSelector(state => state)
    const history = useHistory()
    const dispatch = useDispatch()

    const [projectName, setProjectName] = useState("")
    const [projectType, setProjectType] = useState("")
    const [inicialDate, setInitialDate] = useState("")
    const [finalDate, setFinalDate] = useState("")
    const [projectStatus, setProjectStatus] = useState("")
    const [teamCost, setTeamCost] = useState("");
    const [payloadTeam, setPayloadTeam] = useState("")
    const [EditProjectData, setEditProjectData] = useState({})
    const [EditProjectTeam, setEditProjectTeam] = useState([])
    const [cancelRegisterProject, setCancelRegisterProject] = useState(false)
    const [modalWarningIsVisible, setModalWarningIsVisible] = useState(false)

    const [inicialYear, inicialMonth, inicialDay] = inicialDate.split('-')
    const [finalYear, finalMonth, finalDay] = finalDate.split('-')
    const [componentRendered, setComponentRendered] = useState(false)
    const { id } = useParams()

    const editProject = async () => {

            try {
                await api({
                    method: 'put',
                    url: `/project/${id}`,
                    data: {
                        name: projectName,
                        project_status_id: projectStatus,
                        project_type_id: projectType,
                        date_start: inicialDate,
                        date_end: finalDate,
                        team_cost: +teamCost,
                    }
                })
    
                const {data} = await api({
                    method: 'get',
                    url: '/project',
                })
    
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
            })

            const {data} = await api({
                method: 'get',
                url: '/project',
            })

            dispatch(setProjectList(data.data))
            history.push("/projects");
            return data.data
        
        } catch (error) {
            console.error(error)
        }

    }

    const projectHandler = () => {
        id ? editProject() :  registerProject()
    }
    
    useEffect(() => {
        const editProjectData = async () => {
            const {data} = await api({
                method: 'get',
                url: `/project/${id}`,
            })
    
            const response = await api({
                method: 'get',
                url: `/userProjects/project/${id}`,
            })
            setEditProjectTeam(response.data)
            setEditProjectData(...data)
            setComponentRendered(true)
        }
        id && editProjectData()
    }, [id])

   const CloseButtonClickHandler = () => {
        setModalWarningIsVisible(false)
   }

   const redButtonClickHandler = () => {
        history.push("/projects")
   }
   
   const goBackClickHandler = () => {
        history.push("/projects")
    }
    
    const footerCancelButtonHandler = () => {
        return setModalWarningIsVisible(true)
    }

    const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24)
    const daysPassed = calcDaysPassed(new Date(inicialYear, inicialMonth, inicialDay), new Date(finalYear, finalMonth, finalDay))
    
    const footerRegisterButtonHandler = () => {
        return daysPassed >= 0 ? projectHandler() : console.log("Data inválida")
    }

    return (
        <>
            {modalWarningIsVisible && <ModalRed
            CloseButtonClickHandler={CloseButtonClickHandler}
            redButtonClickHandler={redButtonClickHandler}
            title={componentRendered ? "Cancelar alterações" : "Cancelar cadastro"}
            message={componentRendered ? "Tem certeza que deseja cancelar as alterações?" : "Tem certeza que deseja cancelar a operação?"}
            />}
            <RegisterProjectTitleContainer>
                <ArrowRegister clickHandler={goBackClickHandler}/>
                <SectionTitle>
                {id ? "Edição de projeto" : "Novo Projeto"}
                </SectionTitle>
            </RegisterProjectTitleContainer>

            <RegisterProjectContainer>

                <RegisterProjectData
                    editData={EditProjectData}
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
                <AttachmentTeam
                    componentRendered={componentRendered}
                    editData={EditProjectTeam}
                    payloadTeam={payloadTeam}
                    setPayloadTeam={setPayloadTeam}
                    projectId={id}
                />

                <RegisterFooter
                    cancelButtonHandler={footerCancelButtonHandler}
                    registerButtonHandler={footerRegisterButtonHandler}
                    buttonDescription={id ? "Atualizar" : "Cadastrar"}
                />

            </RegisterProjectContainer>
        </>
    )
}

export default RegisterProject