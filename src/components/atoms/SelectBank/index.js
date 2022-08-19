import React from 'react'
import { useEffect, useState } from 'react'
import { InputLine } from '../DefaultInput/style'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import 'react-toastify/dist/ReactToastify.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { DefaultToast } from '../Toast/DefaultToast'


import axios from 'axios'
import {
    Img,
    InputSelectContainer,
    InputSelectOption,
    InputSelectOptionPlaceholder,
} from './style.js'


const InputBank = ({ onChange, options, placeHolder, width, lineWidth, value, margin }) => {


    const [state, setState] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`https://brasilapi.com.br/api/banks/v1`)
            .then((response) => {
                setState(response.data)
            })
            .catch(error => {
                setError(error)
                return toast.error(<DefaultToast text="Não foi possível completar o upload do Banco!" />)
            });
    }, [])

    const attributeValue = {
        ...(value && { value: value })
    }

    return (
        <InputLine width={lineWidth} margin={margin}>
            <InputSelectContainer
                {...attributeValue}
                width={width}
                onChange={onChange}
            >
                <InputSelectOptionPlaceholder disabled selected >
                    {placeHolder}
                </InputSelectOptionPlaceholder>
                {state?.map((option, index) => (
                    <InputSelectOption
                        key={index}
                        value={`${option.name ? option.name : ""}`}
                    >
                        {option.name}
                    </InputSelectOption>
                ))}
            </InputSelectContainer>
            <Img src={arrowPointingDown} alt="Lupa" />
        </InputLine>

    )
}

export default InputBank