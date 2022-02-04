import React from 'react'

import { InputLine } from '../DefaultInput/style'
import { DefaultInput } from '../DefaultInput/style'
import {InputWithLabelContainer, Label, ErrorMessage} from './style.js'

const InputWithLabel = ({inputValue, label, onChange, defaultValue, width, widthContainer, justify, padding, placeholder, errorMessage}) => {
    
    return (
        <InputWithLabelContainer 
            padding={padding} 
            justify={justify} 
            widthContainer={widthContainer}
        >
            <InputLine width={width} error={errorMessage}>
                <Label>
                    {label}
                </Label>
                <DefaultInput
                    onChange={onChange}
                    type="text"
                    value={inputValue}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    width={width}
                    padding="0.3em 0 0 1.5em"
                />
            </InputLine>
            <ErrorMessage visible={errorMessage}>{errorMessage}</ErrorMessage>
        </InputWithLabelContainer>
    )
}

export default InputWithLabel