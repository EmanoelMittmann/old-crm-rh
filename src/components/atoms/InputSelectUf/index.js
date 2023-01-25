import React from 'react'
import { InputLine } from '../../atoms/DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
} from './style.js'

const InputSelectUf = ({ onChange, options, placeHolder, width, lineWidth, value, margin, disabled, onClick }) => {
    const attributeValue = {
        ...(value && { value: value })
    }

    return (
        <InputLine width={lineWidth} margin={margin}>
            <InputSelectContainer
                {...attributeValue}
                width={width}
                onChange={onChange}
                disabled={disabled}
                onClick={onClick}
            >
                <InputSelectOptionPlaceholder disabled selected >
                    {placeHolder}
                </InputSelectOptionPlaceholder>
                {options?.map((option, index) => (
                    <InputSelectOption
                        key={index}
                        value={`${option.isoCode ? option.isoCode : ""}`}
                    >
                        {option.name}
                    </InputSelectOption>
                ))}
            </InputSelectContainer>
            <Img src={arrowPointingDown} alt="Lupa" />
        </InputLine>
    )
}

export default InputSelectUf