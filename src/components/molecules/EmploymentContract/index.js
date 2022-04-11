import React from 'react'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputMasked from '../../atoms/InputMasked'
import InputSelect from '../../atoms/InputSelect/index.js'
import InputWithLabel from '../../atoms/InputWithLabel'
import { ContainerEmploymentContract, EmploymentContractInputs } from './style'

import { typeOptions } from '../../pages/RegisterProfessional/optionsType'

const EmploymentContract = ({ data, jobs, occupations }) => {

    const fixedSalaryAmount = createNumberMask({
        prefix: 'R$',
        suffix: ',00' ,
        thousandsSeparatorSymbol: '.'
    })

    const { values, handleChange, setFieldValue, errors, touched, setFieldTouched} = data
    
    function handleType(e) {
        if(e.target.value === "FULLTIME"){
            setFieldValue('job_type', e.target.value)
            setFieldValue('weekly_hours', 40)
            setFieldValue('mounth_hours', 160)
        }
        if(e.target.value === "PARTTIME"){
            setFieldValue('job_type', e.target.value)
            setFieldValue('weekly_hours',20)
            setFieldValue('mounth_hours', 80)
        }
        if(e.target.value === "FREELANCER"){
            setFieldValue('job_type', e.target.value)
            setFieldValue('weekly_hours',0)
            setFieldValue('mounth_hours', 0)
        }
        return true
    }

    return (
        <ContainerEmploymentContract>
            <SecondaryText margin="0 0 2.5em 0">Contrato de trabalho</SecondaryText>
            <EmploymentContractInputs>
                <InputWithLabel
                    onChange={handleChange('start_date')}
                    type="date"
                    label="Data Início"
                    padding="0 2em 0 0"
                    value={values.start_date}
                    width="100%"
                    widthContainer="40%"
                    error={errors.start_date}
                    touched={touched.start_date}
                    handleBlur={setFieldTouched}
                    name="start_date"
                />
                <InputSelect
                    onChange={handleChange('job_id')}
                    value={values.job_id}
                    options={jobs}
                    placeHolder="Cargo"
                    width="100%"
                    lineWidth="30%"
                    margin="0 2em 0 0"
                />
                <InputSelect
                    onChange={handleChange('occupation_id')}
                    value={values.occupation_id}
                    options={occupations}
                    placeHolder="Função"
                    width="100%"
                    lineWidth="30%"
                />
            </EmploymentContractInputs>
            <EmploymentContractInputs>
                <InputSelect
                    onChange={handleType}
                    placeHolder="Tipo"
                    width="100%"
                    options={typeOptions}
                    value={values.job_type}
                    padding="0em 0 0 1em" 
                    lineWidth="30%"
                />
                <InputWithLabel
                    onChange={handleChange('weekly_hours')}
                    value={values.weekly_hours}
                    widthContainer="20%"
                    label="Horas/semana"
                    type="number"
                    error={errors.weekly_hours}
                    touched={touched.weekly_hours}
                    handleBlur={setFieldTouched}
                    name="weekly_hours"
                    padding="0em 0 0 1em" 
                />
                <InputWithLabel
                    onChange={handleChange('mounth_hours')}
                    value={values.mounth_hours}
                    width="100%"
                    label="Horas/mês"
                    type="number"
                    error={errors.mounth_hours}
                    touched={touched.mounth_hours}
                    handleBlur={setFieldTouched}
                    name="mounth_hours"
                    widthContainer="20%"
                    padding="0em 0 0 1em" 
                />
                <InputMasked
                    mask={fixedSalaryAmount}
                    label="Valor pagamento fixo"
                    id="fixed_payment_value"
                    name="fixed_payment_value"
                    value={values.fixed_payment_value}
                    onChange={handleChange('fixed_payment_value')}
                    error={errors.fixed_payment_value}
                    touched={touched.fixed_payment_value}
                    width="100%"
                    padding="0em 0 0 1em"  
                    widthContainer="30%"
                    handleBlur={setFieldTouched}
                />                
            </EmploymentContractInputs>
        </ContainerEmploymentContract>
    )
}

export default EmploymentContract