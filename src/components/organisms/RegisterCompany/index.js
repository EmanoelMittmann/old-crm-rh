import React, { useState } from "react";
import {
  ContainerRegisterCompanyData,
  RegisterCompanyForm,
  ContainerInputRadio,
  Matriz,
  Container,
  ContainerRadios,
  Typecompany,
  ContainerTypecompany,
  ContainerRadiosCompany,
} from "./style";
import { BorderTop, ContainerRow } from "../RegisterProfessionalsData/style";
import InputWithLabel from "../../atoms/InputWithLabel/index";
import InputMasked from "../../atoms/InputMasked/index";
import SecondaryText from "../../atoms/SecondaryText/style";
import { InputRadio, LabelInputRadio } from "../../atoms/InputRadio/style";
import InputSelect from "../../atoms/InputSelect";
import { optionsPorte } from "./Porte";
import { useEffect } from "react";
import InputSearchCnae from "../../atoms/InputSearchCnae";
import InputSearchCnaeSecundary from "../../atoms/InputSearchCnaeSecundary";
import InputNature from "../../atoms/inputCnj";

const RegisterCompany = ({ data, disabled }) => {
  const {
    values,
    handleChange,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
  } = data;
  const [componentJustRenderedCommission, setComponentJustRenderedComission] =
    useState(false);
  const [typeCompany, setTypeCompany] = useState("");

  useEffect(() => {
    setComponentJustRenderedComission(true);
    handleTypeCompany();
  }, [typeCompany]);

  const allowMatriz = {
    ...(componentJustRenderedCommission &&
      values.is_matriz === true && { checked: true }),
  };

  const noAllowMatriz = {
    ...(componentJustRenderedCommission &&
      (values === undefined || values.is_matriz === false) && {
        checked: true,
      }),
  };
  
  function handleTypeCompany(e) {
    setFieldValue("type_company", typeCompany);
  }
  return (
    <ContainerRegisterCompanyData>
     
      <SecondaryText margin="0 0 2.5em 0">Dados da empresa</SecondaryText>
      <ContainerTypecompany>
        <Typecompany>
          <Matriz>Tipo de Empresa</Matriz>
          <ContainerRadiosCompany>
            <InputRadio
              type="radio"
              disabled={disabled}
              name="typeCompany"
              value="UBISTART"
              id="UBISTART"
              checked={values.type_company === "UBISTART"}
              onChange={(e) => setTypeCompany(e.target.value)}
            />
            <LabelInputRadio for="typeCompany"> Ubistart </LabelInputRadio>
          </ContainerRadiosCompany>
          <ContainerRadiosCompany>
            <InputRadio
              type="radio"
              disabled={disabled}
              name="typeCompany"
              value="CLIENT"
              id="CLIENT"
              checked={values.type_company === "CLIENT"}
              onChange={(e) => setTypeCompany(e.target.value)}
            />
            <LabelInputRadio for="typeCompany"> Cliente </LabelInputRadio>
          </ContainerRadiosCompany>
          <ContainerRadiosCompany style={{marginBottom:"2em"}}>
            <InputRadio
              type="radio"
              disabled={disabled}
              name="typeCompany"
              value="SUPPLIER"
              id="SUPPLIER"
              checked={values.type_company === "SUPPLIER"}
              onChange={(e) => setTypeCompany(e.target.value)}
            />
            <LabelInputRadio for="typeCompany"> Fornecedor </LabelInputRadio>
          </ContainerRadiosCompany>
        </Typecompany>
      </ContainerTypecompany>
      <RegisterCompanyForm>
        <ContainerRow>
          <InputMasked
            value={values.cnpj}
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
            onChange={handleChange("cnpj")}
            error={errors.cnpj}
            touched={touched.cnpj}
            padding="0 3em 0 0"
            width="100%"
            widthContainer="60%"
            handleBlur={setFieldTouched}
            name="cnpj"
            disabled={disabled}
            placeHolder="CNPJ"
            required
          />
          <ContainerInputRadio>
            <Matriz>Empresa Matriz?</Matriz>
            <ContainerRadios>
              <Container
                onChange={(e) => {
                  e.target.value === "is_matriz"
                    ? setFieldValue("is_matriz", true)
                    : setFieldValue("is_matriz", false);
                  setComponentJustRenderedComission(false);
                }}
              >
                <InputRadio
                  {...allowMatriz}
                  type="radio"
                  disabled={disabled}
                  name="commission"
                  value="is_matriz"
                  id="is_matriz"
                />
                <LabelInputRadio for="is_matriz"> Sim </LabelInputRadio>

                <InputRadio
                  {...noAllowMatriz}
                  margin="0em 0em 0em 3em"
                  type="radio"
                  name="commission"
                  disabled={disabled}
                  value="is_matriz"
                  id="is_matriz"
                />
                <LabelInputRadio for="is_matriz"> Não </LabelInputRadio>
              </Container>
            </ContainerRadios>
          </ContainerInputRadio>
          <InputWithLabel
            value={values.opening_date}
            onChange={handleChange("opening_date")}
            error={errors.opening_date}
            touched={touched.opening_date}
            type={"date"}
            label="Data de Abertura"
            width="100%"
            disabled={disabled}
            widthContainer="70%"
            handleBlur={setFieldTouched}
            placeholder="Data da Abertura"
            required
          />
        </ContainerRow>
        <ContainerRow>
          <InputWithLabel
            value={values.state_registration}
            onChange={handleChange("state_registration")}
            error={errors.state_registration}
            touched={touched.state_registration}
            label="Inscrição Estadual"
            name="Inscrição Estadual"
            type="text"
            width="95%"
            disabled={disabled}
            widthContainer="50%"
            handleBlur={setFieldTouched}
            placeholder="Inscrição Estadual"
          />
          <InputWithLabel
            value={values.municipal_registration}
            onChange={handleChange("municipal_registration")}
            error={errors.municipal_registration}
            touched={touched.municipal_registration}
            label="Inscrição Municipal"
            name="Inscrição Municipal"
            type="text"
            disabled={disabled}
            width="95%"
            handleBlur={setFieldTouched}
            widthContainer="50%"
            placeholder="Inscrição Municipal"
          />
          <InputSelect
            textColor={values.size}
            value={values.size}
            label="Porte da Empresa"
            onChange={handleChange("size")}
            error={errors.size}
            touched={touched.size}
            options={optionsPorte}
            placeHolder="Porte"
            disabled={disabled}
            handleBlur={setFieldTouched}
            width="100%"
            widthContainer="50%"
            required
          />
        </ContainerRow>
        <ContainerRow>
          <InputWithLabel
            value={values.fantasy_name}
            padding="0 1em 0 0"
            onChange={handleChange("fantasy_name")}
            error={errors.fantasy_name}
            disabled={disabled}
            touched={touched.fantasy_name}
            label="Nome Fantasia"
            width="95%"
            handleBlur={setFieldTouched}
            widthContainer="20%"
            placeholder="Noma fantasia"
            required
          />
          <InputWithLabel
            value={values.razao_social}
            onChange={handleChange("razao_social")}
            error={errors.razao_social}
            touched={touched.razao_social}
            label="Razão Social"
            disabled={disabled}
            width="100%"
            handleBlur={setFieldTouched}
            widthContainer="80%"
            placeholder="Informe a Razão Social da Empresa"
            required
          />
        </ContainerRow>
        <ContainerRow>
          <InputSearchCnae
            label="Atividade Economica Principal"
            placeholder={"Codigo e descrição de Atividade Economica Principal"}
            value={values.main_cnae}
            handleBlur={setFieldTouched}
            error={errors.main_cnae}
            disabled={disabled}
            touched={touched.main_cnae}
            setFieldValue={setFieldValue}
            width="100%"
            values={values}
            required
          />
        </ContainerRow>
        <ContainerRow>
          <InputSearchCnaeSecundary
            placeholder={"Codigo e descrição de Atividade Economica Secundaria"}
            label="Atividade Economica Secundaria"
            value={values.secondary_cnae}
            handleBlur={setFieldTouched}
            error={errors.secondary_cnae}
            disabled={disabled}
            touched={touched.secondary_cnae}
            setFieldValue={setFieldValue}
            width="100%"
            values={values}
            required
          />
        </ContainerRow>
        <ContainerRow>
          <InputNature
            onChange={handleChange("code_and_description_of_the_legal_status")}
            value={values.code_and_description_of_the_legal_status}
            placeholder="Código de Descrição da Natureza Jurídica"
            error={errors.code_and_description_of_the_legal_status}
            touched={touched.code_and_description_of_the_legal_status}
            inputWidth="50%"
            disabled={disabled}
            label="Natureza Jurídica"
            setFieldValue={setFieldValue}
            values={values}
            required
          />
        </ContainerRow>
      </RegisterCompanyForm>
    </ContainerRegisterCompanyData>
  );
};

export default RegisterCompany;
