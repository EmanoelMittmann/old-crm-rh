import React from 'react'
import { 
    ContainerRegisterProfessionalsData,
    RegisterProfessionalsForm,
    ContainerRow,
} from './style.js'
import SecondaryText from '../../atoms/SecondaryText/style'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import InputSelect from '../../atoms/InputSelect/index.js'
import InputMasked from '../../atoms/InputMasked/index.js'

const optionsUF = [
    {name: "Acre", id: "AC"},
    {name: "Alagoas", id: "AL"},
    {name: "Amapá", id: "AP"},
    {name: "Amazonas", id: "AM"},
    {name: "Bahia", id: "BA"},
    {name: "Ceará", id: "CE"},
    {name: "Distrito Federal", id: "DF"},
    {name: "Espírito Santo", id: "ES"},
    {name: "Goiás", id: "GO"},
    {name: "Maranhão", id: "MA"},
    {name: "Mato Grosso", id: "MT"},
    {name: "Mato Grosso do Sul", id: "MS"},
    {name: "Minas Gerais", id: "MG"},
    {name: "Pará", id: "PA"},
    {name: "Paraíba", id: "PB"},
    {name: "Paraná", id: "PR"},
    {name: "Pernambuco", id: "PE"},
    {name: "Piauí", id: "PI"},
    {name: "Rio de Janeiro", id: "RJ"},
    {name: "Rio Grande do Norte", id: "RN"},
    {name: "Rio Grande do Sul", id: "RS"},
    {name: "Rondônia", id: "RO"},
    {name: "Roraima", id: "RR"},
    {name: "Santa Catarina", id: "SC"},
    {name: "São Paulo", id: "SP"},
    {name: "Sergipe", id: "SE"},
    {name: "Tocantins", id: "TO"}
]

const RegisterProfessionalsData = ({ data }) => {
   const { values, handleChange, errors, touched, setFieldTouched} = data

   return (
        <ContainerRegisterProfessionalsData>
            <SecondaryText margin="0 0 2.5em 0">Dados pessoais</SecondaryText>
            <RegisterProfessionalsForm>
                    <ContainerRow>
                        <InputWithLabel
                            value={values.name}
                            onChange={handleChange('name')}
                            label="Nome"
                            name="name"
                            width="100%"
                            widthContainer="60%" 
                            placeHolder="Nome..."
                            padding="0 2em 0 0"
                            error={errors.name}
                            touched={touched.name}
                            handleBlur={setFieldTouched}
                        />
                        <InputWithLabel
                            onChange={handleChange('birth_date')}
                            label="Data nascimento"
                            value={values.birth_date}
                            width="100%"
                            widthContainer="40%"
                            type="date"
                            error={errors.birth_date}
                            touched={touched.birth_date}
                            handleBlur={setFieldTouched}
                            name="birth_date"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <InputMasked
                            id="cpf"
                            name="cpf"
                            value={values.cpf}
                            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/ ,/\d/]}
                            label="CPF"
                            onChange={handleChange('cpf')}
                            error={errors.cpf}
                            touched={touched.cpf}
                            width="100%"
                            padding="0em 2em 0 0em" 
                            widthContainer="30%"
                            handleBlur={setFieldTouched}
                        />
                        <InputWithLabel 
                            onChange={handleChange('rg')}
                            value={values.rg}
                            label="RG"
                            width="100%"
                            widthContainer="30%"
                            padding="0em 2em 0 0em"
                            error={errors.rg}
                            touched={touched.rg}
                            handleBlur={setFieldTouched}
                            name="rg"
                            type="number"
                        />
                        <InputMasked
                            value={values.telephone_number}
                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/ ,/\d/]}
                            label="Celular"
                            onChange={handleChange('telephone_number')}
                            error={errors.telephone_number}
                            touched={touched.telephone_number}
                            width="100%"
                            widthContainer="40%"
                            handleBlur={setFieldTouched}
                            name="telephone_number"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <InputMasked
                            value={values.cnpj}
                            mask={[/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/,'.', 
                            /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                            label="CNPJ"
                            onChange={handleChange('cnpj')}
                            error={errors.cnpj}
                            touched={touched.cnpj}
                            padding="0em 2em 0 0em"
                            width="100%"
                            widthContainer="30%"
                            handleBlur={setFieldTouched}
                            name="cnpj"
                        />
                        <InputWithLabel
                            onChange={handleChange('razao_social')}
                            value={values.razao_social}
                            label="Razão Social"
                            width="100%"
                            widthContainer="70%"
                            error={errors.razao_social}
                            touched={touched.razao_social}
                            handleBlur={setFieldTouched}
                            name="razao_social"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <InputMasked 
                            value={values.cep}
                            onChange={handleChange('cep')}
                            label="CEP"
                            mask={[/\d/, /\d/, /\d/, /\d/, /\d/,'-', 
                            /\d/, /\d/, /\d/]}
                            padding="0em 2em 0 0em"
                            width="100%"
                            widthContainer="23%"
                            error={errors.cep}
                            touched={touched.cep}
                            handleBlur={setFieldTouched}
                            name="cep"
                        />
                        <InputWithLabel
                            onChange={handleChange('street_name')}
                            value={values.street_name}
                            label="Rua"
                            width="100%"
                            widthContainer="40%"
                            padding="0 2em 0 0"
                            error={errors.street_name}
                            touched={touched.street_name}
                            handleBlur={setFieldTouched}
                            name="street_name"
                        />
                        <InputWithLabel
                            onChange={handleChange('house_number')}
                            value={values.house_number}
                            label="Número"
                            type="number"
                            width="100%"
                            widthContainer="17%"
                            padding="0 2em 0 0"
                            error={errors.house_number}
                            touched={touched.house_number}
                            handleBlur={setFieldTouched}
                            name="house_number"
                        />
                        <InputWithLabel
                            onChange={handleChange('complement')}
                            value={values.complement}
                            label="Complemento"
                            width="100%"
                            widthContainer="19%"
                            error={errors.complement}
                            touched={touched.complement}
                            handleBlur={setFieldTouched}
                            name="complement"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <InputWithLabel
                            onChange={handleChange('neighbourhood_name')}
                            value={values.neighbourhood_name}
                            label="Bairro"
                            width="100%"
                            widthContainer="50%"
                            padding="0 2em 0 0"
                            error={errors.neighbourhood_name}
                            touched={touched.neighbourhood_name}
                            handleBlur={setFieldTouched}
                            name="neighbourhood_name"
                        />
                        <InputWithLabel
                            value={values.city_name}
                            onChange={handleChange('city_name')}
                            label="Cidade"
                            width="100%"
                            widthContainer="38%" 
                            padding="0 2.4em 0 0"
                            error={errors.city_name}
                            touched={touched.city_name}
                            handleBlur={setFieldTouched}
                            name="city_name"
                        />
                        <InputSelect
                            value={values.uf}
                            onChange={handleChange('uf')}
                            options={optionsUF}
                            placeholder="UF"
                            width="230px"
                        />    
                    </ContainerRow>
            </RegisterProfessionalsForm>
        </ContainerRegisterProfessionalsData>   
    )
}

export default RegisterProfessionalsData