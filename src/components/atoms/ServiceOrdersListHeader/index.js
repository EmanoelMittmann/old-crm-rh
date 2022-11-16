import React from 'react'
import {
    ListHeaderName,
    ListHeaderCNPJ,
    ListHeaderEmail,
    ListHeaderdate,
    ListHeaderNumbersOS,
    ListHeaderStatus
} from './style.js'
import { ListHeaderContainer, ListHeaderTitle } from '../ListHeader/style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const ServiseOrdersListHeader = ({ sortByName }) => {
    return (
        <ListHeaderContainer>
            <ListHeaderName>
                <ListHeaderTitle margin="0">Profissional</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderName>

            <ListHeaderCNPJ>
                <ListHeaderTitle margin="0">CNPJ</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderCNPJ>

            <ListHeaderNumbersOS>
                <ListHeaderTitle margin="0" >Número da OS</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderNumbersOS>
            <ListHeaderdate>
                <ListHeaderTitle margin="0" >Data de geração da OS</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderdate>

            <ListHeaderEmail>
                <ListHeaderTitle margin="0">Email</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderEmail>


            <ListHeaderStatus>
                <ListHeaderTitle margin="0">Status</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderStatus>
        </ListHeaderContainer>
    )
}

export default ServiseOrdersListHeader