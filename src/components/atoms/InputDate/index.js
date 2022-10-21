import React, { useState} from 'react'

import { PlaceHolder } from './style.js'
import { InputLine } from '../DefaultInput/style'
import { DefaultInput } from '../DefaultInput/style.js'

const InputDate = ({value, onChange, placeholder, margin,disabled, width}) => {
    const [onFocus, setOnFocus] = useState(false)

    return (
        <InputLine width={width ? width : "260px"} margin={margin}>
            <DefaultInput 
                displayDate={onFocus || value === '' ? "block" : "none"}
                width="70px"
                type="date"
                disabled={disabled}
                onFocus={(e) => setOnFocus(true)}
                onChange={onChange}
                value={value}
                max="2999-12-31"
                padding="0 1.5em"
            ></DefaultInput>
            
            {!onFocus && value !== "" && <PlaceHolder>{placeholder}</PlaceHolder>}
        </InputLine>
    )
}

export default InputDate;