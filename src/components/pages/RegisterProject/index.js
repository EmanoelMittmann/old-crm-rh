import React, { useState, useEffect, useCallback } from 'react'
import { useHistory, useParams } from 'react-router'
import api from '../../../api/api.js'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { handleErrorMessages } from '../../utils/handleErrorMessages'
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
import { messages } from '../../../settings/YupValidates.js'
import { formatFirstLetter } from '../../utils/formatFirstLetter.js'
import { getDate } from '../../utils/getDate.js'
import { DefaultToast } from '../../atoms/Toast/DefaultToast.js'
import { toast } from 'react-toastify'

const RegisterProject = (props) => {
    const history = useHistory()
    const [typeOptions, setTypeOptions] = useState([])
    const [statusOptions, setStatusOptions] = useState([])
    const [team, setTeam] = useState([])
    const [teamPayload, setTeamPayload] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [cancelRegisterProject, setCancelRegisterProject] = useState(false)
    const [modalWarningIsVisible, setModalWarningIsVisible] = useState(false)
    const { id } = useParams()

    const schema = Yup.object().shape({
        name: Yup.string().required(messages.required),
        date_start: Yup.string().required(messages.required).test('Data válida', 'Insira uma data menor que a data final', () => validDate()),
        date_end: Yup.string().required(messages.required).test('Data válida', 'Insira uma data maior que a data inicial', () => validDate()),
        date_end_performed: Yup.string().test('Data válida', 'Insira uma data maior que a data inicial', () => {
            if(values.date_start !== '' && values.date_end_performed !== ''){
                if(values.date_start > values.date_end_performed) {
                    return false
                }
                return true
            }
            return true
        }),
        project_status_id: Yup.number().required(messages.required),
        project_type_id: Yup.number().required(messages.required),
        team_cost: Yup.string().required(messages.required)
    })

    const formik = useFormik({
        initialValues: {
           name: '',
           date_start: '',
           date_end: '',
           date_end_performed: '',
           project_status_id: 0,
           project_type_id: 0,
           team_cost: '',
        },
        onSubmit: async (values) => {
            await api({
                method: id ? 'put' : 'post',
                url: id ? `/project/${id}` : '/project',
                data: id ? {
                    ...values,
                    team_cost: values.team_cost.replace('R$', '').replace('.', '').replace(',','.'),
                } : {
                    ...values,
                    users: teamPayload,
                    team_cost: values.team_cost.replace('R$', '').replace('.', '').replace(',','.'),
                }
            })
            .then(response => {
                toast.success(<DefaultToast text="Projeto salvo!" />)
                goBackClickHandler()
            })
            .catch(error => {
                toast.error(<DefaultToast text="Há erros de validação!" />)
                const errors = error.response.data.errors
                setErrors(handleErrorMessages(errors))
            })
        },
        validationSchema: schema,
        isValidating: false,
        enableReinitialize: true
    })
    const { values, setFieldValue, setErrors } = formik

    function validDate() {
        if(values.date_end !== '' && values.date_start !== ''){
            if(values.date_start > values.date_end) {
                return false
            }

            return true
        }
        return true
    }

    const getProjectTypeOption = useCallback(async () => {
        const { data } = await api({
            method:'get',     
            url:`/projectTypeNoFilter`,
        }) 

        const formattedOptions =  formatFirstLetter(data)
        setTypeOptions(formattedOptions)
    },[])

    const getStatusOptions = useCallback(async () => {
        const {data} = await api({
            method:'get',     
            url:`/projectStatusNoFilter`,
        })

        const formattedStatusOptions = formatFirstLetter(data)
        setStatusOptions(formattedStatusOptions)
    }, [])

    const getAllProfessionals = useCallback(async () => {
        const {data} = await api({
            method:'get',     
            url:`/user`,
        })
        const formattedProfessionals = formatFirstLetter(data)
        setAllUsers(formattedProfessionals)
    }, [])

    const getTeam = () => {
        api({
            method: 'get',
            url: `/userProjects/project/${id}`,
        }).then( response => {
            const members = response.data
            setTeam(members)
        })
    }

    useEffect(() => {
        if(!typeOptions.length) getProjectTypeOption() 
        if(!typeOptions.length) getStatusOptions()
        if(!allUsers.length) getAllProfessionals()
        if(id) {
            api({
                method: 'get',
                url: `/project/${id}`,
            }).then(async (response) => {
                const data = response.data[0]
                setFieldValue('name', data.name)
                setFieldValue('date_start', getDate(data.date_start))
                setFieldValue('date_end', getDate(data.date_end))
                setFieldValue('date_end_performed', getDate(data.date_end_performed))
                setFieldValue('project_status_id', data.project_status_id)
                setFieldValue('project_type_id', data.project_type_id)
                setFieldValue('team_cost', "R$" + data.team_cost.toString().replace('.', ','))
            })
            getTeam()
        }

        return () => {
            setStatusOptions([])
            setTypeOptions([])
            setAllUsers([])
        }
    },[])

    useEffect(() => {
        setTeamPayload([])
        handlePayloadTeam()
    },[team])

    const goBackClickHandler = () => {
        history.push("/projects")
    }

    const CloseButtonClickHandler = () => {
        setModalWarningIsVisible(false)
    }
    
    const footerCancelButtonHandler = () => {
        return setModalWarningIsVisible(true)
    }
    
    function handlePayloadTeam() {
        team.map(user => {
            setTeamPayload(oldState => [...oldState, { 
                user_id: user.id,
                workload: user.workload, 
                extra_hours_limit: user.extra_hours_limit
            }])
        })
    }

    function addMember(user_id, workload, extra_hours_limit) {
        api({
            method:'post',     
            url:`/userProjects/project/${id}`,
            data: {
                user_id: user_id,
                workload: workload,
                extra_hours_limit: extra_hours_limit
            }
        })
        .then( async (response) => {
            toast.success(<DefaultToast text="Profissional adicionado." />,{
                toastId: "post"
            }) 
            getTeam()
        })
        .catch( error => {
            toast.error(<DefaultToast text="Erro ao adicionar profissional." />,{
                toastId: "post"
            }) 
        })
    }

    function removerMember(user_id) {
        api({
            method:'delete',     
            url:`/userProjects/project/${id}`,
            data: {
                user_id: user_id
            }
        })
        .then( async (response) => {
            toast.success(<DefaultToast text="Profissional removido." />,{
                toastId: "delete"
            }) 
            getTeam()
        })
        .catch( error => {
            toast.error(<DefaultToast text="Erro ao remover profissional." />,{
                toastId: "delete"
            }) 
        })
    }

    function editMember(user_id, workload, extra_hours_limit) {
        api({
            method:'put',     
            url:`/userProjects/project/${id}`,
            data: {
                user_id: user_id,
                workload: workload,
                extra_hours_limit: extra_hours_limit
            }
        })
        .then( async (response) => {
            toast.success(<DefaultToast text="Profissional atualizado." />,{
                toastId: "put"
            }) 
            getTeam()
        })
        .catch( error => {
            toast.error(<DefaultToast text="Erro ao atualizar profissional." />,{
                toastId: "put"
            }) 
        })
    }

    const attachment = {team, setTeam, getTeam, addMember, removerMember, editMember}

    return (
        <>
            { modalWarningIsVisible && 
                <ModalRed
                    CloseButtonClickHandler={CloseButtonClickHandler}
                    redButtonClickHandler={goBackClickHandler}
                    title={id ? "Cancelar alterações" : "Cancelar cadastro"}
                    message={id ? "Tem certeza que deseja cancelar as alterações?" : "Tem certeza que deseja cancelar a operação?"}
                /> 
            }
            <RegisterProjectTitleContainer>
                <ArrowRegister clickHandler={goBackClickHandler}/>
                <SectionTitle>
                    {id ? "Edição de projeto" : "Novo Projeto"}
                </SectionTitle>
            </RegisterProjectTitleContainer>

            <RegisterProjectContainer>
                <form id="register">
                    <RegisterProjectData 
                        data={formik} 
                        typeOptions={typeOptions}
                        statusOptions={statusOptions}
                    />
                </form>
                <AttachmentTeam
                    allOptions={allUsers}
                    attachment={attachment}
                />
                <RegisterFooter
                    cancelButtonHandler={footerCancelButtonHandler}
                    registerButtonHandler={formik.handleSubmit}
                    buttonDescription={id ? "Atualizar" : "Cadastrar"}
                    type="submit"
                    form="register"
                />
            </RegisterProjectContainer>
        </>
    )
}

export default RegisterProject