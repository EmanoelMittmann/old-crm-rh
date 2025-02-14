import { Country, State } from "country-state-city";
import SecondaryText from "../../atoms/SecondaryText/style";
import InputText from "../../atoms/InputText";
import InputSelect from "../../atoms/InputSelect";
import InputSelectUf from "../../atoms/InputSelectUf/index.js";
import InputSelectCountry from "../../atoms/InputSelectCountry/Index";
import React, { useState } from "react";
import {
  ContainerRegisterProfessionalsData,
  RegisterProfessionalsForm,
  ContainerRow,
  ContainerRowDuo,
} from "./style.js";
import InputWithLabel from "../../atoms/InputWithLabel/index.js";
import InputMasked from "../../atoms/InputMasked/index.js";
import { useEffect } from "react";
import SelectBank from "../../atoms/SelectBank";
import PhoneInternational from "../../atoms/PhoneInternational";
import MultiSelectCompany from "../../atoms/MultiSelectCompany";

export const optionsTypePerson = [
  { name: "Pessoa Fisica", id: "PF" },
  { name: "Pessoa Juridica", id: "PJ" },
];

export const optionsUF = [
  { name: "Todos", id: "" },
  { name: "Acre", id: "AC" },
  { name: "Alagoas", id: "AL" },
  { name: "Amapá", id: "AP" },
  { name: "Amazonas", id: "AM" },
  { name: "Bahia", id: "BA" },
  { name: "Ceará", id: "CE" },
  { name: "Distrito Federal", id: "DF" },
  { name: "Espírito Santo", id: "ES" },
  { name: "Goiás", id: "GO" },
  { name: "Maranhão", id: "MA" },
  { name: "Mato Grosso", id: "MT" },
  { name: "Mato Grosso do Sul", id: "MS" },
  { name: "Minas Gerais", id: "MG" },
  { name: "Pará", id: "PA" },
  { name: "Paraíba", id: "PB" },
  { name: "Paraná", id: "PR" },
  { name: "Pernambuco", id: "PE" },
  { name: "Piauí", id: "PI" },
  { name: "Rio de Janeiro", id: "RJ" },
  { name: "Rio Grande do Norte", id: "RN" },
  { name: "Rio Grande do Sul", id: "RS" },
  { name: "Rondônia", id: "RO" },
  { name: "Roraima", id: "RR" },
  { name: "Santa Catarina", id: "SC" },
  { name: "São Paulo", id: "SP" },
  { name: "Sergipe", id: "SE" },
  { name: "Tocantins", id: "TO" },
];

export const optionsBank = [
  { name: "Conta Corrente ", id: "Conta Corrente" },
  { name: "Conta Poupança ", id: "Conta Poupança" },
];

const optionsTypeOfTranfer = [
  { name: "TED", id: "TED" },
  { name: "DOC", id: "DOC" },
  { name: "PIX", id: "PIX" },
];

const optionsPixKeyType = [
  { name: "CPF", id: "CPF" },
  { name: "CNPJ", id: "CNPJ" },
  { name: "E-mail", id: "E-mail" },
  { name: "Número do telefone celular", id: "Phone" },
  { name: "Chave aleatória", id: "RandomKey" },
];

