import { Country, State } from 'country-state-city';
import SecondaryText from '../../atoms/SecondaryText/style';
import InputSelect from '../../atoms/InputSelect';
import InputSelectUf from '../../atoms/InputSelectUf/index.js';
import InputSelectCountry from '../../atoms/InputSelectCountry/Index';
import React, { useState } from 'react';
import {
  ContainerRegisterProfessionalsData,
  RegisterProfessionalsForm,
  ContainerRow,
  PhoneInternational,
} from './style.js';
import InputWithLabel from '../../atoms/InputWithLabel/index.js';
import InputMasked from '../../atoms/InputMasked/index.js';
import { useEffect } from 'react';
import SelectBank from '../../atoms/SelectBank';

export const optionsUF = [
  { name: 'Todos', id: '' },
  { name: 'Acre', id: 'AC' },
  { name: 'Alagoas', id: 'AL' },
  { name: 'Amapá', id: 'AP' },
  { name: 'Amazonas', id: 'AM' },
  { name: 'Bahia', id: 'BA' },
  { name: 'Ceará', id: 'CE' },
  { name: 'Distrito Federal', id: 'DF' },
  { name: 'Espírito Santo', id: 'ES' },
  { name: 'Goiás', id: 'GO' },
  { name: 'Maranhão', id: 'MA' },
  { name: 'Mato Grosso', id: 'MT' },
  { name: 'Mato Grosso do Sul', id: 'MS' },
  { name: 'Minas Gerais', id: 'MG' },
  { name: 'Pará', id: 'PA' },
  { name: 'Paraíba', id: 'PB' },
  { name: 'Paraná', id: 'PR' },
  { name: 'Pernambuco', id: 'PE' },
  { name: 'Piauí', id: 'PI' },
  { name: 'Rio de Janeiro', id: 'RJ' },
  { name: 'Rio Grande do Norte', id: 'RN' },
  { name: 'Rio Grande do Sul', id: 'RS' },
  { name: 'Rondônia', id: 'RO' },
  { name: 'Roraima', id: 'RR' },
  { name: 'Santa Catarina', id: 'SC' },
  { name: 'São Paulo', id: 'SP' },
  { name: 'Sergipe', id: 'SE' },
  { name: 'Tocantins', id: 'TO' },
];

const optionsBank = [
  { name: 'Conta Corrente ', id: '001' },
  { name: 'Conta Poupança ', id: '013' },
];


const optionsTypeOfTranfer = [
  { name: 'TED', id: 'TED' },
  { name: 'DOC', id: 'DOC' },
  { name: 'PIX', id: 'PIX' },
];

const optionsPixKeyType = [
  { name: 'CPF', id: 'CPF' },
  { name: 'CNPJ', id: 'CNPJ' },
  { name: 'E-mail', id: 'E-mail' },
  { name: 'Número do telefone celular', id: 'Número do telefone celular' },
  { name: 'Chave aleatória', id: 'Chave aleatória' },
];


