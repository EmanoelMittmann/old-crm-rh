import React from 'react'
import {InputLine} from '../SettingsInput/style.js'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import {
    Img,
    InputStatusSelect,
    InputStatusOption,
    InputStatusOptionPlaceholder
} from './style.js'

const InputStatus = () => {
    return ( 
        <div>
            <InputLine width="230px">
               <InputStatusSelect>
                    <InputStatusOptionPlaceholder value="status" disabled selected>Status</InputStatusOptionPlaceholder>
                    <InputStatusOption value="active">Ativo</InputStatusOption>
                    <InputStatusOption value="disabled">Inativo</InputStatusOption>
               </InputStatusSelect>
               <Img src={arrowPointingDown} alt="Lupa"/>
            </InputLine>
         
        </div>
    )
}

export default InputStatus;