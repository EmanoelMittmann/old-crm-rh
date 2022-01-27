import React, { useState } from 'react'

import { InputLine } from '../../atoms/DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
} from './style.js'

const InputSelect = ({setSelectedOption, options, placeholder, width, lineWidth, value}) => {

    const attributeValue = {
        ...(value && {value: value})
    }

    return ( 
        <InputLine width={lineWidth}>
            <InputSelectContainer {...attributeValue} width={width} onChange={(e) => setSelectedOption(e.target.value)}>
                <InputSelectOptionPlaceholder
                value={placeholder}
                disabled selected>
                    { placeholder }
                </InputSelectOptionPlaceholder>
                {options.map((option, index) => (
                    <InputSelectOption key={index} value={`${option.id ? option.id : ""}`}>
                    { option.name }
                    </InputSelectOption>
                ))}
            </InputSelectContainer>
            <Img src={arrowPointingDown} alt="Lupa"/>
        </InputLine>
    )
}

export default InputSelect;