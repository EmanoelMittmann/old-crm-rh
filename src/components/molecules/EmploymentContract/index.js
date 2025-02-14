import createNumberMask from "text-mask-addons/dist/createNumberMask";
import React, { useCallback, useEffect, useState } from "react";
import SecondaryText from "../../atoms/SecondaryText/style.js";
import InputMasked from "../../atoms/InputMasked";
import InputSelect from "../../atoms/InputSelect/index.js";
import InputWithLabel from "../../atoms/InputWithLabel";
import { LabelInputRadio } from "../../atoms/InputRadio/style.js";
import { InputRadio } from "../../atoms/InputRadio/style.js";
import {
  ContainerEmploymentContract,
  EmploymentContractInputs,
  ContainerCommission,
  Commissioncontract,
  FullcCommissionAllowance,
  CommissionApproval,
} from "./style";
import { typeOptions } from "../../pages/RegisterProfessional/optionsType";

const EmploymentContract = ({ data, jobs, optionsCompany_id }) => {
  const fixedSalaryAmount = createNumberMask({
    prefix: "R$",
    suffix: ",00",
    thousandsSeparatorSymbol: ".",
  });

  const {
    values,
    handleChange,
    setFieldValue,
    errors,
    touched,
    setFieldTouched,
  } = data;
  const [componentJustRenderedCommission, setComponentJustRenderedComission] =
    useState(false);

  useEffect(() => {
    setComponentJustRenderedComission(true);
  }, []);

  const limitAllowed = {
    ...(componentJustRenderedCommission &&
      values.commission === true && { checked: true }),
  };

  const limitNotAllowed = {
    ...(componentJustRenderedCommission &&
      (values === undefined || values.commission === false) && {
        checked: true,
      }),
  };

  function handleType(e) {
    if (e.target.value === "FULLTIME") {
      setFieldValue("job_type", e.target.value);
      setFieldValue("weekly_hours", 40);
      setFieldValue("mounth_hours", 160);
    }
    if (e.target.value === "PARTTIME") {
      setFieldValue("job_type", e.target.value);
      setFieldValue("weekly_hours", 20);
      setFieldValue("mounth_hours", 80);
    }
    if (e.target.value === "FREELANCER") {
      setFieldValue("job_type", e.target.value);
      setFieldValue("weekly_hours", 0);
      setFieldValue("mounth_hours", 0);
    }
    return true;
  }

  const findCompanyPayment = useCallback(() => {
    return optionsCompany_id.filter(item => values.companies.find(v => v === item.id))
  },[values.companies])

  useEffect(() => {
    findCompanyPayment()
  },[findCompanyPayment])

  useEffect(() => {
    const findIdCompany = values.companies.find(item => item === Number(values.company_id))
    if(!values.companies.length || !findIdCompany){
      setFieldValue('company_id','')
    }
  },[values.companies])  

  return (
    <ContainerEmploymentContract>
      <SecondaryText margin="0 0 2.5em 0">Contrato de trabalho</SecondaryText>
      <EmploymentContractInputs>
        <InputWithLabel
          onChange={handleChange("start_date")}
          type="date"
          label="Data Início"
          padding="0 2em 0 0"
          value={values.start_date}
          width="100%"
          widthContainer="80%"
          error={errors.start_date}
          touched={touched.start_date}
          handleBlur={setFieldTouched}
          name="start_date"
          placeholder="Data de Início"
          required
        />
        <InputSelect
          textColor={values.job_}
          onChange={handleChange("job_id")}
          value={values.job_id}
          options={jobs}
          label="Cargo"
          error={errors?.job_id}
          touched={touched?.job_id}
          placeholder="Cargo"
          width="100%"
          lineWidth="100%"
          required
        />
      </EmploymentContractInputs>
      <EmploymentContractInputs>
        <InputSelect
          textColor={values.job_type}
          onChange={handleType}
          placeholder="Tipo de contrato"
          width="40%"
          error={errors?.job_type}
          touched={touched?.job_type}
          options={typeOptions}
          value={values.job_type}
          padding="0em 0 0 1em"
          lineWidth="100%"
          label="Tipo de contrato"
          required
        />
        <InputWithLabel
          onChange={handleChange("weekly_hours")}
          value={values.weekly_hours}
          widthContainer="35%"
          width="100%"
          label="Horas/semana"
          type="number"
          error={errors.weekly_hours}
          touched={touched.weekly_hours}
          handleBlur={setFieldTouched}
          name="weekly_hours"
          padding="0em 0 0 1em"
          placeholder="Horas/semana"
          required
        />
        <InputWithLabel
          onChange={handleChange("mounth_hours")}
          value={values.mounth_hours}
          width="100%"
          label="Horas/mês"
          type="number"
          error={errors.mounth_hours}
          touched={touched.mounth_hours}
          handleBlur={setFieldTouched}
          name="mounth_hours"
          widthContainer="35%"
          padding="0em 0 0 1em"
          placeholder="Horas/mês"
          required
        />
        <InputMasked
          mask={fixedSalaryAmount}
          label="Honorário fixo"
          id="fixed_payment_value"
          name="fixed_payment_value"
          value={values.fixed_payment_value}
          onChange={handleChange("fixed_payment_value")}
          error={errors.fixed_payment_value}
          touched={touched.fixed_payment_value}
          width="100%"
          padding="0em 0 0 1em"
          widthContainer="35%"
          handleBlur={setFieldTouched}
          placeHolder="Honorário fixo"
          required
        />
      </EmploymentContractInputs>
      <EmploymentContractInputs>
        <InputSelect
        width="27%" 
        lineWidth="100%"
        name="company_id"
        placeholder="Empresa Pagadora"
        value={values.company_id}
        options={findCompanyPayment()}
        onChange={handleChange('company_id')}
        error={errors.company_id}
        touched={touched.company_id}
        textColor={values.company_id}
        label="Empresa Pagadora"
        disabled={!values.companies.length}
        required
        />
      </EmploymentContractInputs>

      <Commissioncontract>Comissão</Commissioncontract>
      <FullcCommissionAllowance
        onChange={(e) => {
          e.target.value === "limitComission"
            ? setFieldValue("commission", true)
            : setFieldValue("commission", false);
          setComponentJustRenderedComission(false);
        }}
      >
        <CommissionApproval>
          <ContainerCommission>
            <InputRadio
              {...limitAllowed}
              type="radio"
              name="commission"
              value="limitComission"
              id="limitComission"
            />
            <LabelInputRadio for="limitComission"> Sim </LabelInputRadio>
          </ContainerCommission>

          <ContainerCommission>
            <InputRadio
              {...limitNotAllowed}
              margin="0 0 0 3em"
              type="radio"
              name="commission"
              value="nolimitComission"
              id="nolimitComission"
            />
            <LabelInputRadio for="nolimitComission"> Não </LabelInputRadio>
          </ContainerCommission>
        </CommissionApproval>
      </FullcCommissionAllowance>
    </ContainerEmploymentContract>
  );
};

export default EmploymentContract;
