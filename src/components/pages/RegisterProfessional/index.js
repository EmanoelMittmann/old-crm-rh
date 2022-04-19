import React, { useState, useEffect, useCallback } from 'react'
import { useHistory, useParams } from "react-router-dom"
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import api from '../../../api/api'
import { toast } from 'react-toastify'
import ArrowRegister from '../../atoms/ArrowRegister'
import OvertimePayCalc from '../../atoms/OvertimePayCalc'
import SecondaryText from '../../atoms/SecondaryText/style'
import { SectionTitle } from '../../atoms/PageTitle/style.js'
import { DefaultToast } from '../../atoms/Toast/DefaultToast'
import InputWithLabel from '../../atoms/InputWithLabel'
import EmploymentContract from '../../molecules/EmploymentContract'
import ProfessionalsExtraHour from '../../molecules/ProfessionalsExtraHour'
import RegisterFooter from '../../molecules/RegisterFooter'
import AttachmentProject from '../../organisms/Attachment/Project'
import RegisterProfessionalsData from '../../organisms/RegisterProfessionalsData'
import {
    RegisterProfessionalTitleContainer,
    RegisterProfessionalContainer,
    ContainerProfessionalsLoginData,
} from './style.js'
import { cleanMask } from '../../utils/cleanMask'
import {getDate} from '../../utils/getDate'
import { messages } from '../../../settings/YupValidates'


