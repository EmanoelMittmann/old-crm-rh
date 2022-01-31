import React, { useState} from 'react'

import { PlaceHolder } from './style.js'
import { InputLine } from '../DefaultInput/style'
import { DefaultInput } from '../DefaultInput/style.js'

const InputDate = ({date, setDate, placeholder, margin, width}) => {
    const [onFocus, setOnFocus] = useState(false)

    return (
        <InputLine width={width ? width : "260px"} margin={margin}>
            <DefaultInput 
                displayDate={onFocus || date !== "" ? "block" : "none"}
                width="70px"
                type="date"
                onFocus={(e) => setOnFocus(true)}
                onChange={(e) => setDate(e.target.value)}
                value={date}
                max="2999-12-31"
            ></DefaultInput>
            {!onFocus && date === "" && <PlaceHolder>{placeholder}</PlaceHolder>}
        </InputLine>
    )
}

export default InputDate;