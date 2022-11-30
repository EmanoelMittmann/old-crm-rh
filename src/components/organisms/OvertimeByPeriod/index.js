import React from 'react'
import InputDate from '../../atoms/InputDate'
import InputSelect from '../../atoms/InputSelect'
import InputWithLabel from '../../atoms/InputWithLabel'
import { Column, Main } from './style'

export function OvertimeByPeriod({ data, options }) {

  const { handleChange, values, errors, touched, setFieldTouched } = data

  return (
    <Main>
      <Column>
        <InputDate
          placeholder="Data inicial"
          width="25%"
          date={values.launch_date}
          onChange={handleChange('launch_date')}
          error={errors.launch_date}
          touched={touched.launch_date}
          handleBlur={setFieldTouched}
        />
        <InputDate
          placeholder="Data final"
          width="25%"
          date={values.end_date}
          onChange={handleChange('end_date')}
          error={errors.end_date}
          touched={touched.end_date}
          handleBlur={setFieldTouched}
        />
        <InputSelect
          value={values.project_id}
          onChange={handleChange('project_id')}
          options={options}
          placeHolder="Projeto"
          lineWidth="25%"
        />
        <InputWithLabel
          name="hour_quantity"
          value={values.hour_quantity}
          onChange={handleChange('hour_quantity')}
          label="Quantidade de horas"
          widthContainer="25%"
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
