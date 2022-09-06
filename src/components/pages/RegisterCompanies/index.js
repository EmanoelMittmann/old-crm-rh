import { useHistory, useParams } from 'react-router-dom'
import RegisterCompany from '../../organisms/RegisterCompany'
import axios from 'axios'
import api from '../../../api/api'
import { useFormik } from 'formik'
import { cleanMask } from '../../utils/cleanMask'
import ArrowRegister from '../../atoms/ArrowRegister/index'
import { SectionTitle } from '../../atoms/PageTitle/style'
import RegisterFooter from '../../molecules/RegisterFooter'
import { RegisterProfessionalContainer, RegisterProfessionalTitleContainer, ContainerProfessionalsLoginData } from '../RegisterProfessional/style'
import { AddressContact } from '../../organisms/Address&Contact'
import { SituationCadastion } from '../../organisms/SituationCadastion';
import { toast } from 'react-toastify'
import { DefaultToast } from '../../atoms/Toast/DefaultToast'
import { useState } from 'react'
import { messages } from '../../../settings/YupValidates'
import * as Yup from 'yup'
import { useEffect } from 'react'

export const RegisterCompanies = () => {
  const { id } = useParams()
  const [uniqueCEP, setUniqueCEP] = useState()
  const [search, setSearch] = useState()

  const schema = Yup.object().shape({
    razao_social: Yup.string().required(messages.required),
    fantasy_name: Yup.string().required(messages.required),
    cnpj: Yup.string().required(messages.required).min(18, 'CNPJ Inválido'),
    is_matriz: Yup.boolean().required(messages.required),
    cep: Yup.string().required(messages.required).min(9, 'CEP Inválido').test('CEP válido', 'CEP não encontrado', () => {
      if (values.cep.length === 9 && values.cep !== uniqueCEP) {
        setUniqueCEP(values.cep)
        handleCEP(values.cep)
      }
      return true
    }),
    size: Yup.string().required(messages.required),
    code_and_description_of_the_legal_status: Yup.string().required(messages.required),
    street_name: Yup.string().required(messages.required),
    house_number: Yup.number().required(messages.required),
    complement: Yup.string(),
    neighbourhood_name: Yup.string().required(messages.required),
    city_name: Yup.string().required(messages.required),
    uf: Yup.string().required(messages.required),
    telephone_number: Yup.string().required(messages.required),
    main_email: Yup.string().required(messages.required),
    secondary_email: Yup.string().required(messages.required),
    responsible_federative_entity: Yup.string().required(messages.required),
    registration_status: Yup.string().required(messages.required),
    date_of_registration_status: Yup.string().required(messages.required),
    reason_for_registration_status: Yup.string().required(messages.required),
    special_situation: Yup.string().required(messages.required),
  })

  const formik = useFormik({
    initialValues: {
      razao_social: '',
      fantasy_name: '',
      cnpj: cleanMask(''),
      is_matriz: false,
      opening_date: '',
      state_registration: '',
      municipal_registration: '',
      size: '',
      main_cnae: [],
      secondary_cnae: [],
      code_and_description_of_the_legal_status: '',
      cep: cleanMask(''),
      street_name: '',
      house_number: '',
      complement: '',
      neighbourhood_name: '',
      city_name: '',
      uf: '',
      telephone_number: cleanMask(''),
      main_email: "",
      secondary_email: "",
      responsible_federative_entity: "",
      registration_status: "",
      date_of_registration_status: "",
      reason_for_registration_status: "",
      special_situation: "",
      date_of_special_situation: ""
    },
    onSubmit: async (values) => {
      await api({
        method: id ? 'put' : 'post',
        url: id ? `/companies/${id}` : '/companies',
        data: id ? {
          ...values,
          razao_social: values.razao_social,
          fantasy_name: values.fantasy_name,
          cnpj: cleanMask(values.cnpj),
          is_matriz: values.is_matriz,
          opening_date: values.opening_date,
          state_registration: values.state_registration,
          municipal_registration: values.municipal_registration,
          size: values.size,
          main_cnae: [values.main_cnae],
          secondary_cnae: [values.secondary_cnae],
          code_and_description_of_the_legal_status: values.code_and_description_of_the_legal_status,
          cep: cleanMask(values.cep),
          street_name: values.street_name,
          house_number: values.house_number,
          complement: values.complement,
          neighbourhood_name: values.neighbourhood_name,
          city_name: values.city_name,
          uf: values.uf,
          telephone_number: cleanMask(values.telephone_number),
          main_email: values.main_email,
          secondary_email: values.secondary_email,
          responsible_federative_entity: values.responsible_federative_entity,
          registration_status: values.registration_status,
          date_of_registration_status: values.date_of_registration_status,
          reason_for_registration_status: values.reason_for_registration_status,
          special_situation: values.special_situation,
          date_of_special_situation: values.date_of_special_situation
        } : {
          ...values,
          razao_social: values.razao_social,
          fantasy_name: values.fantasy_name,
          cnpj: cleanMask(values.cnpj),
          is_matriz: values.is_matriz,
          opening_date: values.opening_date,
          state_registration: values.state_registration,
          municipal_registration: values.municipal_registration,
          size: values.size,
          main_cnae: [values.main_cnae],
          secondary_cnae: [values.secondary_cnae],
          code_and_description_of_the_legal_status: values.code_and_description_of_the_legal_status,
          cep: cleanMask(values.cep),
          street_name: values.street_name,
          house_number: values.house_number,
          complement: values.complement,
          neighbourhood_name: values.neighbourhood_name,
          city_name: values.city_name,
          uf: values.uf,
          telephone_number: cleanMask(values.telephone_number),
          main_email: values.main_email,
          secondary_email: values.secondary_email,
          responsible_federative_entity: values.responsible_federative_entity,
          registration_status: values.registration_status,
          date_of_registration_status: values.date_of_registration_status,
          reason_for_registration_status: values.reason_for_registration_status,
          special_situation: values.special_situation,
          date_of_special_situation: values.date_of_special_situation
        }
      })
    },
    validationSchema: schema,
    isValidating: false,
    enableReinitialize: true
  })

  const { values, setFieldValue } = formik

  const handleCEP = async (cep) => {
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`,
      {
        transformRequest: (data, headers) => {
          delete headers.common
          return data
        }
      })
      .then(data => {
        const { bairro, localidade, logradouro, uf } = data.data
        if (localidade) setFieldValue('city_name', localidade)
        if (uf) setFieldValue('uf', uf)
        if (logradouro) setFieldValue('street_name', logradouro)
        if (bairro) setFieldValue('neighbourhood_name', bairro)
      })
      .catch(error => { toast.error(<DefaultToast text={error.message} />) })
  }

  const history = useHistory()

  const goBackClickHandler = () => {
    history.push('/Company')
  }

  return (
    <>
      <RegisterProfessionalTitleContainer>
        <SectionTitle>
          Nova Empresa
        </SectionTitle>
      </RegisterProfessionalTitleContainer>
      <RegisterProfessionalContainer>
        <form onSubmit={formik.handleSubmit}>
          <RegisterCompany data={formik}/>
          <AddressContact data={formik} />
          <SituationCadastion data={formik} />
        </form>
        <RegisterFooter
          cancelButtonHandler={goBackClickHandler}
          registerButtonHandler={() => {}}
          buttonDescription={id ? "Atualizar" : "Cadastrar"}
          type="submit"
          form="professional"
        />
      </RegisterProfessionalContainer>


    </>
  )
}
