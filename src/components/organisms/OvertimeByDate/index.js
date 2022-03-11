import React from 'react'
import InputSelect from '../../atoms/InputSelect'
import InputWithLabel from '../../atoms/InputWithLabel'
import { Column, Main } from './style'

export function OvertimeByDate({ data, options }) {

  const { handleChange, values, errors, touched, setFieldTouched } = data
  
  return (
    <Main>
      <Column>
        <InputWithLabel
          label="Data"
          width="100%"
          widthContainer="25%"
          padding="0 1em 0 0"
          type="date"
          name="launch_date"
          value={values.launch_date}
          onChange={handleChange('launch_date')}
          error={errors.launch_date}
          touched={touched.launch_date}
          handleBlur={setFieldTouched}
        />
        <InputSelect
          value={values.project_id}
          onChange={handleChange('project_id')}
          options={options}
          placeHolder="Projeto"
          lineWidth="40%"
          width="100%"
        />
        <InputWithLabel
            name="hour_quantity"
            value={values.hour_quantity}
            onChange={handleChange('hour_quantity')}
            label="Quant. horas"
            widthContainer="25%"
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
            widthContainer="90%"
            padding="2em 0"
            handleBlur={setFieldTouched}
            error={errors.justification}
            touched={touched.justification}
        />
      </Column>
    </Main>
  )
}
