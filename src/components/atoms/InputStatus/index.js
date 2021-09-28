import React from 'react'
import {Input, InputLine} from '../SettingsInput/style.js'

const InputStatus = () => {
    return ( 
        <InputLine width="230px">
            <Input 
                type="text"
                placeholder="Status"
                width="150px"
                padding="0.3em 0 0 1.5em"/>
        </InputLine>
    )
}

export default InputStatus;