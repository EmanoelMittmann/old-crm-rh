import React, { useState, useEffect } from 'react'

import { PlaceHolder } from './style.js'
import { InputLine } from '../DefaultInput/style'
import { DefaultInput } from '../DefaultInput/style.js'

const InputDate = ({date, setDate, placeholder, margin}) => {
    const [onFocus, setOnFocus] = useState(false)

    return (
        <InputLine width="260px" margin={margin}>
            <DefaultInput 
            displayDate={onFocus || date !== "" ? "block" : "none"}
            width="70px"
            type="date"
            onFocus={(e) => setOnFocus(true)}
            onChange={(e) => setDate(e.target.value)}
            value={date}
            ></DefaultInput>
            {!onFocus && date === "" && <PlaceHolder>{placeholder}</PlaceHolder>}
        </InputLine>
    )
}

export default InputDate;