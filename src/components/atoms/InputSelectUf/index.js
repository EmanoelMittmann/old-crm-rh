import React from 'react'
import { InputLine } from '../../atoms/DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
    Father,
    ErrorMessage
} from './style.js'

const InputSelectUf = ({ onChange, options, placeHolder, width, lineWidth, value, margin, disabled, onClick,error,touched }) => {
    const attributeValue = {
        ...(value && { value: value })
    }

    return (
        <Father>
        <InputLine width={lineWidth} margin={margin} error={error && touched}>
            <InputSelectContainer
                {...attributeValue}
                width={width}
                onChange={onChange}
                disabled={disabled}
                onClick={onClick}
                placeholder={placeHolder}
            >
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
        {error && touched && <ErrorMessage>{error}</ErrorMessage>}
        </Father>
    )
}

export default InputSelectUf