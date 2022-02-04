import React, { useEffect, useRef, useState } from 'react'
import MaskedInput from 'react-text-mask'

import { TextRequired } from '../../atoms/TextRequired'
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

const optionsUF = [
    {id: "Acre", name: "AC"},
    {id: "Alagoas", name: "AL"},
    {id: "Amapá", name: "AP"},
    {id: "Amazonas", name: "AM"},
    {id: "Bahia", name: "BA"},
    {id: "Ceará", name: "CE"},
    {id: "Distrito Federal", name: "DF"},
    {id: "Espírito Santo", name: "ES"},
    {id: "Goiás", name: "GO"},
    {id: "Maranhão", name: "MA"},
    {id: "Mato Grosso", name: "MT"},
    {id: "Mato Grosso do Sul", name: "MS"},
    {id: "Minas Gerais", name: "MG"},
    {id: "Pará", name: "PA"},
    {id: "Paraíba", name: "PB"},
    {id: "Paraná", name: "PR"},
    {id: "Pernambuco", name: "PE"},
    {id: "Piauí", name: "PI"},
    {id: "Rio de Janeiro", name: "RJ"},
    {id: "Rio Grande do Norte", name: "RN"},
    {id: "Rio Grande do Sul", name: "RS"},
    {id: "Rondônia", name: "RO"},
    {id: "Roraima", name: "RR"},
    {id: "Santa Catarina", name: "SC"},
    {id: "São Paulo", name: "SP"},
    {id: "Sergipe", name: "SE"},
    {id: "Tocantins", name: "TO"}
]

const RegisterProfessionalsData = ({ data }) => {

   const inputRef = useRef(null);
   const [validCPF, setValidCPF] = useState(true)
   const { values, handleChange, errors} = data

    useEffect(() => {
        inputRef.current?.focus()
        console.log(errors)
    }, [errors])

    return (
        <ContainerRegisterProfessionalsData>
             <SecondaryText margin="0 0 2.5em 0">Dados pessoais</SecondaryText>
                <RegisterProfessionalsForm>
                    <ContainerRow>
                        <InputWithLabel
                            inputValue={values.name}
                            onChange={handleChange('name')}
                            label="Nome"
                            width="100%"
                            widthContainer="50%" 
                            placeholder="Nome..."
                            padding="0 2em 0 0"
                        />
                        <MaskedInput
                            id="CPF"
                            name="CPF"
                            value={values.CPF}
                            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/ ,/\d/]}
                            placeholder="CPF"
                            onChange={handleChange('CPF')}
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
                            
                            )} />
                        <InputText 
                            onChange={handleChange('RG')}
                            value={values.RG}
                            placeholder="RG"
                            width="100%"
                            widthLine="25%"
                            type="number"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <InputDate
                            onChange={handleChange('birthDate')}
                            placeholder="Data nascimento"
                            value={values.birthDate}
                            margin="0 2em 0 0"
                        />
                        <MaskedInput
                            value={values.phoneNumber}
                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/ ,/\d/]}
                            placeholder="Celular"
                            keepCharPositions={true}
                            guide={false}
                            onChange={handleChange('phoneNumber')}
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
                            )} />
                        <MaskedInput
                            value={values.CNPJ}
                            mask={[/[1-9]/, /\d/, '.', ' ', /\d/, /\d/, /\d/,'.', 
                            /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                            placeholder="CNPJ"
                            keepCharPositions={true}
                            onChange={handleChange('CNPJ')}
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
                            )} />
                        <InputText
                            onChange={handleChange('corporateName')}
                            value={values.corporateName}
                            placeholder="Razão Social"
                            width="100%"
                            widthLine="30%"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <MaskedInput
                            value={values.CEP}
                            mask={[/\d/, /\d/, /\d/, /\d/, /\d/,'-', 
                            /\d/, /\d/, /\d/]}
                            placeholder="CEP"
                            onChange={handleChange('CEP')}
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
                            )} />
                        <InputText
                            onChange={handleChange('street')}
                            value={values.street}
                            placeholder="Rua"
                            width="100%"
                            widthLine="40%"
                            margin="0 2em 0 0"
                        />
                        <InputText
                            onChange={handleChange('addressNumber')}
                            value={values.addressNumber}
                            placeholder="Número"
                            type="number"
                            width="100%"
                            widthLine="17%"
                            margin="0 2em 0 0"
                        />
                        <InputText
                            onChange={handleChange('addressDetails')}
                            value={values.addressDetails}
                            placeholder="Complemento"
                            width="100%"
                            widthLine="19%"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <InputText
                            onChange={handleChange('neighborhood')}
                            value={values.neighborhood}
                            placeholder="Bairro"
                            width="100%"
                            widthLine="50%"
                            margin="0 2em 0 0"
                        />
                        <InputText
                            onChange={handleChange('city')}
                            value={values.city}
                            placeholder="Cidade"
                            width="100%"
                            widthLine="38%"
                            margin="0 2em 0 0"
                        />
                        <InputSelect
                            value={values.UF}
                            onChange={handleChange('UF')}
                            options={optionsUF}
                            placeholder="UF"
                            width="230px"
                        />    
                    </ContainerRow>
             </RegisterProfessionalsForm>
        </ContainerRegisterProfessionalsData>
    )
}

export default RegisterProfessionalsData