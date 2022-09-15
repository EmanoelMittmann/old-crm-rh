import React from 'react'
import {
    ContainerRegisterCompanyData,
    RegisterCompanyForm
} from '../RegisterCompany/style'
import { ContainerRow } from '../RegisterCompany/style'
import InputWithLabel from '../../atoms/InputWithLabel'
import InputSelect from '../../atoms/InputSelect'
import { optionsUF } from '../RegisterProfessionalsData'
import SecondaryText from '../../atoms/SecondaryText/style'
import InputMasked from '../../atoms/InputMasked'

export const AddressContact = ({ data }) => {
    const { values, handleChange, errors, touched, setFieldTouched } = data

    return (
        <ContainerRegisterCompanyData>
            <SecondaryText margin="2.5em">Endereço e Contato</SecondaryText>
            <RegisterCompanyForm>
                <ContainerRow>
                    <InputMasked
                        value={values.cep}
                        onChange={handleChange('cep')}
                        label="CEP"
                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-',
                            /\d/, /\d/, /\d/]}
                        padding="0em 2em 0 0em"
                        width="100%"
                        widthContainer="30%"
                        error={errors.cep}
                        touched={touched.cep}
                        handleBlur={setFieldTouched}
                        name="cep"
                    />
                    <InputWithLabel
                        value={values.street_name}
                        onChange={handleChange('street_name')}
                        label="Rua"
                        padding="0em 2em 0 0em"
                        width="100%"
                        widthContainer="40%"
                        error={errors.street_name}
                        touched={touched.street_name}
                        handleBlur={setFieldTouched}
                        name="street"
                    />
                    <InputWithLabel
                        value={values.house_number}
                        onChange={handleChange('house_number')}
                        label="número"
                        padding="0em 2em 0 0em"
                        width="100%"
                        type='number'
                        widthContainer="20%"
                        error={errors.house_number}
                        touched={touched.house_number}
                        handleBlur={setFieldTouched}
                        
                    />
                    <InputWithLabel
                        value={values.complement}
                        onChange={handleChange('complement')}
                        label="complemento"
                        padding="0em 0em 0 0em"
                        width="100%"
                        widthContainer="30%"
                        error={errors.complement}
                        touched={touched.complement}
                        handleBlur={setFieldTouched}
                        name="complement"
                    />
                </ContainerRow>
                <ContainerRow>
                    <InputWithLabel
                        value={values.neighborhood_name}
                        onChange={handleChange('neighborhood_name')}
                        label="Bairro"
                        padding="0em 2em 0 0em"
                        width="100%"
                        widthContainer="60%"
                        error={errors.neighborhood_name}
                        touched={touched.neighborhood_name}
                        handleBlur={setFieldTouched}
                        name="district"
                    />
                    <InputWithLabel
                        value={values.city_name}
                        onChange={handleChange('city_name')}
                        label="cidade"
                        padding="0em 2em 0 0em"
                        width="100%"
                        widthContainer="50%"
                        error={errors.city_name}
                        touched={touched.city_name}
                        handleBlur={setFieldTouched}
                        name="city"
                    />
                    <InputSelect
                        value={values.uf}
                        onChange={handleChange('uf')}
                        options={optionsUF}
                        error={errors.uf}
                        touched={touched.uf}
                        handleBlur={setFieldTouched}
                        placeHolder="UF"
                        width="230px"
                    />
                </ContainerRow>
                <ContainerRow>
                    <InputMasked
                        value={values.phone_number}
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        label="telefone"
                        onChange={handleChange('phone_number')}
                        error={errors.phone_number}
                        touched={touched.phone_number}
                        width="95%"
                        widthContainer="30%"
                        handleBlur={setFieldTouched}
                        name="phone_number"
                    />
                    <InputWithLabel
                        value={values.main_email}
                        type="email"
                        label="E-mail Principal"
                        onChange={handleChange('main_email')}
                        error={errors.main_email}
                        touched={touched.main_email}
                        width="95%"
                        widthContainer="40%"
                        handleBlur={setFieldTouched}
                        name="email"
                    />
                    <InputWithLabel
                        value={values.secondary_email}
                        type="email"
                        label="E-mail secundário"
                        onChange={handleChange('secondary_email')}
                        error={errors.secondary_email}
                        touched={touched.secondary_email}
                        width="100%"
                        widthContainer="40%"
                        handleBlur={setFieldTouched}
                        name="secundary_email"
                    />
                </ContainerRow>
            </RegisterCompanyForm>
        </ContainerRegisterCompanyData>
    )
}
