import React from 'react'
import {
  ContainerRegisterCompanySituation,
    RegisterCompanyForm, ContainerInputRadio,
    Matriz,
    Container,
    ContainerRadios
  } from '../RegisterCompany/style'
import InputSelect from '../../atoms/InputSelect'
import InputDate from '../../atoms/InputDate'
import InputWithLabel from '../../atoms/InputWithLabel'
import { ContainerRow } from '../RegisterCompany/style'
import { optionsRegistions } from '../RegisterCompany/status'

export const SituationCadastion = ({data}) => {
  const { values, handleChange, errors, touched, setFieldTouched } = data
  return(
    <ContainerRegisterCompanySituation>
        <RegisterCompanyForm>
        <ContainerRow>
          <InputSelect
            value={values.registration_status}
            onChange={handleChange('registration_status')}
            error={errors.registration_status}
            touched={touched.registration_status}
            options={optionsRegistions}
            placeHolder="Situação Cadastral"
            name="Situação Cadastral"
            handleBlur={setFieldTouched}
            width="270px"
          />
          <InputWithLabel
            value={values.date_of_registration_status}
            onChange={handleChange('date_of_registration_status')}
            error={errors.date_of_registration_status}
            touched={touched.date_of_registration_status}
            name="Data da Situação Cadastral"
            label="Data da Situação Cadastral"
            type='date'
            width="100%"
            widthContainer="35%"
            handleBlur={setFieldTouched}
          />

          <InputWithLabel
            value={values.reason_for_registration_status}
            label="Motivo da situação cadastral"
            onChange={handleChange('reason_for_registration_status')}
            error={errors.reason_for_registration_status}
            touched={touched.reason_for_registration_status}
            width="100%"
            widthContainer="35%"
            handleBlur={setFieldTouched}
            name="reason_for_registration_status"
          />
        </ContainerRow>
        <ContainerRow>
          <InputWithLabel
            value={values.responsible_federative_entity}
            label="Ente Federativo Responsável (EFR)"
            onChange={handleChange('responsible_federative_entity')}
            error={errors.responsible_federative_entity}
            touched={touched.responsible_federative_entity}
            width="100%"
            widthContainer="100%"
            handleBlur={setFieldTouched}
            name="responsible_federative_entity"
          />
        </ContainerRow>
        <ContainerRow>
          <InputWithLabel
            value={values.special_situation}
            label="Situação especial"
            onChange={handleChange('special_situation')}
            error={errors.special_situation}
            touched={touched.special_situation}
            width="95%"
            widthContainer="90%"
            handleBlur={setFieldTouched}
            name="special_situation"
          />
          <InputDate
            value={values.date_of_special_situation}
            onChange={handleChange('date_of_special_situation')}
            error={errors.date_of_registration_status}
            touched={touched.date_of_special_situation}
            placeholder="Data da Situação Especial"
            width="40%"
            widthContainer="30%"
            handleBlur={setFieldTouched}
          />
          </ContainerRow>
        </RegisterCompanyForm>
    </ContainerRegisterCompanySituation>
  )
}
