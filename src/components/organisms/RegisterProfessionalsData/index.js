import React from 'react'

import { 
    ContainerRegisterProfessionalsData,
    RegisterProfessionalsForm,
    ContainerRow,
} from './style.js'
import SecondaryText from '../../atoms/SecondaryText/style';
import InputWithLabel from '../../atoms/InputWithLabel/index.js';
import InputText from '../../atoms/InputText/index.js';
import InputDate from '../../atoms/InputDate/index.js';
import InputSelect from '../../atoms/InputSelect/index.js';

const RegisterProfessionalsData = ({personalData, setName, setCPF, setRG,  setBirthDate, setCNPJ, setCorporateName, setCEP, setStreet, setAddressNumber, setAddressDetails, setNeighborhood, setCity, setUF}) => {

    const options = [
        {
            id: 1,
            name: 'UF1'
        },
        {
            id: 2,
            name: 'UF2'
        }
    ]

    return (
        <ContainerRegisterProfessionalsData>
             <SecondaryText margin="0 0 2.5em 0">Dados pessoais</SecondaryText>
                <RegisterProfessionalsForm>
                    <ContainerRow>
                            <InputWithLabel
                            inputValue={personalData.name}
                            setinputWithLabelValue={setName}
                            label="Nome"
                            width="100%"
                            widthContainer="50%" 
                            placeholder="Nome..."
                            padding="0 2em 0 0"
                            // editValue={}
                            // justify={}
                            />
                            <InputText
                            setTextValue={setCPF}
                            value={personalData.CPF}
                            placeholder="CPF"
                            width="100%"
                            widthLine="25%"
                            margin="0 2em 0 0"
                            type="number"
                            // editValue={}
                            />
                            <InputText
                            setTextValue={setRG}
                            value={personalData.RG}
                            placeholder="RG"
                            width="100%"
                            widthLine="25%"
                            type="number"
                            // editValue={}
                            />
                    </ContainerRow>
                    <ContainerRow>
                        <InputDate
                         setDate={setBirthDate}
                         placeholder="Data nascimento"
                         date={personalData.birthDate}
                         margin="0 2em 0 0"
                        />
                        <InputText
                         setTextValue={setCNPJ}
                         value={personalData.CNPJ}
                         placeholder="CNPJ"
                         width="100%"
                         width="240px"
                         margin="0 2em 0 0"
                         type="number"
                        />
                        <InputText
                         setTextValue={setCorporateName}
                         value={personalData.corporateName}
                         placeholder="Razão Social"
                         width="100%"
                         widthLine="55%"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <InputText
                         setTextValue={setCEP}
                         value={personalData.CEP}
                         placeholder="CEP"
                         type="number"
                         width="100%"
                         widthLine="260px"
                         margin="0 2em 0 0"
                        />
                         <InputText
                         setTextValue={setStreet}
                         value={personalData.street}
                         placeholder="Rua"
                         width="100%"
                         widthLine="40%"
                         margin="0 2em 0 0"
                        />
                         <InputText
                         setTextValue={setAddressNumber}
                         value={personalData.addressNumber}
                         placeholder="Número"
                         type="number"
                         width="100%"
                         widthLine="17%"
                         margin="0 2em 0 0"
                        />
                         <InputText
                         setTextValue={setAddressDetails}
                         value={personalData.addressDetails}
                         placeholder="Complemento"
                         width="100%"
                         widthLine="19%"
                        />
                    </ContainerRow>
                    <ContainerRow>
                        <InputText
                         setTextValue={setNeighborhood}
                         value={personalData.neighborhood}
                         placeholder="Bairro"
                         width="100%"
                         widthLine="45%"
                         margin="0 2em 0 0"
                        />
                         <InputText
                         setTextValue={setCity}
                         value={personalData.city}
                         placeholder="Cidade"
                         width="100%"
                         widthLine="35%"
                         margin="0 2em 0 0"
                        />
                        <InputSelect
                        setSelectedOption={personalData.UF}
                        options={options}
                        placeholder="UF"
                        width="230px"
                        />    
                    </ContainerRow>
                    
             </RegisterProfessionalsForm>
        </ContainerRegisterProfessionalsData>
    )
}

export default RegisterProfessionalsData;