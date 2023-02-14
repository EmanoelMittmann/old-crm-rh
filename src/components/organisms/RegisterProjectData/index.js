import React, { useRef } from 'react'
import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputWithLabel from '../../atoms/InputWithLabel'
import InputSelect from '../../atoms/InputSelect'
import InputMasked from '../../atoms/InputMasked'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import {
    RegisterProjectForm,
    ContainerSecondRow,
    ContainerFirstRow,
    ContainerSecond,
} from './style.js'
import { Container } from '../../atoms/Container/index.js'
import { formatDate } from '../../utils/formatDate.js'

const RegisterProjectData = ({ data, typeOptions,statusOptions }) => {
    const { values, handleChange, errors, touched, setFieldTouched, setFieldValue } = data
    const inputRef = useRef(null)

    const team_cost_mask = createNumberMask({
        prefix: 'R$',
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
        decimalLimit: 2
    })

    return (
        <>
            <SecondaryText margin="0 0 2.5em 0">Dados do projeto</SecondaryText>
            <RegisterProjectForm>
                <ContainerFirstRow>
                    <ContainerSecondRow>
                    <InputWithLabel
                        placeHolder="Projeto..."
                        label="Nome do projeto"
                        value={values.name}
                        onChange={handleChange('name')}
                        name="name"
                        width='100%'
                        widthContainer="100%"
                        error={errors.name}
                        touched={touched.name}
                        handleBlur={setFieldTouched}
                    />
                    </ContainerSecondRow>
                    <ContainerSecondRow>
                    <InputWithLabel
                        placeHolder="ID do projeto"
                        label="ID do projeto"
                        value={values.id}
                        onChange={handleChange('id')}
                        name="idProject"
                        width='100%'
                        widthContainer="100%"
                        error={errors.id}
                        touched={touched.id}
                        handleBlur={setFieldTouched}
                    />
                    <InputSelect
                        value={values.project_type_id}
                        onChange={handleChange('project_type_id')}
                        options={typeOptions}
                        placeHolder="Tipo de projeto"
                        error={errors.project_type_id}
                        touched={touched.project_type_id}
                        width="100%"
                        lineWidth="20em"
                        label="Tipo de Projeto"
                        handleBlur={setFieldTouched}
                    />
                    </ContainerSecondRow>
                </ContainerFirstRow>
                <ContainerFirstRow>
                    <ContainerSecondRow>
                    <InputWithLabel
                        type="date"
                        onChange={handleChange('date_start')}
                        placeHolder="Data início Efetivo"
                        label="Data início Efetivo"
                        value={values.date_start}
                        error={errors.date_start}
                        touched={touched.date_start}
                        handleBlur={setFieldTouched}
                        name="date_start"
                        width="100%"
                        widthContainer="100%"
                    />
                    <InputWithLabel
                        onChange={handleChange('date_end')}
                        placeholder="Data final Efetivo"
                        label="Data final Efetivo"
                        value={values.date_end}
                        type="date"
                        error={errors.date_end}
                        touched={touched.date_end}
                        handleBlur={setFieldTouched}
                        name="date_end"
                        width="100%"
                        widthContainer="100%"
                    />
                    </ContainerSecondRow>
                    <ContainerSecondRow>
                    <InputSelect
                        value={values.project_status_id}
                        onChange={handleChange('project_status_id')}
                        options={statusOptions}
                        placeHolder="Status do projeto"
                        error={errors.project_status_id}
                        touched={touched.project_status_id}
                        width="100%"
                        lineWidth="21em"
                        handleBlur={setFieldTouched}
                        />
                    <InputMasked
                        mask={team_cost_mask}
                        label="R$ Custo estimado"
                        id="team_cost"
                        name="team_cost"
                        width="100%"
                        widthContainer="100%"
                        value={values.team_cost + 0}
                        onChange={handleChange('team_cost')}
                        error={errors.team_cost}
                        touched={touched.team_cost}
                        handleBlur={setFieldTouched}
                        />
                    </ContainerSecondRow>
                </ContainerFirstRow>
                <ContainerFirstRow>
                <ContainerSecond>
                    <InputWithLabel
                        type="date"
                        onChange={handleChange('date_start_performed')}
                        placeholder="Data Iníco do contrato"
                        label="Data Iníco do contrato"
                        name="date_start_performed"
                        width="100%"
                        widthContainer="100%"
                        value={values.date_start_performed}
                        error={errors.date_start_performed}
                        touched={touched.date_start_performed}
                        handleBlur={setFieldTouched}
                    />
                        <InputWithLabel
                        type="date"
                        onChange={handleChange('date_end_performed')}
                        placeholder= "Data Término do contrato"
                        label="Data Término do contrato"
                        name="date_end_performed"
                        width="100%"
                        widthContainer="100%"
                        value={values.date_end_performed}
                        error={errors.date_end_performed}
                        touched={touched.date_end_performed}
                        handleBlur={setFieldTouched}
                    />
                </ContainerSecond>
                </ContainerFirstRow>
            </RegisterProjectForm>
        </>
    )
}

export default RegisterProjectData