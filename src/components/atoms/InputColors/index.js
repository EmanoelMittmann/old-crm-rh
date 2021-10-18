import React from 'react'
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg'
import { InputLine } from '../DefaultInput/style.js'
import {
    Img,
    InputColorsSelect,
    InputColorsOption,
    InputColorsOptionPlaceholder
} from './style.js'

export const InputColors = () => {
    return (
        <InputLine width="85%" margin="0.8em 0 0 0">
               <InputColorsSelect>
                    <InputColorsOptionPlaceholder value="status" disabled selected>Status</InputColorsOptionPlaceholder>
                    <InputColorsOption value="all">Todos</InputColorsOption>
                    <InputColorsOption value="active">Ativo</InputColorsOption>
                    <InputColorsOption value="disabled">Inativo</InputColorsOption>
               </InputColorsSelect>
               <Img src={arrowPointingDown} alt="Lupa"/>
            </InputLine>
    )
}

export default InputColors;