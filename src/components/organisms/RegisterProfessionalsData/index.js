import React, { useEffect, useState } from "react";
import {
  ContainerRegisterProfessionalsData,
  RegisterProfessionalsForm,
  ContainerRow,
  PhoneInternational
} from "./style.js";
import { Country, State } from 'country-state-city';
import SecondaryText from "../../atoms/SecondaryText/style";
import InputWithLabel from "../../atoms/InputWithLabel/index.js";
import InputSelectUf from '../../atoms/InputSelectUf/index.js'
import InputMasked from "../../atoms/InputMasked/index.js";
import InputSelectCountry from "../../atoms/InputSelectCountry/Index";
import styled from "styled-components";

const RegisterProfessionalsData = ({ data }) => {
  const { values, handleChange, errors, touched, setFieldTouched } = data;

  const [optionsUF, setOptionsUf] = useState([]);

  useEffect(() => {

    if (values.country === "") return
    const countries = Country.getAllCountries()
    const filtro = countries.find(item => item.name === values.country).isoCode
    const states = State.getStatesOfCountry(filtro)
    setOptionsUf(states)

  }, [values.country])

  return (
    <ContainerRegisterProfessionalsData>
      <SecondaryText margin="0 0 2.5em 0">Dados pessoais</SecondaryText>
      <RegisterProfessionalsForm>
        <ContainerRow>
          <InputWithLabel
            value={values.name}
            onChange={handleChange("name")}
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
            onChange={handleChange("birth_date")}
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
            mask={[/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/,]}
            label="CPF"
            onChange={handleChange("cpf")}
            error={errors.cpf}
            touched={touched.cpf}
            width="100%"
            padding="0em 2em 0 0em"
            widthContainer="100%"
            handleBlur={setFieldTouched}
          />
          <InputWithLabel
            onChange={handleChange("rg")}
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
          />
          <PhoneInternational
            country={"br"}
            placeholder={"Telefone"}
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
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
            onChange={handleChange("cep")}
            label="CEP"
            padding="0em 2em 0 0em"
            mask={values.country === "Brazil" && [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            width="100%"
            widthContainer="23%"
            error={errors.cep}
            touched={touched.cep}
            handleBlur={setFieldTouched}
            name="cep"
          />
          <InputWithLabel
            onChange={handleChange("street_name")}
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
            onChange={handleChange("house_number")}
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
            onChange={handleChange("complement")}
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
            widthContainer="50%"
            margin="0 2em 0 0"
            placeHolder={"Pais"}
            onChange={handleChange("country")}
            value={values.country}
            error={errors.country}
            touched={touched.country}
          />
          <InputWithLabel
            onChange={handleChange("neighbourhood_name")}
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
            onChange={handleChange("city_name")}
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
            value={values.options}
            onChange={handleChange("uf")}
            options={optionsUF}
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
            onChange={handleChange("email")}
            padding="0 2em 0 0"
            touched={touched.email}
            type="email"
            value={values.email}
            widthContainer="45%"
            width="100%"
          />
        </ContainerRow>
      </RegisterProfessionalsForm>
    </ContainerRegisterProfessionalsData>
  );
};

export default RegisterProfessionalsData;
