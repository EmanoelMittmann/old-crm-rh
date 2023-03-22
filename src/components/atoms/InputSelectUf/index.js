import React, { useState } from 'react'
import { InputLine } from '../../atoms/DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import {
    ErrorMessage,
    Father,
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
    Label,
    RequiredLabel
} from '../DefautInputSelect/style.js'

const InputSelectUf = ({ onChange, options, placeholder, width, lineWidth, value, margin, disabled, onClick, error, touched, label, required, textColor }) => {
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
                    textColor={textColor}
                >
                    {placeholder && <InputSelectOptionPlaceholder disabled selected >
                        {placeholder}
                    </InputSelectOptionPlaceholder>}
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