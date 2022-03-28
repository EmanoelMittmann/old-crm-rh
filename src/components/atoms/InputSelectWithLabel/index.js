import React from 'react'

import { InputLine } from '../../atoms/DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import { Label } from './style.js'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
} from '../InputSelect/style.js'

const InputSelectWithLabel = ({setSelectedOption, options, placeholder, width, lineWidth, label, reset}) => {
    return ( 
        <InputLine width={lineWidth}>
            {label && <Label>{label}</Label>}
            <InputSelectContainer width={width} onChange={setSelectedOption}>
                { reset && 
                    <InputSelectOptionPlaceholder
                    value={placeholder}
                    disabled selected>
                        { placeholder }
                    </InputSelectOptionPlaceholder>
                }
                {options.map(option => (
                    <InputSelectOption key={option.id} value={option.id}>
                        { option.name }
                    </InputSelectOption>
                ))}
            </InputSelectContainer>
            <Img src={arrowPointingDown} alt="Lupa"/>
        </InputLine>
    )
}

export default InputSelectWithLabel