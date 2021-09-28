import React from 'react'
import { Input, InputLine } from '../SettingsInput/style.js'
import { Img } from './style.js'
import SearchIcon from '../../../assets/icons/search.svg'

const InputSearch = () => {
    return ( 
        <InputLine width="300px">
            <Img src={SearchIcon} alt="Lupa"/>
            <Input
                type="search"
                placeholder="Buscar..."
                width="250px"
                padding="0.3em 0 0 0"/>
        </InputLine>
    )
}

export default InputSearch;