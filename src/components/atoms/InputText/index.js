import React from 'react'
import { DefaultInput, InputLine } from '../DefaultInput/style.js'

const InputText = ({setTextValue, editValue, width, placeholder}) => {

    return (
            <InputLine width={width}>

                <DefaultInput
                onChange={(e) => setTextValue(e.target.value)}
                type="text"
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