import React, { useState } from 'react'

import { Img, PlaceHolder } from './style.js'
import { InputLine } from '../DefaultInput/style'
import dateRange from '../../../assets/icons/date-range.svg'
import { DefaultInput } from '../DefaultInput/style.js'

const InputDate = ({setDate, placeholder}) => {
    const [onFocus, setOnFocus] = useState(false)

    return (
        <InputLine width="260px">
            {/* <Img src={dateRange} alt="Calendário"/> */}
            <DefaultInput 
            displayDate={onFocus ? "block" : "none"}
            width="70px"
            type="date"
            onFocus={(e) => setOnFocus(true)}
            onChange={(e) => setDate(e.target.value)}
            ></DefaultInput>
            {!onFocus && <PlaceHolder>{placeholder}</PlaceHolder>}
        </InputLine>
    )
}

export default InputDate;