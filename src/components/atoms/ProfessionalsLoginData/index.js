import React from 'react'

import SecondaryText from '../SecondaryText/style'
import InputText from '../InputText'
import { ContainerProfessionalsLoginData } from './style.js'

const ProfessionalsLoginData = ({email, setEmail}) => {

    return (
        <ContainerProfessionalsLoginData>
            <SecondaryText margin="0 0 2.5em 0">Dados de login</SecondaryText>
            <InputText
            setTextValue={setEmail}
            width="100%"
            widthLine="400px"
            placeholder="E-mail G Suit"
            value={email}
            // editValue={}
            />
        </ContainerProfessionalsLoginData>
    )
}

export default ProfessionalsLoginData;