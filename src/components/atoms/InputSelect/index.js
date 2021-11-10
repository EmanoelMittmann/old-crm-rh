import React, { useState } from 'react'

import { InputLine } from '../../atoms/DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
} from './style.js'

const InputSelect = ({setSelectedOption, options, placeholder, width, lineWidth}) => {

    return ( 
        <InputLine width={lineWidth}>
            <InputSelectContainer width={width} onChange={(e) => setSelectedOption(e.target.value)}>
                <InputSelectOptionPlaceholder
                value={placeholder}
                disabled selected>
                    { placeholder }
                </InputSelectOptionPlaceholder>
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