const RegisterProfessionalsData = ({ data }) => {
  const [optionsUFCountry, setOptionsUFCountry] = useState([]);
  const { values, handleChange, errors, touched, setFieldTouched } = data;
  const [isDisabled, setIsDisabled] = useState(true)


  useEffect(() => {
    if (values.country === '') return;
    const countries = Country.getAllCountries();
    const filtro = countries.find(
      (item) => item.name === values.country
    ).isoCode;
    const states = State.getStatesOfCountry(filtro);
    setOptionsUFCountry(states);
  }, [values.country]);

  useEffect(()=>{
    if (values.professional_data.type_of_transfer === "PIX"){
      setIsDisabled(!isDisabled);
    }else{
      setIsDisabled(true)
    }
  }, [values.professional_data.type_of_transfer])

  return (
    <ContainerRegisterProfessionalsData>
      <SecondaryText margin="0 0 2.5em 0">Dados pessoais</SecondaryText>
      <RegisterProfessionalsForm>
        <ContainerRow>
          <InputWithLabel
            value={values.name}
            onChange={handleChange('name')}
            label="Nome"
            name="name"
            width="100%"
            widthContainer="60%"
            placeHolder="Nome..."
            padding="0 2em 0 0"
            error={errors.name}
            touched={touched.name}
            handleBlur={setFieldTouched}
          />
          <InputWithLabel
            onChange={handleChange('birth_date')}
            label="Data nascimento"
            value={values.birth_date}
            width="100%"
            widthContainer="40%"
            type="date"
            error={errors.birth_date}
            touched={touched.birth_date}
            handleBlur={setFieldTouched}
            name="birth_date"
          />
        </ContainerRow>
        <ContainerRow>
          <InputMasked
            id="cpf"
            name="cpf"
            value={values.cpf}
            mask={[
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
            ]}
            label="CPF"
            onChange={handleChange('cpf')}
            error={errors.cpf}
            touched={touched.cpf}
            width="100%"
            padding="0em 2em 0 0em"
            widthContainer="100%"
            handleBlur={setFieldTouched}
          />
          <InputWithLabel
            onChange={handleChange('rg')}
            value={values.rg}
            label="RG"
            width="100%"
            widthContainer="100%"
            padding="0em 2em 0 0em"
            error={errors.rg}
            touched={touched.rg}
            handleBlur={setFieldTouched}
            name="rg"
            type="number"
            limit="11"
          />
          <PhoneInternational
            country={'br'}
            placeholder={'Telefone'}
            mask={[
              '(',
              /[1-9]/,
              /\d/,
              ')',
              ' ',
              /\d/,
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            onChange={handleChange('telephone_number')}
            error={errors.telephone_number}
            touched={touched.telephone_number}
            handleBlur={setFieldTouched}
            type="number"
            name="telephone_number"
            value={values.telephone_number}
          />
        </ContainerRow>
        <ContainerRow>
          <InputMasked
            type="text"
            value={values.cep}
            onChange={handleChange('cep')}
            label="CEP"
            padding="0em 2em 0 0em"
            mask={
              values.country === 'Brazil' && [
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
              ]
            }
            width="100%"
            widthContainer="23%"
            error={errors.cep}
            touched={touched.cep}
            handleBlur={setFieldTouched}
            name="cep"
          />
          <InputWithLabel
            onChange={handleChange('street_name')}
            value={values.street_name}
            label="Rua"
            width="100%"
            widthContainer="40%"
            padding="0 2em 0 0"
            error={errors.street_name}
            touched={touched.street_name}
            handleBlur={setFieldTouched}
            name="street_name"
          />
          <InputWithLabel
            onChange={handleChange('house_number')}
            value={values.house_number}
            label="Número"
            type="number"
            width="100%"
            widthContainer="17%"
            padding="0 2em 0 0"
            error={errors.house_number}
            touched={touched.house_number}
            handleBlur={setFieldTouched}
            name="house_number"
          />
          <InputWithLabel
            onChange={handleChange('complement')}
            value={values.complement}
            label="Complemento"
            width="100%"
            widthContainer="19%"
            error={errors.complement}
            touched={touched.complement}
            handleBlur={setFieldTouched}
            name="complement"
          />
        </ContainerRow>
        <ContainerRow>
          <InputSelectCountry
            width="100%"
            widthContainer="60%"
            margin="0 2em 0 0"
            placeHolder={'Pais'}
            onChange={handleChange('country')}
            value={values.country}
            error={errors.country}
            touched={touched.country}
          />
          <InputWithLabel
            onChange={handleChange('neighbourhood_name')}
            value={values.neighbourhood_name}
            label="Bairro"
            width="100%"
            widthContainer="50%"
            padding="0 2em 0 0"
            error={errors.neighbourhood_name}
            touched={touched.neighbourhood_name}
            handleBlur={setFieldTouched}
            name="neighbourhood_name"
          />
          <InputWithLabel
            value={values.city_name}
            onChange={handleChange('city_name')}
            label="Cidade"
            width="100%"
            widthContainer="38%"
            padding="0 2.4em 0 0"
            error={errors.city_name}
            touched={touched.city_name}
            handleBlur={setFieldTouched}
            name="city_name"
          />
          <InputSelectUf
            value={values.uf}
            onChange={handleChange('uf')}
            options={optionsUFCountry}
            placeHolder="UF"
            width="230px"
          />
        </ContainerRow>
        <ContainerRow>
          <InputWithLabel
            error={errors.email}
            handleBlur={setFieldTouched}
            label="E-mail Pessoal"
            name="email"
            onChange={handleChange('email')}
            padding="0 2em 0 0"
            touched={touched.email}
            type="email"
            value={values.email}
            widthContainer="45%"
            width="100%"
          />
        </ContainerRow>

        <RegisterProfessionalsForm>
          <SecondaryText margin="0 0 2.5em">
            Dados Pessoa Juridica
          </SecondaryText>
          <ContainerRow>
            <InputMasked
              onChange={handleChange('professional_data.cnpj')}
              value={values.professional_data.cnpj}
              mask={[
                /[0-9]/,
                /\d/,
                '.',
                /\d/,
                /\d/,
                /\d/,
                '.',
                /\d/,
                /\d/,
                /\d/,
                '/',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
              ]}
              label="CNPJ"
              error={errors?.professional_data?.cnpj}
              touched={errors?.professional_data?.cnpj}
              padding="0em 2em 0 0em"
              width="100%"
              widthContainer="30%"
              handleBlur={setFieldTouched}
              name="professional_data.cnpj"
            />
            <InputWithLabel
              onChange={handleChange('professional_data.razao_social')}
              value={values.professional_data.razao_social}
              label="Razão Social"
              width="100%"
              widthContainer="70%"
              error={errors.razao_social}
              touched={touched.razao_social}
              handleBlur={setFieldTouched}
              name="professional_data.razao_social"
            />
          </ContainerRow>
          <ContainerRow>
            <InputWithLabel
              value={values.professional_data.fantasy_name}
              onChange={handleChange('professional_data.fantasy_name')}
              label="Nome fantasia"
              width="100%"
              widthContainer="57%"
              error={errors.fantasy_name}
              touched={touched.fantasy_name}
              handleBlur={setFieldTouched}
              name="professional_data.fantasy_name"
            />
            <InputMasked
              value={values.professional_data.company_phone_number}
              mask={[
                '(',
                /[1-9]/,
                /\d/,
                ')',
                ' ',
                /\d/,
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              label="Telefone"
              onChange={handleChange('professional_data.company_phone_number')}
              error={errors.company_phone_number}
              touched={touched.company_phone_number}
              width="100%"
              widthContainer="40%"
              handleBlur={setFieldTouched}
              name="professional_data.company_phone_number"
            />
          </ContainerRow>
          <ContainerRow>
            <InputMasked
              value={values.professional_data.company_cep}
              onChange={handleChange('professional_data.company_cep')}
              label="CEP"
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
              padding="0em 2em 0 0em"
              width="100%"
              widthContainer="23%"
              error={errors.company_cep}
              touched={touched.company_cep}
              handleBlur={setFieldTouched}
              name="professional_data.company_cep"
            />
            <InputWithLabel
              onChange={handleChange('professional_data.company_street_name')}
              value={values.professional_data.company_street_name}
              label="Rua"
              width="100%"
              widthContainer="40%"
              padding="0 2em 0 0"
              error={errors.company_street_name}
              touched={touched.company_street_name}
              handleBlur={setFieldTouched}
              name="professional_data.company_street_name"
            />
            <InputWithLabel
              onChange={handleChange('professional_data.company_house_number')}
              value={values.professional_data.company_house_number}
              label="Número"
              type="number"
              width="100%"
              widthContainer="17%"
              padding="0 2em 0 0"
              error={errors.company_house_number}
              touched={touched.company_house_number}
              handleBlur={setFieldTouched}
              name="professional_data.company_house_number"
            />
            <InputWithLabel
              onChange={handleChange('professional_data.company_complement')}
              value={values.professional_data.company_complement}
              label="Complemento"
              width="100%"
              widthContainer="19%"
              error={errors.company_complement}
              touched={touched.company_complement}
              handleBlur={setFieldTouched}
              name="professional_data.company_complement"
            />
          </ContainerRow>
          <ContainerRow>
            <InputWithLabel
              onChange={handleChange(
                'professional_data.company_neighborhood_name'
              )}
              value={values.professional_data.company_neighborhood_name}
              label="Bairro"
              width="100%"
              widthContainer="60%"
              padding="0 2em 0 0"
              error={errors.company_neighborhood_name}
              touched={touched.company_neighborhood_name}
              handleBlur={setFieldTouched}
              name="professional_data.company_neighborhood_name"
            />
            <InputWithLabel
              value={values.professional_data.company_city_name}
              onChange={handleChange('professional_data.company_city_name')}
              label="Cidade"
              width="100%"
              widthContainer="70%"
              padding="0 2.4em 0 0"
              error={errors.company_city_name}
              touched={touched.company_city_name}
              handleBlur={setFieldTouched}
              name="professional_data.company_city_name"
            />
            <InputSelect
              value={values.professional_data.uf_company}
              onChange={handleChange('professional_data.uf_company')}
              options={optionsUF}
              placeHolder="UF"
              width="230px"
            />
          </ContainerRow>
          <ContainerRow>
            <InputWithLabel
              name="professional_data.company_email"
              error={errors?.professional_data?.company_email}
              touched={errors?.professional_data?.company_email}
              handleBlur={setFieldTouched}
              onChange={handleChange('professional_data.company_email')}
              width="100%"
              widthContainer="30%"
              label="E-mail"
              value={values.professional_data.company_email}
              type="email"
            />
          </ContainerRow>
        </RegisterProfessionalsForm>
      </RegisterProfessionalsForm>
      <RegisterProfessionalsForm>
        <SecondaryText margin="0 0 2em 0">Dados Bancários</SecondaryText>
        <ContainerRow>
          <InputMasked
            value={values.professional_data.agency}
            padding="0 2em 0 0"
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
            onChange={handleChange('professional_data.agency')}
            label="Agência"
            width="100%"
            widthContainer="40%"
            error={errors.agency}
            touched={touched.agency}
            handleBlur={setFieldTouched}
            name="professional_data.agency"
            type="number"
          />
          <InputMasked
            value={values.professional_data.account_number}
            onChange={handleChange('professional_data.account_number')}
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
            label="Número da conta"
            width="100%"
            widthContainer="60%"
            error={errors.account_number}
            touched={touched.account_number}
            handleBlur={setFieldTouched}
            name="professional_data.account_number"
            type="number"
          />
        </ContainerRow>
        <ContainerRow>
          <SelectBank
            value={values.professional_data.bank}
            onChange={handleChange('professional_data.bank')}
            padding="0em 2em 0 0em"
            placeHolder={'Banco'}
            label="Banco"
            width="100%"
            lineWidth="68%"
            name="professional_data.bank"
          />
          <InputSelect
            value={values.professional_data.account_type}
            onChange={handleChange('professional_data.account_type')}
            options={optionsBank}
            placeHolder="Tipo da conta"
            padding="0em 2em 0 0em"
            width="100%"
            lineWidth="30%"
            name="professional_data.account_type"
          />
        </ContainerRow>

        {/* Dados do Pix */}

        <ContainerRow>
          <InputSelect
            value={values?.professional_data?.type_of_transfer}
            onChange={handleChange('professional_data.type_of_transfer')}
            options={optionsTypeOfTranfer}
            placeHolder="Tipo de tranferência"
            padding="0em 2em 0 0em"
            width="100%"
            lineWidth="33%"
            name="professional_data.type_of_transfer"
           
          />
          <InputSelect
            value={values?.professional_data?.pix_key_type}
            onChange={handleChange('professional_data.pix_key_type')} 
            options={optionsPixKeyType}
            placeHolder="Tipo chave Pix"
            padding="0em 2em 0 0em"
            width="100%"
            lineWidth="33%"
            name="professional_data.pix_key_type"
            disabled={isDisabled}
          />
          <InputWithLabel
            name="professional_data.pix_key "
            error={errors?.professional_data?.pix_key}
            touched={errors?.professional_data?.pix_key}
            handleBlur={setFieldTouched}
            onChange={handleChange('professional_data.pix_key')}
            width="100%"
            widthContainer="30%"
            label="Chave Pix"
            value={values?.professional_data?.pix_key}
            type="text"
            disabled={isDisabled}
          />
        </ContainerRow>

      </RegisterProfessionalsForm>
    </ContainerRegisterProfessionalsData>
  );
};

export default RegisterProfessionalsData;
