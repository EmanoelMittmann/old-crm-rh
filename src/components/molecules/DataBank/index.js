import React from "react";
import InputMasked from "../../atoms/InputMasked";
import { ContainerRow } from "../../organisms/RegisterProfessionalsData/style";
import SelectBank from "../../atoms/SelectBank";
import { optionsBank } from "../../organisms/RegisterProfessionalsData";
import InputSelect from "../../atoms/InputSelect";
import { ContainerRegisterCompanyData } from "../../organisms/RegisterCompany/style";
import SecondaryText from "../../atoms/SecondaryText/style";

const DataBank = ({ data }) => {
  const {
    values,
    handleChange,
    touched,
    setFieldTouched,
    setFieldValue,
    errors,
  } = data;

  return (
    <ContainerRegisterCompanyData>
      <SecondaryText margin="2.5em 0 ">Dados bancarios</SecondaryText>

      <ContainerRow>
        <SelectBank
          value={values?.bank}
          onChange={handleChange("bank")}
          padding="0em 1.5em 0 1.5em"
          placeHolder="Banco"
          error={errors?.bank}
          touched={touched?.bank}
          label="Banco"
          width="50%"
          listWidth='30.2%'
          lineWidth="100%"
          setFieldValue={setFieldValue}
          translate={"translate(0,3em)"}
          name="bank"
        />
        <InputSelect
          textColor={values?.account_type}
          value={values.account_type}
          label="Tipo da conta"
          onChange={handleChange("account_type")}
          options={optionsBank}
          error={errors?.bank}
          touched={touched?.bank}
          placeholder="Tipo da conta"
          padding="0em 2.5em 0 0em"
          width="70%"
          lineWidth="100%"
          name="account_type"
        />
      </ContainerRow>
      <ContainerRow>
        <InputMasked
          value={values?.agency}
          placeHolder="Agência"
          padding="0 2em 0 0"
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
          onChange={handleChange("agency")}
          label="Agência"
          width="100%"
          widthContainer="40%"
          error={errors?.agency}
          touched={touched?.agency}
          handleBlur={setFieldTouched}
          name="agency"
          type="number"
        />
        <InputMasked
          value={values?.account_number}
          onChange={handleChange("account_number")}
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
          error={errors?.account_number}
          touched={touched?.account_number}
          handleBlur={setFieldTouched}
          name="account_number"
          placeHolder="Número da conta"
          type="number"
        />
      </ContainerRow>
    </ContainerRegisterCompanyData>
  );
};

export default DataBank;
