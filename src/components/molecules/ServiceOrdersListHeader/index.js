import React from 'react'
import {
    ListHeaderName,
    ListHeaderCNPJ,
    ListHeaderRef,
    ListHeaderdate,
    ListHeaderNumbersOS,
    ListHeaderStatus
} from './style.js'
import { ListHeaderContainer, ListHeaderTitle } from '../../atoms/ListHeader/style'
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
                <ListHeaderTitle margin="0" >N° da OS</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderNumbersOS>
            <ListHeaderdate>
                <ListHeaderTitle margin="0" >Geração da OS</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderdate>

            <ListHeaderRef>
                <ListHeaderTitle margin="0">Referência</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderRef>


            <ListHeaderStatus>
                <ListHeaderTitle margin="0">Status</ListHeaderTitle>
                <Arrows onClick={sortByName} />
            </ListHeaderStatus>
        </ListHeaderContainer>
    )
}

export default ServiseOrdersListHeader