const RegisterProfessionalsData = ({ data, optionsCompany_id }) => {
  const {
    values,
    handleChange,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    setFieldError,
  } = data;
  const [isDisabled, setIsDisabled] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const masks =
    values.professional_data?.pix_key_type === "CPF"
      ? [
          /\d/,
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
        ]
      : values.professional_data?.pix_key_type === "CNPJ"
      ? [
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          "/",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
        ]
      : values.professional_data?.pix_key_type === "Phone"
      ? [
          "(",
          /[1-9]/,
          /\d/,
          ")",
          " ",
          /\d/,
          " ",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]
      : values.professional_data?.pix_key_type === "E-mail"
      ? [/[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/]
      : [];

  useEffect(() => {
    values.professional_data?.type_of_transfer === "PIX"
      ? setIsDisabled(false)
      : setIsDisabled(true);
    errors?.cep === setFieldError("CEP não encontrado!")
      ? setDisabled(!disabled)
      : setDisabled(disabled);
  }, [
    values.professional_data?.type_of_transfer,
    errors.cep,
    values?.professional_data?.pix_key,
  ]);

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
            padding="0 2em 0 0"
            error={errors.name}
            touched={touched.name}
            handleBlur={setFieldTouched}
            placeholder="Informe o nome completo"
            required
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
            placeholder="Informe a data de nascimento"
            required
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
              ".",
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
            label="CPF"
            onChange={handleChange("cpf")}
            error={errors.cpf}
            touched={touched.cpf}
            width="100%"
            padding="0em 2em 0 0em"
            widthContainer="100%"
            handleBlur={setFieldTouched}
            placeHolder="CPF"
            required
          />
          <InputMasked
            onChange={handleChange("rg")}
            value={values.rg}
            mask={[
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
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
            placeHolder="RG"
            required
          />
          <PhoneInternational
            error={errors.telephone_number}
            touched={touched.telephone_number}
            onBlur={setFieldTouched}
            onChange={handleChange("telephone_number")}
            width="25em"
            label="Telefone"
            name="telephone_number"
            value={values.telephone_number}
            required={true}
          />
        </ContainerRow>
        <ContainerRow>
          <InputMasked
            type="text"
            value={values.cep}
            onChange={handleChange("cep")}
            label="CEP"
            padding="0em 2em 0 0em"
            mask={
              values.country === "Brazil" && [
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
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
            placeHolder="CEP"
            required
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
            placeholder="Rua"
            required
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
            placeholder="número"
            required
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
            placeholder="complemento"
          />
        </ContainerRow>
        <ContainerRow>
          <InputSelectCountry
            textColor={values.country}
            width="100%"
            widthContainer="60%"
            margin="0 2em 0 0"
            label="País"
            onChange={handleChange("country")}
            value={values.country}
            error={errors.country}
            touched={touched.country}
            required
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
            placeholder="Bairro"
            required
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
            disabled={disabled}
            placeholder="Cidade"
            required
          />
          <InputSelect
            textColor={values?.uf}
            value={values?.uf}
            onChange={handleChange("uf")}
            options={optionsUF}
            placeholder="UF"
            width="230px"
            touched={touched?.uf}
            error={errors?.uf}
            label="UF"
            required
            disabled={disabled}
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
            placeholder="Informe seu email pessoal"
            required
          />
        </ContainerRow>

        <RegisterProfessionalsForm>
          <SecondaryText margin="2.5em 0">Dados Pessoa Juridica</SecondaryText>
          <ContainerRow>
            <InputMasked
              onChange={handleChange("professional_data.cnpj")}
              value={values.professional_data?.cnpj}
              mask={[
                /[0-9]/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "/",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
              label="CNPJ"
              error={errors?.professional_data?.cnpj}
              touched={touched?.professional_data?.cnpj}
              padding="0em 2em 0 0em"
              width="100%"
              widthContainer="30%"
              handleBlur={setFieldTouched}
              name="professional_data.cnpj"
              placeHolder="CNPJ"
              required
            />
            <InputWithLabel
              onChange={handleChange("professional_data.razao_social")}
              value={values.professional_data?.razao_social}
              label="Razão Social"
              width="100%"
              widthContainer="70%"
              error={errors.professional_data?.razao_social}
              touched={touched.professional_data?.razao_social}
              handleBlur={setFieldTouched}
              name="professional_data.razao_social"
              placeholder="Razão Social"
              required
            />
          </ContainerRow>
          <ContainerRow>
            <InputWithLabel
              value={values.professional_data?.fantasy_name}
              onChange={handleChange("professional_data.fantasy_name")}
              label="Nome fantasia"
              width="100%"
              widthContainer="57%"
              error={errors.professional_data?.fantasy_name}
              touched={touched.professional_data?.fantasy_name}
              handleBlur={setFieldTouched}
              name="professional_data.fantasy_name"
              placeholder="Nome fantasia"
              required
            />
            <InputMasked
              value={values.professional_data?.company_phone_number}
              mask={[
                "(",
                /[1-9]/,
                /\d/,
                ")",
                " ",
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              label="Telefone"
              onChange={handleChange("professional_data.company_phone_number")}
              error={errors.professional_data?.company_phone_number}
              touched={touched.professional_data?.company_phone_number}
              width="100%"
              widthContainer="40%"
              handleBlur={setFieldTouched}
              placeHolder="Telefone"
              name="professional_data.company_phone_number"
              required
            />
          </ContainerRow>
          <ContainerRow>
            <InputMasked
              value={values.professional_data?.company_cep}
              onChange={handleChange("professional_data.company_cep")}
              label="CEP"
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
              padding="0em 2em 0 0em"
              width="100%"
              widthContainer="23%"
              error={errors.professional_data?.company_cep}
              touched={touched.professional_data?.company_cep}
              handleBlur={setFieldTouched}
              name="professional_data.company_cep"
              placeHolder="CEP"
              required
            />
            <InputWithLabel
              onChange={handleChange("professional_data.company_street_name")}
              value={values.professional_data?.company_street_name}
              label="Rua"
              width="100%"
              widthContainer="40%"
              padding="0 2em 0 0"
              error={errors.professional_data?.company_street_name}
              touched={touched.professional_data?.company_street_name}
              handleBlur={setFieldTouched}
              name="professional_data.company_street_name"
              placeholder="Rua"
              required
            />
            <InputWithLabel
              onChange={handleChange("professional_data.company_house_number")}
              value={
                values.professional_data?.company_house_number === 0
                  ? ""
                  : values.professional_data?.company_house_number
              }
              label="Número"
              type="number"
              width="100%"
              widthContainer="17%"
              padding="0 2em 0 0"
              error={errors.professional_data?.company_house_number}
              touched={touched.professional_data?.company_house_number}
              handleBlur={setFieldTouched}
              name="professional_data.company_house_number"
              placeholder="número"
              required
            />
            <InputWithLabel
              onChange={handleChange("professional_data.company_complement")}
              value={values.professional_data?.company_complement}
              label="Complemento"
              width="100%"
              widthContainer="19%"
              error={errors.company_complement}
              touched={touched.company_complement}
              handleBlur={setFieldTouched}
              name="professional_data.company_complement"
              placeholder="complemento"
            />
          </ContainerRow>
          <ContainerRow>
            <InputWithLabel
              onChange={handleChange(
                "professional_data.company_neighborhood_name"
              )}
              value={values.professional_data?.company_neighborhood_name}
              label="Bairro"
              width="100%"
              widthContainer="60%"
              padding="0 2em 0 0"
              error={errors.professional_data?.company_neighborhood_name}
              touched={touched.professional_data?.company_neighborhood_name}
              handleBlur={setFieldTouched}
              name="professional_data.company_neighborhood_name"
              placeholder="Bairro"
              required
            />
            <InputWithLabel
              value={values.professional_data?.company_city_name}
              onChange={handleChange("professional_data.company_city_name")}
              label="Cidade"
              width="100%"
              widthContainer="70%"
              padding="0 2.4em 0 0"
              error={errors.professional_data?.company_city_name}
              touched={touched.professional_data?.company_city_name}
              handleBlur={setFieldTouched}
              name="professional_data.company_city_name"
              disabled={disabled}
              placeholder="Cidade"
              required
            />
            <InputSelect
              textColor={values.professional_data?.uf_company}
              value={values.professional_data?.uf_company}
              onChange={handleChange("professional_data.uf_company")}
              options={optionsUF}
              label="UF"
              width="230px"
              error={errors.professional_data?.uf_company}
              touched={touched.professional_data?.uf_company}
              disabled={disabled}
              placeholder="UF"
            />
          </ContainerRow>
          <ContainerRow>
            <InputWithLabel
              name="professional_data.company_email"
              error={errors?.professional_data?.company_email}
              touched={touched?.professional_data?.company_email}
              handleBlur={setFieldTouched}
              onChange={handleChange("professional_data.company_email")}
              width="100%"
              widthContainer="100%"
              label="E-mail"
              value={values.professional_data?.company_email}
              type="email"
              placeholder="E-mail"
              required
            />
          </ContainerRow>
          <ContainerRow>
            <MultiSelectCompany
              error={errors?.companies}
              touched={touched?.companies}
              setFieldValue={setFieldValue}
              label={"Empresa Ubistart"}
              required={true}
              width="100%"
              name={"companies"}
              placeholder="Selecione a Empresa"
              options={optionsCompany_id}
              value={values.companies}
            />
          </ContainerRow>
        </RegisterProfessionalsForm>
      </RegisterProfessionalsForm>
      <RegisterProfessionalsForm>
        <SecondaryText margin="0 0 2em 0">Dados Bancários</SecondaryText>
        <ContainerRow>
          <InputSelect
            textColor={values?.professional_data?.type_person}
            placeholder="Tipo de pessoa"
            width="64%"
            lineWidth="100%"
            name="type_person"
            options={optionsTypePerson}
            value={values?.professional_data?.type_person}
            onChange={handleChange("professional_data.type_person")}
            error={errors?.professional_data?.type_person}
            touched={touched?.professional_data?.type_person}
            label="Pessoa Física/Jurídica"
            required
          />
          <SelectBank
            textColor={values.professional_data?.bank}
            value={values.professional_data?.bank}
            onChange={handleChange("professional_data.bank")}
            padding="0em 2em 0 1em"
            placeholder="Banco"
            error={errors?.professional_data?.bank}
            touched={touched?.professional_data?.bank}
            label="Banco"
            width="100%"
            setFieldValue={setFieldValue}
            lineWidth="100%"
            listWidth="26.7%"
            translate={"translate(0em,3em)"}
            name="professional_data.bank"
            required
          />
          <InputSelect
            textColor={values.professional_data?.account_type}
            value={values.professional_data?.account_type}
            onChange={handleChange("professional_data.account_type")}
            options={optionsBank}
            placeholder="Tipo da conta"
            error={errors?.professional_data?.account_type}
            touched={touched?.professional_data?.account_type}
            padding="0em 2em 0 0em"
            width="100%"
            lineWidth="100%"
            name="professional_data.account_type"
            label="Tipo da conta"
            required
          />
        </ContainerRow>
        <ContainerRow>
          <InputMasked
            value={values.professional_data?.agency}
            padding="0 1em 0 0"
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
            onChange={handleChange("professional_data.agency")}
            label="Agência"
            width="100%"
            widthContainer="40%"
            error={errors?.professional_data?.agency}
            touched={touched?.professional_data?.agency}
            handleBlur={setFieldTouched}
            name="professional_data.agency"
            type="number"
            placeHolder="Agência"
            required
          />
          <InputMasked
            value={values.professional_data?.account_number}
            onChange={handleChange("professional_data.account_number")}
            mask={[
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
            ]}
            label="Número da conta"
            width="100%"
            widthContainer="60%"
            error={errors?.professional_data?.account_number}
            touched={touched?.professional_data?.account_number}
            handleBlur={setFieldTouched}
            name="professional_data.account_number"
            type="number"
            placeHolder="Número da conta"
            required
          />
        </ContainerRow>

        {/* Dados do Pix */}

        <ContainerRow>
          <InputSelect
            textColor={values?.professional_data?.type_of_transfer}
            value={values?.professional_data?.type_of_transfer}
            onChange={handleChange("professional_data.type_of_transfer")}
            options={optionsTypeOfTranfer}
            placeholder="Tipo de tranferência"
            error={errors?.professional_data?.type_of_transfer}
            touched={touched?.professional_data?.type_of_transfer}
            width="35%"
            lineWidth="100%"
            name="professional_data.type_of_transfer"
            label="Tipo de tranferência"
            required
          />
          <InputSelect
            textColor={values?.professional_data?.pix_key_type}
            value={values?.professional_data?.pix_key_type}
            onChange={handleChange("professional_data.pix_key_type")}
            options={optionsPixKeyType}
            error={errors?.professional_data?.pix_key_type}
            touched={touched?.professional_data?.pix_key_type}
            placeholder="Tipo de chave PIX"
            width="35%"
            lineWidth="100%"
            name="professional_data.pix_key_type"
            disabled={isDisabled}
            label={
              values.professional_data?.type_of_transfer == "PIX"
                ? "Tipo de chave PIX"
                : ""
            }
            required={
              values.professional_data?.type_of_transfer == "PIX" ? "*" : ""
            }
          />
          {values.professional_data?.pix_key_type === "E-mail" ||
          values.professional_data?.pix_key_type === "RandomKey" ? (
            <InputText
              name="professional_data.pix_key "
              error={errors?.professional_data?.pix_key}
              touched={touched?.professional_data?.pix_key}
              handleBlur={setFieldTouched}
              onChange={handleChange("professional_data.pix_key")}
              width="100%"
              widthLine="100%"
              type="text"
              value={values?.professional_data?.pix_key}
              disabled={isDisabled}
              placeholder="Chave PIX"
              label={
                values.professional_data?.type_of_transfer == "PIX"
                  ? "Chave PIX"
                  : ""
              }
              required={
                values.professional_data?.type_of_transfer == "PIX" ? "*" : ""
              }
            />
          ) : (
            <InputMasked
              name="professional_data.pix_key "
              mask={masks}
              error={errors?.professional_data?.pix_key}
              touched={touched?.professional_data?.pix_key}
              handleBlur={setFieldTouched}
              onChange={handleChange("professional_data.pix_key")}
              width="100%"
              widthContainer="100%"
              value={values.professional_data?.pix_key}
              disabled={isDisabled}
              placeHolder="Chave PIX"
              label={
                values.professional_data?.type_of_transfer == "PIX"
                  ? "Chave PIX"
                  : ""
              }
              required={
                values.professional_data?.type_of_transfer == "PIX" ? "*" : ""
              }
            />
          )}
        </ContainerRow>
      </RegisterProfessionalsForm>
    </ContainerRegisterProfessionalsData>
  );
};

export default RegisterProfessionalsData;
