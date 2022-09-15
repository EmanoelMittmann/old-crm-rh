import { useHistory, useParams } from 'react-router-dom'
import RegisterCompany from '../../organisms/RegisterCompany'
import axios from 'axios'
import api from '../../../api/api'
import { Formik, useFormik, yupToFormErrors } from 'formik'
import { cleanMask } from '../../utils/cleanMask'
import { getDate } from "../../utils/getDate";
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
import { handleErrorMessages } from '../../utils/handleErrorMessages'

export const RegisterCompanies = () => {
  const { id } = useParams()
  const [uniqueCEP, setUniqueCEP] = useState()
  const [search, setSearch] = useState()
  const [errors, setErrors] = useState()

  const schema = Yup.object().shape({
    razao_social: Yup.string().required(messages.required),
    fantasy_name: Yup.string().required(messages.required),
    cnpj: Yup.string().required(messages.required).min(18, 'CNPJ Inválido'),
    is_matriz: Yup.boolean().required(messages.required),
    opening_date: Yup.date().required(messages.required),
    cep: Yup.string().required(messages.required).min(9, 'CEP Inválido').test('CEP válido', 'CEP não encontrado', () => {
      if (values.cep.length === 9 && values.cep !== uniqueCEP) {
        setUniqueCEP(values.cep)
        handleCEP(values.cep)
      }
      return true
    }),
    size: Yup.string().required(messages.required),
    street_name: Yup.string().required(messages.required),
    main_cnae: Yup.array()
    .min(1,'Campo obrigatório')
    .required(messages.required),
    secondary_cnae:Yup.array()
    .min(1,'Campo obrigatório')
    .required(messages.required),
    code_and_description_of_the_legal_status: Yup.array()
    .min(1,'Campo obrigatório')
    .required(messages.required),
    registration_status: Yup.string().required(messages.required),
    house_number: Yup.number().required(messages.required),
    neighborhood_name: Yup.string().required(messages.required),
    phone_number: Yup.string().required(messages.required),
    city_name: Yup.string().required(messages.required),
    uf: Yup.string().required(messages.required),
    phone_number: Yup.string().required(messages.required),
    main_email: Yup.string().required(messages.required),
    registration_status: Yup.string().required(messages.required),
    date_of_registration_status: Yup.string().required(messages.required),
    reason_for_registration_status:Yup.string().required(messages.required),
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
      code_and_description_of_the_legal_status: [],
      cep: cleanMask(''),
      street_name:'',
      house_number:'',
      complement: '',
      neighborhood_name: '',
      city_name: '',
      uf: '',
      phone_number: cleanMask(''),
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
        } : {
          ...values,
        }
      })
      .then((result) => {
        toast.success(<DefaultToast text="Empresa cadastrada." />, {
          toastId: "post",
        });
        return history.push("/company");
      })
      .catch((error) => {
        toast.error(<DefaultToast text={"Ha Erros de Validação"} />, {
          toastId: "post",
        });
        const errors = error.response.data.errors;
        setErrors(handleErrorMessages(errors));
      });
    },
    validationSchema: schema,
    isValidating: false,
    enableReinitialize: true
  })

  const { values, setFieldValue,setFieldError } = formik

  const handleCEP = async (cep) => {
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`,
      {
        transformRequest: (data, headers) => {
          delete headers.common
          return data
        }
      })
      .then(data => {
        if (data.data.erro) return setFieldError("cep", "Cep Invalido!");
        const { bairro, localidade, logradouro, uf } = data.data
        if (localidade) setFieldValue('city_name', localidade)
        if (uf) setFieldValue('uf', uf)
        if (logradouro) setFieldValue('street_name', logradouro)
        if (bairro) setFieldValue('neighborhood_name', bairro)
      })
      .catch(error => { toast.error(<DefaultToast text={error.message} />) })
  }

  const history = useHistory()

  const goBackClickHandler = () => {
    history.push('/Company')
  }

  useEffect(() => {
    if(id){
      api({
        method: 'get',
        url: `/companies/${id}`,
      })
      .then((response) => {
        const data = response.data[0];
          Object.entries(data).forEach(([property, value]) => {
            if (property.includes("date_of_registration_status")) {
              setFieldValue(property, getDate(value));
            } else if (property.includes("cnpj")) {
              setFieldValue(
                property,
                value.replace(
                  /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                  "$1 $2 $3/$4-$5"
                )
              );
            } else if (property.includes("phone_number")) {
              setFieldValue(property, value);
            } else if (property.includes("cep")) {
              let data = value.replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
              setFieldValue(property, data);
            } else if(property.includes('opening_date')){
              setFieldValue(property,getDate(value))
            }else if(property.includes("date_of_special_situation")){
              if(value === null){
                return null
              }
              setFieldValue(property, getDate(value))
            } else {
              setFieldValue(property, value);
            }
          });
        })
        .catch((error) => {
          new Error(error.message);
        });
      }},[])
      
  return (
    <>
      <RegisterProfessionalTitleContainer>
        <SectionTitle>
          Nova Empresa
        </SectionTitle>
      </RegisterProfessionalTitleContainer>
      <RegisterProfessionalContainer>
        <form id="Company" onSubmit={formik.handleSubmit}>
          <RegisterCompany data={formik}/>
          <AddressContact data={formik} />
          <SituationCadastion data={formik} />
        </form>
        <RegisterFooter
          cancelButtonHandler={goBackClickHandler}
          registerButtonHandler={() => { }}
          buttonDescription={id ? "Atualizar" : "Cadastrar"}
          type="submit"
          form="Company"
        />
      </RegisterProfessionalContainer>


    </>
  )
}
