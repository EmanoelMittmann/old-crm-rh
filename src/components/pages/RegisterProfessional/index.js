import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import RegisterFooter from '../../molecules/RegisterFooter'
import api from '../../../api/api'
import ArrowRegister from '../../atoms/ArrowRegister';
import PagesContainer from '../../organisms/PagesContainer/styled'
import Header from '../../organisms/Header/index.js'
import { SectionTitle } from '../../atoms/PageTitle/style.js'
import RegisterProfessionalsData from '../../organisms/RegisterProfessionalsData'
import {
    RegisterProfessionalTitleContainer,
    RegisterProfessionalContainer
} from './style.js'
import ProfessionalsLoginData from '../../atoms/ProfessionalsLoginData';

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


   const addProfessional = async () => {
        await api({
            method:'post',     
            url:`/user`,
            data: {
                name: name,
                email: "email@ubistart.com",
                razao_social: corporateName,
                cpf: CPF,
                rg: RG,
                cnpj: CNPJ,
                cep: CEP,
                uf: UF,
                birth_date: birthDate,
                street_name: street,
                neighbourhood_name: neighborhood,
                city_name: city,
                complement: addressDetails,
                house_number: 465
                // job_id: "1",
                // user_type_id: "1",
                // avatar: "profile picture url",
                
            }
        });
    }

    const footerCancelButtonHandler = () => {

    }

    const footerRegisterButtonHandler = () => {

    }

    return (
        <PagesContainer padding="0 0 5em 0">
            <Header/>
            <RegisterProfessionalTitleContainer>
                <ArrowRegister
                clickHandler={goBackClickHandler}/>
                <SectionTitle>
                    Novo profissional
                </SectionTitle>
            </RegisterProfessionalTitleContainer>

            <RegisterProfessionalContainer>

                <RegisterProfessionalsData
                personalData={personalData}
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

                <ProfessionalsLoginData
                email={email}
                setEmail={setEmail}
                />

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