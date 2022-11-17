import React from 'react'

import { InputLine } from '../DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import { Label} from './style.js'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
} from '../InputSelect/style.js'

const InputProject = ({ setSelectedOption, options, placeholder,width, lineWidth, label, reset}) => {

    return ( 
        <InputLine width={lineWidth}>
            {label && <Label>{label}</Label>}
            <InputSelectContainer width={width} onChange={setSelectedOption}>
                { reset && 
                    <InputSelectOptionPlaceholder
                        value={placeholder}
                        selected
                    >
                        { placeholder }
                    </InputSelectOptionPlaceholder>
                }
                { !options.length ? 
                    <InputSelectOption disabled >
                       {placeholder}
                    </InputSelectOption>
                    :
                    options.map(option => (
                        <InputSelectOption key={option.id} value={option.name} >
                            { option.name }
                        </InputSelectOption>
                ))}
            </InputSelectContainer>
            <Img src={arrowPointingDown} alt="Lupa"/>
        </InputLine>
    )
}

export default InputProject