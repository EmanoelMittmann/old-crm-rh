import React from 'react'
import { useEffect, useState } from 'react'
import { InputLine } from '../../atoms/DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import axios from 'axios'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
} from './style.js'

const InputBank = ({ onChange, options, placeHolder, width, lineWidth, value, margin }) => {
    
    const [state, setState] = useState([])
    useEffect(()=>{
        axios.get(`https://brasilapi.com.br/api/banks/v1`)

        .then(res => setState(res.data))

    },[])

    

    const attributeValue = {
        ...(value && {value: value})
    }

    return ( 
        <InputLine width={lineWidth} margin={margin}>
            <InputSelectContainer 
                {...attributeValue} 
                width={width} 
                onChange={onChange}
            >
                <InputSelectOptionPlaceholder disabled selected >
                    { placeHolder }
                </InputSelectOptionPlaceholder>
                {state?.map((option, index) => (
                    <InputSelectOption 
                        key={index} 
                        value={`${option.code ? option.code: ""}`}
                    >
                        { option.name }
                    </InputSelectOption>
                ))}
            </InputSelectContainer>
            <Img src={arrowPointingDown} alt="Lupa"/>
        </InputLine>
    )
}

export default InputBank