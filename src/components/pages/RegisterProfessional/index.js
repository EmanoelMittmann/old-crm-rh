import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";

import AttachmentProject from '../../organisms/Attachment/Project';
import EmploymentContract from '../../molecules/EmploymentContract'
import InputText from '../../atoms/InputText';
import SecondaryText from '../../atoms/SecondaryText/style'
import OvertimePayCalc from '../../atoms/OvertimePayCalc'
import ProfessionalsExtraHour from '../../molecules/ProfessionalsExtraHour'
import RegisterFooter from '../../molecules/RegisterFooter'
import api from '../../../api/api'
import ArrowRegister from '../../atoms/ArrowRegister';
import PagesContainer from '../../organisms/PagesContainer/styled'
import Header from '../../organisms/Header/index.js'
import { SectionTitle } from '../../atoms/PageTitle/style.js'
import RegisterProfessionalsData from '../../organisms/RegisterProfessionalsData'
import {
    RegisterProfessionalTitleContainer,
    RegisterProfessionalContainer,
    ContainerProfessionalsLoginData,
} from './style.js'

const RegisterProfessional = () => {
    const history = useHistory()

    const [name, setName] = useState('');
    const [CPF, setCPF] = useState('');
    const [RG, setRG] = useState('');
    const [birthDate, setBirthDate] = useState('')
    const [CNPJ, setCNPJ] = useState('')
    const [corporateName, setCorporateName] = useState('')
    const [CEP, setCEP] = useState('')
    const [street, setStreet] = useState('')
    const [addressNumber, setAddressNumber] = useState('')
    const [addressDetails, setAddressDetails] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [city, setCity] = useState('')
    const [UF, setUF] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [extraHour, setExtraHour] = useState('extraHourDisabled')
    const [inicialDate, setInicialDate] = useState('');
    const [job, setJob] = useState('');
    const [type, setType] = useState('');
    const [hoursWeek, setHoursWeek] = useState('');
    const [hoursMonth, setHoursMonth] = useState('');
    const [fixedSalary, setFixedSalary] = useState('');
    const [divider, setDivider] = useState('')
    const [fixedValue, setFixedValue] = useState('')
    const [overtime, setOvertime] = useState('')
    const [limit, setLimit] = useState('')
    const [limitValue, setLimitValue] = useState('')
    const [editData, setEditData] = useState(undefined)
    const [componentRendered, setComponentRendered] = useState(false)

    const { id } = useParams();

    const goBackClickHandler = () => {
        history.push('/professionals')
    }

    const personalData = {
        name: name,
        CPF: CPF,
        RG: RG,
        birthDate: birthDate,
        CNPJ: CNPJ,
        corporateName: corporateName,
        CEP: CEP,
        street: street,
        addressNumber: addressNumber,
        addressDetails: addressDetails,
        neighborhood: neighborhood,
        city: city,
        UF: UF,
        phoneNumber: phoneNumber
    }   

   useEffect(() => {
       //Validação do email
        const emailDomainIndex = email.indexOf('@')
        const emailDomain = email.slice(emailDomainIndex)
        if(emailDomain === '@ubistart.com'){
            setValidEmail(true)
        }
   }, [email])


    const extraHourBoolean = extraHour === 'extraHourActivated' ? true : false
    const limitedExtraHoursBoolean = limit === 'limitOvertime' ? true : false
    const overtimeFormat = overtime.replace(',', '.').replace('R$', '')

   const addProfessional = async () => {
        const response = await api({
            method:'post',     
            url:`/user`,
            data: {
                // avatar: "profile picture url",
                extra_hour_value: +overtimeFormat,
                user_type_id: "2",
                name: name,
                email: email,
                job_id: job,
                razao_social: corporateName,
                cpf: CPF,
                rg: RG,
                cnpj: CNPJ,
                cep: CEP,
                uf: UF,
                telephone_number: +phoneNumber,
                birth_date: birthDate,
                street_name: street,
                neighbourhood_name: neighborhood,
                city_name: city,
                complement: addressDetails,
                house_number: +addressNumber,
                start_date: inicialDate,
                weekly_hours: +hoursWeek,
                fixed_payment_value: +fixedSalary,
                job_type: "FULLTIME",
                extra_hour_activated: extraHourBoolean,
                variable1: +divider,
                variable2: +fixedValue,
                limited_extra_hours: limitedExtraHoursBoolean,
                extra_hour_limit: +limitValue,
                projects: []             
            }
        });

        const {data} = await api({
            method:'get',     
            url:`/professionals`,
        })

        if(response.status === 200) {
            history.push({
                pathname: '/professionals',
                state: { professionals: data }
            })
        }
    }

    const footerCancelButtonHandler = () => {
        history.push('/professionals')
    }

    const footerRegisterButtonHandler = async () => {

        id ? updateProfessional() : addProfessional()

    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>Edit Professional<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const getEditUserData = async () => {
        try{
            const {data} = await api({
                method: 'get',
                url: `/user/${id}`,
            });

            setEditData(...data)
            setComponentRendered(true)
            
        }catch(error){

        }
    }

    const updateProfessional = async () => {
        const response = await api({
            method:'put',     
            url:`/user/${id}`,
            data: {
                // avatar: "profile picture url",
                extra_hour_value: +overtimeFormat,
                user_type_id: "2",
                name: name,
                email: email,
                job_id: job,
                razao_social: corporateName,
                cpf: CPF,
                rg: RG,
                cnpj: CNPJ,
                cep: CEP,
                uf: UF,
                telephone_number: +phoneNumber,
                birth_date: birthDate,
                street_name: street,
                neighbourhood_name: neighborhood,
                city_name: city,
                complement: addressDetails,
                house_number: +addressNumber,
                start_date: inicialDate,
                weekly_hours: +hoursWeek,
                fixed_payment_value: +fixedSalary,
                job_type: "FULLTIME",
                extra_hour_activated: extraHourBoolean,
                variable1: +divider,
                variable2: +fixedValue,
                limited_extra_hours: limitedExtraHoursBoolean,
                extra_hour_limit: +limitValue,          
            }
        });

        const {data} = await api({
            method:'get',     
            url:`/professionals`,
        })

        if(response.status === 200) {
            history.push({
                pathname: '/professionals',
                state: { professionals: data }
            })
        }
    }

    useEffect(() => {
        getEditUserData()
    }, [])

    useEffect(() => {

        if(componentRendered && editData){
            setEmail(editData.email)
        }

    }, [componentRendered])


    return (
        <PagesContainer padding="0 0 5em 0">
            <Header/>
            <RegisterProfessionalTitleContainer>
                <ArrowRegister
                clickHandler={goBackClickHandler}/>
                <SectionTitle>
                {id ? "Edição de profissional" : "Novo profissional"}
                </SectionTitle>
            </RegisterProfessionalTitleContainer>

            <RegisterProfessionalContainer>

                <RegisterProfessionalsData
                personalData={personalData}
                editData={editData}
                componentRendered={componentRendered}
                setName={setName}
                setCPF={setCPF}
                setRG={setRG}
                setBirthDate={setBirthDate}
                setPhoneNumber={setPhoneNumber}
                setCNPJ={setCNPJ}
                setCorporateName={setCorporateName}
                setCEP={setCEP}
                setStreet={setStreet}
                setAddressNumber={setAddressNumber}
                setAddressDetails={setAddressDetails}
                setNeighborhood={setNeighborhood}
                setCity={setCity}
                setUF={setUF}
                />

                <ContainerProfessionalsLoginData>
                    <SecondaryText margin="0 0 2.5em 0">Dados de login</SecondaryText>
                    <InputText
                    setTextValue={setEmail}
                    width="100%"
                    widthLine="400px"
                    placeholder="exemplo@ubistart.com"
                    value={email}
                    type="email"
                    />
                </ContainerProfessionalsLoginData>

                <EmploymentContract
                setInicialDate={setInicialDate}
                inicialDate={inicialDate}
                setJob={setJob}
                job={job}
                setType={setType}
                type={type}
                setHoursWeek={setHoursWeek}
                hoursWeek={hoursWeek}
                setHoursMonth={setHoursMonth}
                hoursMonth={hoursMonth}
                setFixedSalary={setFixedSalary} 
                fixedSalary={fixedSalary}
                editData={editData}
                componentRendered={componentRendered}
                />

                <ProfessionalsExtraHour
                extraHour={extraHour}
                setExtraHour={setExtraHour}
                componentRendered={componentRendered}
                editData={editData}
                />

                {'extraHourActivated' === extraHour && <OvertimePayCalc
                divider={divider}
                setDivider={setDivider}
                fixedValue={fixedValue}
                setFixedValue={setFixedValue}
                overtime={overtime}
                setOvertime={setOvertime}
                limit={limit}
                setLimit={setLimit}
                limitValue={limitValue}
                setLimitValue={setLimitValue}
                componentRendered={componentRendered}
                editData={editData}
                />}

                <AttachmentProject id={id} hoursMonth={hoursMonth}/>

                <RegisterFooter
                cancelButtonHandler={footerCancelButtonHandler}
                registerButtonHandler={footerRegisterButtonHandler}
                buttonDescription="Cadastrar"
                />

            </RegisterProfessionalContainer>

        </PagesContainer>
    )
}

export default RegisterProfessional;