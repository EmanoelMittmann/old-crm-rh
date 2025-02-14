import React from 'react'
import InputDate from '../../atoms/InputDate'
import InputSelect from '../../atoms/InputSelect'
import InputWithLabel from '../../atoms/InputWithLabel'
import { Column, Main } from './style'

export function OvertimeByDate({ data, options }) {

  const { handleChange, values, errors, touched, setFieldTouched } = data
  
  return (
    <Main>
      <Column>
        <InputDate
          width="30%"
          placeholder="Data da hora extra"
          padding="0 1em 0 0"
          name="launch_date"
          date={values.launch_date}
          onChange={handleChange('launch_date')}
          error={errors.launch_date}
          touched={touched.launch_date}
          handleBlur={setFieldTouched}
        />
        <InputSelect
          value={values.project_id}
          onChange={handleChange('project_id')}
          options={options}
          placeholder="Projeto"
          lineWidth="100%"
          width="40%"
        />
        <InputWithLabel
            name="hour_quantity"
            value={values.hour_quantity}
            onChange={handleChange('hour_quantity')}
            label="Quantidade de horas"
          placeholder="Informe a quantidade horas"
            widthContainer="30%"
            padding="0 0 0 1em"
            type="number"
            handleBlur={setFieldTouched}
            error={errors.hour_quantity}
            touched={touched.hour_quantity}
        />
      </Column>
      <Column>
        <InputWithLabel
            name="justification"
            value={values.justification}
            onChange={handleChange('justification')}
            label="Justificativa"
            placeholder="Justifique aqui o motivo das horas extras"
            widthContainer="100%"
            padding="2em 0"
            handleBlur={setFieldTouched}
            error={errors.justification}
            touched={touched.justification}
        />
      </Column>
    </Main>
  )
}
