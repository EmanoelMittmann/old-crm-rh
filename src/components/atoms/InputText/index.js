import React from 'react'
import { DefaultInput, InputLine } from '../DefaultInput/style.js'

const InputText = ({setTextValue, editValue, width, widthLine, placeholder, value, type}) => {

    return (
            <InputLine width={widthLine}>

                <DefaultInput
                value={value}
                onChange={(e) => setTextValue(e.target.value)}
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