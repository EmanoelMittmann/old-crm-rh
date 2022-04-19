import React, { useState, useEffect } from 'react'
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
    const [allUsers, setAllUsers] = useState([])

    const [payloadTeam, setPayloadTeam] = useState("")
    const [EditProjectData, setEditProjectData] = useState({})
    const [EditProjectTeam, setEditProjectTeam] = useState([])
    const [cancelRegisterProject, setCancelRegisterProject] = useState(false)
    const [modalWarningIsVisible, setModalWarningIsVisible] = useState(false)

    const [componentRendered, setComponentRendered] = useState(false)
    const { id } = useParams()

    const schema = Yup.object().shape({
        name: Yup.string().required(messages.required),
        date_start: Yup.string().required(messages.required).test('Data válida', 'Insira uma data menor que a data final', () => validDate()),
        date_end: Yup.string().required(messages.required).test('Data válida', 'Insira uma data maior que a data inicial', () => validDate()),
        date_end_performed: Yup.string().test('Data válida', 'Insira uma data maior que a data inicial', () => {
            if(values.date_start !== ''){
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
                data: {
                    ...values,
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

    const getProjectTypeOption = async () => {
        const { data } = await api({
            method:'get',     
            url:`/projectTypeNoFilter`,
        }) 

        const formattedOptions =  formatFirstLetter(data)
        setTypeOptions(formattedOptions)
    }

    const getStatusOptions = async () => {
        const {data} = await api({
            method:'get',     
            url:`/projectStatusNoFilter`,
        })

        const formattedStatusOptions = formatFirstLetter(data)
        setStatusOptions(formattedStatusOptions)
    }

    useEffect(() => {
        if(!typeOptions.length) getProjectTypeOption() 
        if(!typeOptions.length) getStatusOptions()
        if(id) {
            api({
                method: 'get',
                url: `/project/${id}`,
            }).then((response) => {
                const data = response.data[0]
                setTeam(data.users)
                setFieldValue('name', data.name)
                setFieldValue('date_start', getDate(data.date_start))
                setFieldValue('date_end', getDate(data.date_end))
                setFieldValue('date_end_performed', getDate(data.date_end_performed))
                setFieldValue('project_status_id', data.project_status_id)
                setFieldValue('project_type_id', data.project_type_id)
                setFieldValue('team_cost', "R$" + data.team_cost.toString().replace('.', ','))
            })}
    },[])

    const goBackClickHandler = () => {
        history.push("/projects")
    }

    const CloseButtonClickHandler = () => {
        setModalWarningIsVisible(false)
    }
    
    const footerCancelButtonHandler = () => {
        return setModalWarningIsVisible(true)
    }

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
                <form onSubmit={formik.handleSubmit}>
                    <RegisterProjectData 
                        data={formik} 
                        typeOptions={typeOptions}
                        statusOptions={statusOptions}
                    />

                    {/* <AttachmentTeam
                        componentRendered={componentRendered}
                        editData={EditProjectTeam}
                        payloadTeam={payloadTeam}
                        setPayloadTeam={setPayloadTeam}
                        projectId={id}
                    /> */}

                    <RegisterFooter
                        cancelButtonHandler={footerCancelButtonHandler}
                        registerButtonHandler={() => {}}
                        buttonDescription={id ? "Atualizar" : "Cadastrar"}
                        type="submit"
                    />
                </form>
            </RegisterProjectContainer>
        </>
    )
}

export default RegisterProject