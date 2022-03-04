import React, { useEffect, useState } from 'react'
import { InputLine } from '../DefaultInput/style'
import { DefaultInput } from '../DefaultInput/style'
import {InputWithLabelContainer, Label, ErrorMessage} from './style.js'

const InputWithLabel = ({value, label, onChange, defaultValue, width, widthContainer, justify, padding, error, touched, type, handleBlur, name}) => {
    const [focus, setFocus] = useState(false)
    const [blur, setBlur] = useState(false)
    const [typeDate, setTypeDate] = useState("text")
    
    useEffect(() => {
        if(type !== "date") {
            return setTypeDate(type)                      
        }
        if(focus || value !== '') return setTypeDate("date")   
    },[focus, value, type])

    return (
        <InputWithLabelContainer 
            padding={padding} 
            justify={justify} 
            widthContainer={widthContainer}
        >
            <InputLine width={width} error={touched && error}>
                 <Label
                    focus={focus || value !== ''}
                    blur={blur || value !== ''}
                 >
                    {label}
                </Label>
                <DefaultInput
                    onChange={onChange}
                    type={type ? typeDate : "text"}
                    onFocus={() => setFocus(true) & setBlur(false)}
                    onBlur={() =>  setBlur(true) & setFocus(false) & handleBlur(name, true)}
                    value={value}
                    placeholder={focus ? '' : label}
                    defaultValue={defaultValue}
                    width={width}
                    padding="0.3em 0 0 1.5em"
                    max="2999-12-31"
                />
            </InputLine>
            {error && touched && (<ErrorMessage visible={error}>{error}</ErrorMessage>)}
        </InputWithLabelContainer>
    )
}

export default InputWithLabel