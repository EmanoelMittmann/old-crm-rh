import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Input, InputLine } from '../SettingsInput/style.js'
import { Img } from './style.js'
import SearchIcon from '../../../assets/icons/search.svg'


const InputSearch = () => {

    const [searchName, setSearchName] = useState("")
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    
    const FilterHandler = (e) => {
        setSearchName(e.target.value)
        console.log(searchName);
    }


    return ( 
        <InputLine width="250px">
            <Img src={SearchIcon} alt="Lupa"/>
            <Input
                onChange={(e) => FilterHandler(e)}
                type="search"
                placeholder="Buscar..."
                width="200px"
                padding="0.3em 0 0 0"/>
        </InputLine>
    )
}

export default InputSearch;