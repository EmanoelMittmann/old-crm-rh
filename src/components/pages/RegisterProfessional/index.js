import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { useFormik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import api from '../../../api/api'

import ArrowRegister from '../../atoms/ArrowRegister'
import InputText from '../../atoms/InputText'
import OvertimePayCalc from '../../atoms/OvertimePayCalc'
import SecondaryText from '../../atoms/SecondaryText/style'
import { SectionTitle } from '../../atoms/PageTitle/style.js'
import { DefaultToast } from '../../atoms/Toast/DefaultToast'

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
import { toast } from 'react-toastify'
import InputWithLabel from '../../atoms/InputWithLabel'
import { cleanMask } from '../../utils/cleanMask'
import { useMemo } from 'react'
import axios from 'axios'
import { useCallback } from 'react'

const RegisterProfessional = () => {    
    const history = useHistory()
    const { id } = useParams()


    
    const goBackClickHandler = () => {
        history.push('/professionals')
    }

    const schema = Yup.object().shape({
        name: Yup.string().required,
        CPF: Yup.number().required,
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            CPF: cleanMask(''),
            RG: '',
            birthDate: '',
            CNPJ: cleanMask(''),
            corporateName: '',
            CEP: cleanMask(''),
            street: '',
            addressNumber: '',
            addressDetails: '',
            neighborhood: '',
            city: '',
            UF: '',
            phoneNumber: cleanMask('')
        },
        onSubmit: values => {
          console.table(JSON.stringify(values))
        },
        validationSchema: {schema}
    })

    const handleCEP = async () => {
       await axios.get(`https://viacep.com.br/ws/${formik.values.CEP}/json/`, 
            {transformRequest: (data, headers) => {
                delete headers.common;
                return data;
            }})
            .then(data => {
                const {uf, localidade} = data.data
                formik.setFieldValue('city', localidade)
                formik.setFieldValue('UF', uf)
            })
            .catch(error => {console.log("Erro", error)})
    }

    const validateCpf = async (cpf) => {

        const {data} = await api({
            method:'post',     
            url:`/user/validateCpf`,
            data: {
                cpf: cpf
            }
        })
        
        // setValidCPF(data)
    }

    useEffect(() => {
        console.log(formik.values)

        // if(formik.values.CEP !== '' && formik.values.CEP.length > 8) return getCity
    },[formik])

    return (
        <>
            <RegisterProfessionalTitleContainer>
                <ArrowRegister
                    clickHandler={goBackClickHandler}/>
                <SectionTitle>
                    {id ? "Edição de profissional" : "Novo profissional"}
                </SectionTitle>
            </RegisterProfessionalTitleContainer>
            <RegisterProfessionalContainer>
                <form onSubmit={formik.handleSubmit}>
                    <RegisterProfessionalsData 
                        data={formik}
                    />
                <RegisterFooter
                    cancelButtonHandler={() => {}}
                    registerButtonHandler={() => {}}
                    buttonDescription="Cadastrar"
                />
                </form>
            </RegisterProfessionalContainer>
        </>
    )
}

export default RegisterProfessional