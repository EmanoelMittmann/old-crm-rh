import React, { useEffect, useRef, useState } from 'react'
import MaskedInput from 'react-text-mask'
import axios from 'axios'

import { TextRequired } from '../../atoms/TextRequired'
import api from '../../../api/api'
import { cleanMask } from '../../utils/cleanMask'
import { DefaultInput, InputLine } from '../../atoms/DefaultInput/style.js';
import { 
    ContainerRegisterProfessionalsData,
    RegisterProfessionalsForm,
    ContainerRow,
    ContainerTextRequired
} from './style.js'
import SecondaryText from '../../atoms/SecondaryText/style';
import InputWithLabel from '../../atoms/InputWithLabel/index.js';
import InputText from '../../atoms/InputText/index.js';
import InputDate from '../../atoms/InputDate/index.js';
import InputSelect from '../../atoms/InputSelect/index.js';

const RegisterProfessionalsData = ({personalData, setName, setCPF, setRG,  setBirthDate, setCNPJ, setCorporateName, setCEP, setStreet, setAddressNumber, setAddressDetails, setNeighborhood, setCity, setUF, setPhoneNumber}) => {

   const inputRef = useRef(null);
   const [validCPF, setValidCPF] = useState(true);

    const getUserLocation = async () => {
        const response = axios.get(`https://viacep.com.br/ws/${personalData.CEP}/json/`, {transformRequest: (data, headers)=>{
        delete headers.common;
        return data;
        }});
        response.then(data => {
            const {uf, localidade} = data.data;
            setUF(uf);
            setCity(localidade);
        })
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        personalData.CEP.length === 8 && getUserLocation(personalData.CEP)
    }, [personalData.CEP])

    const optionsUF = [
        {name: "Acre", initials: "AC"},
        {name: "Alagoas", initials: "AL"},
        {name: "Amapá", initials: "AP"},
        {name: "Amazonas", initials: "AM"},
        {name: "Bahia", initials: "BA"},
        {name: "Ceará", initials: "CE"},
        {name: "Distrito Federal", initials: "DF"},
        {name: "Espírito Santo", initials: "ES"},
        {name: "Goiás", initials: "GO"},
        {name: "Maranhão", initials: "MA"},
        {name: "Mato Grosso", initials: "MT"},
        {name: "Mato Grosso do Sul", initials: "MS"},
        {name: "Minas Gerais", initials: "MG"},
        {name: "Pará", initials: "PA"},
        {name: "Paraíba", initials: "PB"},
        {name: "Paraná", initials: "PR"},
        {name: "Pernambuco", initials: "PE"},
        {name: "Piauí", initials: "PI"},
        {name: "Rio de Janeiro", initials: "RJ"},
        {name: "Rio Grande do Norte", initials: "RN"},
        {name: "Rio Grande do Sul", initials: "RS"},
        {name: "Rondônia", initials: "RO"},
        {name: "Roraima", initials: "RR"},
        {name: "Santa Catarina", initials: "SC"},
        {name: "São Paulo", initials: "SP"},
        {name: "Sergipe", initials: "SE"},
        {name: "Tocantins", initials: "TO"}
    ]

    const validateCpf = async (cpf) => {

        const {data} = await api({
            method:'post',     
            url:`/user/validateCpf`,
            data: {
                cpf: cpf
            }
        })
        
        setValidCPF(data)
    }
    

    return (
        <ContainerRegisterProfessionalsData>
             <SecondaryText margin="0 0 2.5em 0">Dados pessoais</SecondaryText>
                <RegisterProfessionalsForm>
                    <ContainerRow>
                            <InputWithLabel
                            inputValue={personalData.name}
                            setinputWithLabelValue={setName}
                            label="Nome"
                            width="100%"
                            widthContainer="50%" 
                            placeholder="Nome..."
                            padding="0 2em 0 0"
                            />
                            <ContainerTextRequired>
                                <MaskedInput
                                mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/ ,/\d/]}
                                placeholder="CPF"
                                onChange={(e) => {
                                    const value = cleanMask(e.target.value)
                                    value !== '' && validateCpf(value)
                                    setCPF(value)
                                }}
                                guide={false}
                                keepCharPositions={true}
                                render={(maskRef, maskProps) => (
                                    <InputLine borderColor={validCPF === false && "red"} widthLine="23%" margin="0 2em 0 0">
                                        <DefaultInput
                                        placeholderColor={validCPF === false && "red"}
                                        padding="0.3em 1.2em 0 1.2em"
                                        ref={
                                            node => {
                                            if(node){
                                                maskRef(node);
                                                inputRef.current = node;
                                            }}
                                        }
                                        {...maskProps}
                                        />
                                    </InputLine>
                                
                                )}
                                />
                                {validCPF === false &&
                                    <TextRequired>
                                        CPF Existente
                                    </TextRequired>
                                }
                            </ContainerTextRequired>
                            <InputText
                            setTextValue={setRG}
                            value={personalData.RG}
                            placeholder="RG"
                            width="100%"
                            widthLine="25%"
                            type="number"
                            />
                    </ContainerRow>
                    <ContainerRow>
                        <InputDate
                         setDate={setBirthDate}
                         placeholder="Data nascimento"
                         date={personalData.birthDate}
                         margin="0 2em 0 0"
                        />
                         <MaskedInput
                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/ ,/\d/]}
                            placeholder="Celular"
                            keepCharPositions={true}
                            guide={false}
                            onChange={(e) => {
                                const value = cleanMask(e.target.value)
                                setPhoneNumber(value)
                            }}
                            render={(maskRef, maskProps) => (
                                <InputLine  widthLine="23%" margin="0 2em 0 0">
                                    <DefaultInput
                                    padding="0.3em 1.2em 0 1.2em"
                                    ref={
                                        node => {
                                        if(node){
                                            maskRef(node);
                                            inputRef.current = node;
                                        }}
                                    }
                                    {...maskProps}
                                    />
                                </InputLine>
                                
                            )}
                            />
                         <MaskedInput
                            mask={[/[1-9]/, /\d/, '.', ' ', /\d/, /\d/, /\d/,'.', 
                            /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                            placeholder="CNPJ"
                            keepCharPositions={true}
                            onChange={(e) => {
                                const value = cleanMask(e.target.value)
                                setCNPJ(value)
                            }}
                            guide={false}
                            render={(maskRef, maskProps) => (
                                <InputLine  widthLine="23%" margin="0 2em 0 0">
                                    <DefaultInput
                                    padding="0.3em 1.2em 0 1.2em"
                                     width="100%"
                                     widthLine="23%"
                                     margin="0 2em 0 0"
                                    ref={
                                        node => {
                                        if(node){
                                            maskRef(node);
                                            inputRef.current = node;
                                        }}
                                    }
                                    {...maskProps}
                                    />
                                </InputLine>
                                
                            )}
                            />
                        <InputText
                         setTextValue={setCorporateName}
                         value={personalData.corporateName}
                         placeholder="Razão Social"
                         width="100%"
                         widthLine="30%"
                        // editValue={}
                        />
                    </ContainerRow>
                    <ContainerRow>
                         <MaskedInput
                            mask={[/\d/, /\d/, /\d/, /\d/, /\d/,'-', 
                            /\d/, /\d/, /\d/]}
                            placeholder="CEP"
                            onChange={(e) => {
                                const value = cleanMask(e.target.value)
                                setCEP(value)
                            }}
                            keepCharPositions={true}
                            guide={false}
                            render={(maskRef, maskProps) => (
                                <InputLine  widthLine="23%" margin="0 2em 0 0">
                                    <DefaultInput
                                    padding="0.3em 1.2em 0 1.2em"
                                    width="100%"
                                    widthLine="23%"
                                    margin="0 2em 0 0"
                                    ref={
                                        node => {
                                        if(node){
                                            maskRef(node);
                                            inputRef.current = node;
                                        }}
                                    }
                                    {...maskProps}
                                    />
                                </InputLine>
                                
                            )}
                            />
                         <InputText
                         setTextValue={setStreet}
                         value={personalData.street}
                         placeholder="Rua"
                         width="100%"
                         widthLine="40%"
                         margin="0 2em 0 0"
                        />
                         <InputText
                         setTextValue={setAddressNumber}
                         value={personalData.addressNumber}
                         placeholder="Número"
                         type="number"
                         width="100%"
                         widthLine="17%"
                         margin="0 2em 0 0"
                        />
                         <InputText
                         setTextValue={setAddressDetails}
                         value={personalData.addressDetails}
                         placeholder="Complemento"
                         width="100%"
                         widthLine="19%"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <InputText
                         setTextValue={setNeighborhood}
                         value={personalData.neighborhood}
                         placeholder="Bairro"
                         width="100%"
                         widthLine="50%"
                         margin="0 2em 0 0"
                        />
                         <InputText
                         setTextValue={setCity}
                         value={personalData.city}
                         placeholder="Cidade"
                         width="100%"
                         widthLine="38%"
                         margin="0 2em 0 0"
                        />
                        <InputSelect
                        value={personalData.UF}
                        setSelectedOption={setUF}
                        options={optionsUF}
                        placeholder="UF"
                        width="230px"
                        />    
                    </ContainerRow>
                    
             </RegisterProfessionalsForm>
        </ContainerRegisterProfessionalsData>
    )
}

export default RegisterProfessionalsData;