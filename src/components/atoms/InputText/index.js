import React from 'react'
import { DefaultInput, InputLine } from '../DefaultInput/style.js'

const InputText = ({onChange, editValue, width, widthLine, placeholder, value, type, margin,invalid}) => {

    return (
            <InputLine borderColor={invalid === true && "red"}  width={widthLine} margin={margin}>
                <DefaultInput
                value={value}
                placeholderColor={invalid === true && "red"}
                onChange={onChange}
                type={type ? type : "text"}
                defaultValue={editValue}
                width={width}
                padding="0.3em 1.2em 0 1.2em"
                placeholder={placeholder}
                >
                </DefaultInput>

            </InputLine>
    )
}

export default InputText;