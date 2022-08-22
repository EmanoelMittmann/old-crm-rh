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
    ContainerRegisterProjectData
} from './style.js'
import { useEffect } from 'react'

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
        <ContainerRegisterProjectData>
            <SecondaryText margin="0 0 2.5em 0">Dados do projeto</SecondaryText>
            <RegisterProjectForm>
                <ContainerFirstRow>
                    <ContainerInputWithLabel>
                        <InputWithLabel
                            placeHolder="Projeto..."
                            label="Nome do projeto"
                            value={values.name}
                            onChange={handleChange('name')}
                            name="name"
                            widthContainer="95%"
                            error={errors.name}
                            touched={touched.name}
                            handleBlur={setFieldTouched}
                        />
                    </ContainerInputWithLabel>
                    <ContainerInputProjectTypeSelect>
                        <InputSelect
                            value={values.project_type_id}
                            onChange={handleChange('project_type_id')}
                            options={typeOptions}
                            placeHolder="Tipo de projeto"
                            width="100%"
                        />
                    </ContainerInputProjectTypeSelect>
                </ContainerFirstRow>

                <ContainerSecondRow>
                    <InputWithLabel
                        onChange={handleChange('date_start')}
                        label="Data início"
                        value={values.date_start}
                        type="date"
                        error={errors.date_start}
                        touched={touched.date_start}
                        handleBlur={setFieldTouched}
                        name="date_start"
                        widthContainer="30%"
                        padding="0 3em 0 0"
                    />
                    <InputWithLabel
                        onChange={handleChange('date_end')}
                        label="Data final estimado"
                        value={values.date_end}
                        type="date"
                        error={errors.date_end}
                        touched={touched.date_end}
                        handleBlur={setFieldTouched}
                        name="date_end"
                        widthContainer="30%"
                        padding="0 3em 0 0"
                    />
                    <ContainerInputProjectStatusSelect>
                        <InputSelect
                            value={values.project_status_id}
                            onChange={handleChange('project_status_id')}
                            options={statusOptions}
                            placeHolder="Status do projeto"
                            width="100%"
                        />
                    </ContainerInputProjectStatusSelect>
                </ContainerSecondRow>

                <ContainerThirdLine>
                    <InputMasked
                        mask={team_cost_mask}
                        label="Custo estimado de equipe"
                        id="team_cost"
                        name="team_cost"
                        value={values.team_cost}
                        onChange={handleChange('team_cost')}
                        error={errors.team_cost}
                        touched={touched.team_cost}
                        width="100%"
                        padding="0 3em 0 0"
                        widthContainer="30%"
                        handleBlur={setFieldTouched}
                    />
                    <InputWithLabel
                        onChange={handleChange('date_end_performed')}
                        label="Data final realizado"
                        value={values.date_end_performed}
                        type="date"
                        error={errors.date_end_performed}
                        touched={touched.date_end_performed}
                        handleBlur={setFieldTouched}
                        name="date_end_performed"
                        widthContainer="30%"
                        padding="0 3em 0 0"
                    />
                </ContainerThirdLine>
            </RegisterProjectForm>
        </ContainerRegisterProjectData>
    )
}

export default RegisterProjectData