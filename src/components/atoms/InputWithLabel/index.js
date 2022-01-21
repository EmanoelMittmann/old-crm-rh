import React from 'react'

import { InputLine } from '../DefaultInput/style'
import { DefaultInput } from '../DefaultInput/style'
import {InputWithLabelContainer, Label} from './style.js'

const InputWithLabel = ({inputValue, label, setInputWithLabelValue, editValue, width, widthContainer, justify, padding, placeholder}) => {
    
    return (
        <InputWithLabelContainer padding={padding} justify={justify} widthContainer={widthContainer}>
                <InputLine width={width}>
                    <Label>
                        {label}
                    </Label>
                        <DefaultInput
                            onChange={(e) => setInputWithLabelValue(e.target.value)}
                            type="text"
                            value={inputValue}
                            placeholder={placeholder}
                            defaultValue={editValue}
                            width={width}
                            padding="0.3em 0 0 1.5em"/>
                </InputLine>
        </InputWithLabelContainer>
    )
}

export default InputWithLabel;