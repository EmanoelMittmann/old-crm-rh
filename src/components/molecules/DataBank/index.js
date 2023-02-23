import React from 'react'
import InputMasked from '../../atoms/InputMasked'
import { ContainerRow } from '../../organisms/RegisterProfessionalsData/style'
import SelectBank from '../../atoms/SelectBank'
import { optionsBank } from '../../organisms/RegisterProfessionalsData'
import InputSelect from '../../atoms/InputSelect'
import { ContainerRegisterCompanyData } from '../../organisms/RegisterCompany/style'
import SecondaryText from '../../atoms/SecondaryText/style'

const DataBank = ({data}) => {
    
    const {values, handleChange, touched, setFieldTouched, errors} = data
  
  return (
    <ContainerRegisterCompanyData>
        <SecondaryText margin='2.5em'>Dados bancarios</SecondaryText>
        <ContainerRow>
          <InputMasked
            value={values.agency}
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
            value={values.account_number}
            onChange={handleChange("account_number")}
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
            label="Número da conta"
            width="100%"
            widthContainer="60%"
            error={errors?.account_number}
            touched={touched?.account_number}
            handleBlur={setFieldTouched}
            name="account_number"
            type="number"
          />
        </ContainerRow>
        <ContainerRow>
          <SelectBank
            value={values.bank}
            onChange={handleChange("bank")}
            padding="0em 2em 0 0em"
            placeHolder={"Banco"}
            error={errors?.bank}
            touched={touched?.bank}
            label="Banco"
            width="100%"
            lineWidth="98%"
            name="bank"
          />
          <InputSelect
            value={values.account_type}
            onChange={handleChange("account_type")}
            options={optionsBank}
            placeHolder="Tipo da conta"
            padding="0em 2em 0 0em"
            width="100%"
            lineWidth="30em"
            name="account_type"
          />
        </ContainerRow>
    </ContainerRegisterCompanyData>
  )
}

export default DataBank