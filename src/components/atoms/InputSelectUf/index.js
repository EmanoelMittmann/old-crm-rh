import React, { useState } from 'react'
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
import { Label, RequiredLabel } from '../StyledComponents/generalStyle'

const InputSelectUf = ({ onChange, options, placeHolder, width, lineWidth, value, margin, disabled, onClick,error,touched, label, required }) => {
    const [focus, setFocus] = useState(false)
    const [blur, setBlur] = useState(false)
    const attributeValue = {
        ...(value && { value: value })
    }

    return (
        <Father>
        <InputLine width={lineWidth} margin={margin} error={error && touched}>
                {label && <Label focus={focus || value == ""} blur={blur || value !== ""}>
                    {label}
                    {required && <RequiredLabel>*</RequiredLabel>}
                </Label>}
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
        {error && touched && <ErrorMessage>{error}</ErrorMessage>}
        </Father>
    )
}

export default InputSelectUf