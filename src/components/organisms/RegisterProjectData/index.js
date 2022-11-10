import React, { useRef } from 'react'
import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputWithLabel from '../../atoms/InputWithLabel'
import InputSelect from '../../atoms/InputSelect'
import InputMasked from '../../atoms/InputMasked'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import {
    RegisterProjectForm,
    ContainerInputWithLabel,
    ContainerInputProjectStatusSelect,
    ContainerInputProjectTypeSelect,
    ContainerSecondRow,
    ContainerFirstRow,
    ContainerThirdLine,
    ContainerSecond,
    ContainerRegisterProjectData
} from './style.js'
import { useEffect } from 'react'
import InputDate from '../../atoms/InputDate/index.js'
import { Container } from '../../atoms/Container/index.js'

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
        <Container>
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
                        width="100%"
                        lineWidth="100%"
                    />
                    </ContainerSecondRow>
                </ContainerFirstRow>
                <ContainerFirstRow>
                    <ContainerSecondRow>
                    <InputDate
                        onChange={handleChange('date_start')}
                        placeholder="Data início Efetivo"
                        date={values.date_start}
                        type="date"
                        error={errors.date_start}
                        touched={touched.date_start}
                        handleBlur={setFieldTouched}
                        name="date_start"
                        width="100%"
                        widthContainer="50%"
                    />
                    <InputDate
                        onChange={handleChange('date_end')}
                        placeholder="Data final Efetivo"
                        date={values.date_end}
                        type="date"
                        error={errors.date_end}
                        touched={touched.date_end}
                        handleBlur={setFieldTouched}
                        name="date_end"
                        width="100%"
                        widthContainer="50%"
                    />
                    </ContainerSecondRow>
                    <ContainerSecondRow>
                    <InputSelect
                        value={values.project_status_id}
                        onChange={handleChange('project_status_id')}
                        options={statusOptions}
                        placeHolder="Status do projeto"
                        width="100%"
                        lineWidth="100%"
                        />
                    <InputMasked
                        mask={team_cost_mask}
                        label="R$ Custo estimado"
                        id="team_cost"
                        name="team_cost"
                        value={values.team_cost}
                        onChange={handleChange('team_cost')}
                        error={errors.team_cost}
                        touched={touched.team_cost}
                        width="100%"
                        widthContainer="100%"
                        handleBlur={setFieldTouched}
                        />
                    </ContainerSecondRow>
                </ContainerFirstRow>
                <ContainerFirstRow>
                <ContainerSecond>
                    <InputDate
                        onChange={handleChange('date_start_performed')}
                        placeholder="Data Iníco do contrato"
                        date={values.date_start_performed}
                        type="date"
                        error={errors.date_start_performed}
                        touched={touched.date_start_performed}
                        handleBlur={setFieldTouched}
                        name="date_start_performed"
                        width="100%"
                    />
                    <InputDate
                        onChange={handleChange('date_end_performed')}
                        placeholder="Data Término do contrato"
                        date={values.date_end_performed}
                        type="date"
                        error={errors.date_end_performed}
                        touched={touched.date_end_performed}
                        handleBlur={setFieldTouched}
                        name="date_end_performed"
                        width="100%"
                    />
                </ContainerSecond>
                </ContainerFirstRow>
            </RegisterProjectForm>
        </Container>
    )
}

export default RegisterProjectData