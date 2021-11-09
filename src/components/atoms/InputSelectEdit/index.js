import React from 'react'

import { InputLine } from '../DefaultInput/style.js'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
} from '../InputSelect/style.js'

const InputSelectEdit = ({colorId, setSelectedOption, width, options}) => {
    return (
        <InputLine width={width}>
            <InputSelectContainer width={width} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map(option => (
                    colorId === option.id &&
                    <InputSelectOption selected value={option.id}>
                    { option.name }
                    </InputSelectOption>
                ))}

                {options.map(option => (
                    colorId !== option.id &&
                    <InputSelectOption value={option.id}>
                    { option.name }
                    </InputSelectOption>
                ))}
            </InputSelectContainer>
            <Img src={arrowPointingDown} alt="Lupa"/>
        </InputLine>
    )
}

export default InputSelectEdit;