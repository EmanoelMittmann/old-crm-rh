import { useState, useEffect } from 'react'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputMasked from '../../atoms/InputMasked'
import InputSelect from '../../atoms/InputSelect/index.js'
import InputWithLabel from '../../atoms/InputWithLabel'
import { LabelInputRadio } from '../../atoms/InputRadio/style.js'
import { InputRadio } from '../../atoms/InputRadio/style.js'
import { ContainerEmploymentContract, EmploymentContractInputs, ContainerCommission, Commissioncontract, FullcCommissionAllowance, CommissionApproval } from './style'

import { typeOptions } from '../../pages/RegisterProfessional/optionsType'

const EmploymentContract = ({ data, jobs, occupations }) => {

    const fixedSalaryAmount = createNumberMask({
        prefix: 'R$',
        suffix: ',00',
        thousandsSeparatorSymbol: '.'
    })

    const { values, handleChange, setFieldValue, errors, touched, setFieldTouched } = data


    const [componentJustRenderedCommission, setComponentJustRenderedComission] = useState(false);

    useEffect(() => {
        setComponentJustRenderedComission(true)
    }, [])



    const limitAllowed = {
        ...(componentJustRenderedCommission && values.commission === 1 && { checked: true })
    }

    const limitNotAllowed = {
        ...(componentJustRenderedCommission && (values === undefined || values.commission === 0) && { checked: true })
    }


    function handleType(e) {
        if (e.target.value === "FULLTIME") {
            setFieldValue('job_type', e.target.value)
            setFieldValue('weekly_hours', 40)
            setFieldValue('mounth_hours', 160)
        }
        if (e.target.value === "PARTTIME") {
            setFieldValue('job_type', e.target.value)
            setFieldValue('weekly_hours', 20)
            setFieldValue('mounth_hours', 80)
        }
        if (e.target.value === "FREELANCER") {
            setFieldValue('job_type', e.target.value)
            setFieldValue('weekly_hours', 0)
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

            <Commissioncontract>Comissão</Commissioncontract>
            <FullcCommissionAllowance onChange={(e) => {
                e.target.value === 'limitComission' ? setFieldValue('commission', 1) : setFieldValue('commission', 0)
                setComponentJustRenderedComission(false)
            }}>
                <CommissionApproval>
                    <ContainerCommission>
                        <InputRadio
                            {...limitAllowed}
                            type="radio"
                            name="Commission"
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
                            name="Commission"
                            value="nolimitComission"
                            id="nolimitComission"
                        />
                        <LabelInputRadio for="nolimitComission"> Não </LabelInputRadio>
                    </ContainerCommission>
                </CommissionApproval>
            </FullcCommissionAllowance>
        </ContainerEmploymentContract>
    )
}

export default EmploymentContract