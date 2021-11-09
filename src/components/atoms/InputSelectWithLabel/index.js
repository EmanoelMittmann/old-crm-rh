import React, { useState } from 'react'

import { InputLine } from '../../atoms/DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import { Label } from './style.js'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
} from '../InputSelect/style.js'

const InputSelect = ({setSelectedOption, options, placeholder, width, lineWidth, label, reset}) => {
    return ( 
        <InputLine width={lineWidth}>
            {label && <Label>{label}</Label>}
            <InputSelectContainer width={width} onChange={(e) => setSelectedOption(e.target.value)}>
                {reset && 
                    <InputSelectOptionPlaceholder
                    value={placeholder}
                    disabled selected>
                        { placeholder }
                    </InputSelectOptionPlaceholder>
                }
                {options.map(option => (
                    <InputSelectOption value={option.id}>
                    { option.name }
                    </InputSelectOption>
                ))}
            </InputSelectContainer>
            <Img src={arrowPointingDown} alt="Lupa"/>
        </InputLine>
    )
}

export default InputSelect;