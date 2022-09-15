import React, { useState } from 'react'
import { ListHeaderContainer, ListHeaderTitle } from '../../atoms/ListHeader/style'
import { ListHeaderCity, ListHeaderCNPJ, ListHeaderDate, ListHeaderRazaoSocial, ListHeaderSituation, ListHeaderUF } from './style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

export const CompaniesListHeader = () => {
    
    const [order, setOrder] = useState("")
    
    const sortByName = () => {
        order === "" && setOrder("desc")
        order === "asc" && setOrder("desc")
        order === "desc" && setOrder("asc")
    }
    return (
    <ListHeaderContainer>

            <ListHeaderRazaoSocial>
                <ListHeaderTitle margin="-50px">Razão Social</ListHeaderTitle>
                <Arrows onClick={sortByName}/>
            </ListHeaderRazaoSocial>

            <ListHeaderCNPJ>
                <ListHeaderTitle margin="0" >CNPJ</ListHeaderTitle>
                <Arrows onClick={sortByName}/>
            </ListHeaderCNPJ>

            <ListHeaderDate>
                <ListHeaderTitle margin="0">Data de Abertura</ListHeaderTitle>
                <Arrows onClick={sortByName}/>
            </ListHeaderDate>

            <ListHeaderCity>
                <ListHeaderTitle margin="0">Cidade</ListHeaderTitle>
                <Arrows onClick={sortByName}/>
            </ListHeaderCity>

            <ListHeaderUF>
                <ListHeaderTitle margin="10px">UF</ListHeaderTitle>
                <Arrows onClick={sortByName}/>
            </ListHeaderUF>

            <ListHeaderSituation>
                <ListHeaderTitle margin="0">Situação Cadastral</ListHeaderTitle>
                <Arrows onClick={sortByName}/>
            </ListHeaderSituation>
        </ListHeaderContainer>
  )
}