const RegisterProfessional = () => {    
    const [jobs, setJobs] = useState([])
    const [allProjects, setAllProjects] = useState([])
    const [projects, setProjects] = useState([])

    const [uniqueCpf, setUniqueCpf] = useState('')
    const [cpfValid, setCpfValid] = useState(false)
    const [uniqueCEP, setUniqueCEP] = useState('')
    const [extraHour, setExtraHour] = useState('')
    const history = useHistory()
    const { id } = useParams()
    const attachment = {projects, setProjects, addProject, removeProject, editProject}

    const schema = Yup.object().shape({
        name: Yup.string().required(messages.required),
        cpf: Yup.string().required(messages.required).min(14, "CPF inválido").test('Verificar CPF', 'CPF Usado', () => {
            if(id) setCpfValid(true)
            if(values.cpf.length === 14 && values.cpf !== uniqueCpf) {
                    setUniqueCpf(values.cpf)
                    validateCpf(values.cpf)
                    .then(response =>  {
                        if (response.data === true) return setCpfValid(true)
                        return setCpfValid(false)
                    })
                    .catch(error => false)
            }
            return cpfValid
        }),
        rg: Yup.string().required(messages.required),
        birth_date: Yup.string().required(messages.required),
        cnpj: Yup.string().required(messages.required).min(18, 'CNPJ Inválido'),
        razao_social: Yup.string().required(messages.required),
        cep: Yup.string().required(messages.required).min(9, 'CEP Inválido').test('CEP válido', 'CEP não encontrado', () => {
            if(values.cep.length === 9 && values.cep !== uniqueCEP) {
                    setUniqueCEP(values.cep)
                    handleCEP(values.cep)
            }
            return true
        }),
        street_name: Yup.string().required(messages.required),
        house_number: Yup.number().required(messages.required),
        complement: Yup.string(),
        neighbourhood_name: Yup.string().required(messages.required),
        city_name: Yup.string().required(messages.required),
        uf: Yup.string().required(messages.required),
        telephone_number: Yup.string().required(messages.required),
        email: Yup.string().required(messages.required).test('Email válido', 'Insira um email de domínio Ubistart', () => {
            const startDomainIndex = values.email.indexOf('@')
            const emailDomain = values.email.substring(startDomainIndex, values.email.length)
            return emailDomain === '@ubistart.com' ? true : false
        }),
        start_date: Yup.date().required(messages.required),
        job_id: Yup.number().required(messages.required),
        job_type: Yup.string().required(messages.required),
        weekly_hours: Yup.number().required(messages.required).max(44, "Horas/semana excedida"),
        mounth_hours: Yup.number().required(messages.required).max(176, "Horas/mês excedida"),
        fixed_payment_value: Yup.string().required(messages.required),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: cleanMask(''),
            rg: ''.toString(),
            birth_date: '',
            cnpj: cleanMask(''),
            razao_social: '',
            cep: cleanMask(''),
            street_name: '',
            house_number: '',
            complement: '',
            neighbourhood_name: '',
            city_name: '',
            uf: '',
            telephone_number: cleanMask(''),
            email: '',
            start_date: '',
            job_id: '',
            job_type: '',
            weekly_hours: '',
            mounth_hours: '',
            fixed_payment_value: cleanMask(''),
            extra_hour_activated: 1,
            variable1: '',
            variable2: cleanMask(''),    
            extra_hour_value: '',
            limited_extra_hours: 1,
            extra_hour_limit: '',
            user_type_id: 2,
        },
        onSubmit: async (values) => {
            console.log({projects})
            await api({
                method: id ? 'put' : 'post',     
                url: id ? `/user/${id}` : '/user',
                data: { 
                    ...values, 
                    extra_hour_value: parseFloat(values.extra_hour_value.replace('R$', '').replace(',', '.')),
                    fixed_payment_value: values.fixed_payment_value.replace('R$', '').replace('.', '').replace(',00', ''),
                    telephone_number: values.telephone_number.toString().replace('(', '').replace(')', '').replace(' ', '').replace(' ', '').replace('-', ''),
                    cpf: cleanMask(values.cpf),
                    cnpj: cleanMask(values.cnpj),
                    cep: cleanMask(values.cep),
                    rg: values.rg.toString(),
                    projects: projects,
                    occupation_id: 1
                }
            })
            .then(result => {
                toast.success(<DefaultToast text="Profissional cadastrado." />,{
                    toastId: "post"
                }) 
                return history.push('/professionals')
            })
            .catch(error => {
                toast.error(<DefaultToast text="Há erros de validação." />,{
                    toastId: "post"
                })
            })
            
        },
        validationSchema: schema,
        isValidating: false,
        enableReinitialize: true
    })
    const { values, handleChange, setFieldValue} = formik

    const handleCEP =  async (cep) => {
       await axios.get(`https://viacep.com.br/ws/${cep}/json/`, 
            {transformRequest: (data, headers) => {
                delete headers.common
                return data
            }})
            .then(data => {
                const { bairro, localidade, logradouro, uf } = data.data
                if(localidade) setFieldValue('city_name', localidade)
                if(uf) setFieldValue('uf', uf)
                if(logradouro) setFieldValue('street_name', logradouro)
                if(bairro) setFieldValue('neighbourhood_name', bairro)
            })
            .catch(error => {toast.error(<DefaultToast text={error.message}/>)})
    }

    const validateCpf = async (cpf) => {
        const response = await api({
            method:'post',     
            url:'/user/validateCpf',
            data: { cpf: cpf }
        })
        return response
    }

    const goBackClickHandler = () => {
        history.push('/professionals')
    }

    const optionsJob = useCallback( async () => {
        const response = await api({
            method:'get',     
            url:`/job`,
        })
        setJobs(response.data.data)
    },[])

    const getAllProjects = useCallback( async () => {
        const {data} = await api({
            method:'get',     
            url:'/project'
        })

        setAllProjects(data.data)        
    },[])

    async function addProject(id_project, workload, extra_hours_limit) {
        await api({
            method:'post',     
            url:`/userProjects/user/${id}`,
            data: {
                id: id_project,
                workload: workload,
                extra_hour_limit: extra_hours_limit
            }
        }).then( async (response) => {
            toast.success(<DefaultToast text="Projeto vinculado." />,{
                toastId: "post"
            }) 
            await api({
                method:'get',     
                url:`/userProjects/user/${id}`
            })
            .then( response => {
                setProjects(response.data)
            })
        })
        .catch( error => {
            toast.error(<DefaultToast text="Erro ao vincular projeto." />,{
                toastId: "post"
            }) 
        })
    }

    async function removeProject(project) {
        await api({
            method:'delete',     
            url:`/userProjects/user/${id}`,
            data: {
                project_id: project
            }
        })
        .then( async (response) => {
            toast.success(<DefaultToast text="Projeto removido." />,{
                toastId: "delete"
            }) 
            await api({
                method:'get',     
                url:`/userProjects/user/${id}`
            })
            .then( response => {
                setProjects(response.data)
            })
        })
        .catch( error => {
            toast.error(<DefaultToast text="Erro ao remover projeto." />,{
                toastId: "delete"
            }) 
        })
    }

    async function editProject(project, workload, extra_hours_limit) {
        await api({
            method:'put',     
            url:`/userProjects/user/${id}`,
            data: {
                id: project,
                workload: workload,
                extra_hours_limit: extra_hours_limit
            }
        })
        .then( async (response) => {
            toast.success(<DefaultToast text="Projeto atualizado." />,{
                toastId: "put"
            }) 
            await api({
                method:'get',     
                url:`/userProjects/user/${id}`
            })
            .then( response => {
                setProjects(response.data)
            })
        })
        .catch( error => {
            toast.error(<DefaultToast text="Erro ao atualizar projeto." />,{
                toastId: "put"
            }) 
        })
    }

    useEffect(() => {
        if(!jobs.length) optionsJob()
        if(!allProjects.length) getAllProjects()
        if(id) {
            api({
                method: 'get',
                url: `/user/${id}`,
            }).then((response) => {
                const data = response.data[0]
                setFieldValue('name', data.name)
                setFieldValue('id', id)
                setFieldValue('rg', data.rg)
                setFieldValue('birth_date', getDate(data.birth_date))
                setFieldValue('cnpj', data.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1 $2 $3/$4-$5"))
                setFieldValue('razao_social', data.razao_social)
                setFieldValue('street_name', data.street_name)
                setFieldValue('house_number', data.house_number)
                setFieldValue('complement', data.complement)
                setFieldValue('neighbourhood_name', data.neighbourhood_name)
                setFieldValue('city_name', data.city_name)
                setFieldValue('uf', data.uf)
                setFieldValue('telephone_number', parseInt(data.telephone_number))
                setFieldValue('email', data.email)
                setFieldValue('start_date', getDate(data.start_date))
                setFieldValue('job_id', data.job_id)
                setFieldValue('job_type', data.job_type)
                setFieldValue('weekly_hours', data.weekly_hours)
                setFieldValue('mounth_hours', data.mounth_hours)
                setFieldValue('fixed_payment_value', "R$" + data.fixed_payment_value + ",00")
                setFieldValue('extra_hour_activated', data.extra_hour_activated)
                setFieldValue('variable1', data.variable1)
                setFieldValue('variable2', data.variable2)
                setFieldValue('limited_extra_hours', data.limited_extra_hours)
                setFieldValue('extra_hour_limit', data.extra_hour_limit)
                setFieldValue('user_type_id', data.user_type_id)
                setFieldValue('cep', data.cep.replace(/^(\d{5})(\d{3})+?$/, "$1-$2"))
                setFieldValue('cpf', data.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
                setFieldValue('extra_hour_value', data.extra_hour_value.replace('.', ','))
            })
            .catch((error) => {
                new Error(error.message)
            })

            api({
                method: 'get',
                url: `/userProjects/user/${id}`,
            }).then( response => {
                setProjects(response.data)
            })
        }
        
        return () => {
            setJobs([])
            setAllProjects([])
        }

    },[id])

    useEffect(() => {
        if(values.variable1 > 0 && values.variable2 > 0) {
            let calc = values.variable2/values.variable1
            setFieldValue('extra_hour_value', 'R$' + calc.toFixed(2).toString().replace('.', ','))
        }
    },[values.variable1, values.variable2])

    return (
        <>
            <RegisterProfessionalTitleContainer>
                <ArrowRegister clickHandler={goBackClickHandler} />
                <SectionTitle>
                    {id ? "Edição de profissional" : "Novo profissional"}
                </SectionTitle>
            </RegisterProfessionalTitleContainer>
            <RegisterProfessionalContainer>
                <form id="professional" onSubmit={formik.handleSubmit}>
                    <RegisterProfessionalsData data={formik} />
                    <ContainerProfessionalsLoginData>
                        <SecondaryText margin="0 0 2em 0">Dados de login</SecondaryText>
                        <InputWithLabel
                            name="email"
                            padding="0 2em 0 0"
                            error={formik.errors.email}
                            touched={formik.touched.email}
                            handleBlur={formik.setFieldTouched}
                            onChange={handleChange('email')}
                            width="100%"
                            widthContainer="45%"
                            label="E-mail G Suit"
                            value={values.email}
                            type="email"
                        />
                    </ContainerProfessionalsLoginData>
                    <EmploymentContract data={formik} jobs={jobs}/>
                    <ProfessionalsExtraHour
                        extraHour={extraHour}
                        setExtraHour={setExtraHour}
                        setFieldValue={setFieldValue}
                        data={values}
                    />
                    { values.extra_hour_activated !== 0 ?
                        <OvertimePayCalc data={formik} /> : <></>
                    }
                </form>
                <AttachmentProject 
                    allOptions={allProjects}
                    attachment={attachment}
                    data={formik}
                />
                <RegisterFooter
                    cancelButtonHandler={goBackClickHandler}
                    registerButtonHandler={() => {}}
                    buttonDescription="Cadastrar"
                    type="submit"
                    form="professional"
                />
            </RegisterProfessionalContainer>
        </>
    )
}

export default RegisterProfessional