import React from 'react'
import { DefaultInput, InputLine } from '../DefaultInput/style.js'
import { Img } from './style.js'
import SearchIcon from '../../../assets/icons/search.svg'


const InputSearch = ({setSearchResult, lineWidth, inputWidth}) => {

    return ( 
        <InputLine width={lineWidth}>
            <Img src={SearchIcon} alt="Lupa"/>
            <DefaultInput
                onChange={(e) => setSearchResult(e.target.value)}
                type="search"
                placeholder="Buscar..."
                width={inputWidth}
                padding="0.2em 0 0em 1em"/>
        </InputLine>
    )
}

export default InputSearch;