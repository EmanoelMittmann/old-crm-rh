import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import ArrowRegister from '../../atoms/ArrowRegister';
import PagesContainer from '../../organisms/PagesContainer/styled'
import Header from '../../organisms/Header/index.js'
import { SectionTitle } from '../../atoms/PageTitle/style.js'
import RegisterProfessionalsData from '../../organisms/RegisterProfessionalsData'
import {
    RegisterProfessionalTitleContainer,
    Img,
    RegisterProfessionalContainer
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
        UF: UF
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

            </RegisterProfessionalContainer>

        </PagesContainer>
    )
}

export default RegisterProfessional;