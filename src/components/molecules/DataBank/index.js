import React from 'react'
import InputMasked from '../../atoms/InputMasked'
import { ContainerRow } from '../../organisms/RegisterProfessionalsData/style'
import SelectBank from '../../atoms/SelectBank'
import { optionsBank } from '../../organisms/RegisterProfessionalsData'
import InputSelect from '../../atoms/InputSelect'
import { ContainerRegisterCompanyData } from '../../organisms/RegisterCompany/style'
import SecondaryText from '../../atoms/SecondaryText/style'

const DataBank = ({data}) => {
    
    const {values, handleChange, touched, setFieldTouched,setFieldValue ,errors} = data
  
  return (
    <ContainerRegisterCompanyData>
        <SecondaryText margin='2.5em 0 '>Dados bancarios</SecondaryText>

        <ContainerRow>
          <SelectBank
            value={values.bank}
            padding="0em 2em 0em 1em"
            error={errors?.bank}
            touched={touched?.bank}
            label="Banco"
            width="47em"
            setFieldValue={setFieldValue}
            lineWidth="44.6%"
            translate={"translate(0,3em)"}
            name="bank"
            required
          />
          <InputSelect
            value={values.account_type}
            label="Tipo da conta"
            onChange={handleChange("account_type")}
            options={optionsBank}
            error={errors?.bank}
            touched={touched?.bank}
            placeHolder="Tipo da conta"
            padding="0em 2em 0 0em"
            width="100%"
            lineWidth="30em"
            name="account_type"
            required
          />
        </ContainerRow>
      <ContainerRow>
        <InputMasked
          value={values.agency}
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
          required
        />
        <InputMasked
          value={values.account_number}
          onChange={handleChange("account_number")}
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,'-',/\d/]}
          label="Número da conta"
          width="100%"
          widthContainer="60%"
          error={errors?.account_number}
          touched={touched?.account_number}
          handleBlur={setFieldTouched}
          name="account_number"
          placeHolder="Número da conta"
          type="number"
          required
        />
      </ContainerRow>
    </ContainerRegisterCompanyData>
  )
}

export default DataBank