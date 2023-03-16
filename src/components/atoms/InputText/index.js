import React, { useState } from 'react'
import { DefaultInput, InputLine } from '../DefaultInput/style.js'
import { Label, RequiredLabel } from '../StyledComponents/generalStyle.js';

const InputText = ({onChange,disabled, editValue, width, widthLine, placeholder, value, type, margin,invalid, label, required}) => {
    const [focus, setFocus] = useState(false);
    const [blur, setBlur] = useState(false);
    return (
            <InputLine borderColor={invalid === true && "red"}  width={widthLine} margin={margin}>
            <Label focus={focus || value == ''} blur={blur || value !== ''}>
                {label}
                {required && <RequiredLabel>*</RequiredLabel>}
            </Label>
                <DefaultInput
                value={value}
                placeholderColor={invalid === true && "red"}
                onChange={onChange}
                type={type ? type : "text"}
                defaultValue={editValue}
                width={width}
                padding="0.3em 1.2em 0 1.2em"
                placeholder={placeholder}
                disabled={disabled}
                >
                </DefaultInput>

            </InputLine>
    )
}

export default InputText;