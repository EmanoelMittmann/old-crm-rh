import React from 'react'

import { InputLine } from '../DefaultInput/style'
import { DefaultInput } from '../DefaultInput/style'
import {InputWithLabelContainer, Label} from './style.js'

const InputWithLabel = ({label, setinputWithLabelValue, editValue, width, justify}) => {
    
    return (
        <InputWithLabelContainer justify={justify}>
                <InputLine width={width}>
                    <Label>
                        {label}
                    </Label>
                        <DefaultInput
                            onChange={(e) => setinputWithLabelValue(e.target.value)}
                            type="text"
                            defaultValue={editValue}
                            width={width}
                            padding="0.3em 0 0 1.5em"/>
                </InputLine>
        </InputWithLabelContainer>
    )
}

export default InputWithLabel;