import React from 'react'
import { ListHeaderContainer, ListHeaderTitle } from '../ListHeader/style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'
import {ListHeaderName, ListHeaderSend, ListHeaderDeadline, ListHeaderNF} from './style.js'

const InvoiceListHeader = () => {

    const sortByName = () => {

    }

    return (
        <ListHeaderContainer>
            <ListHeaderName>
                <ListHeaderTitle>Profissional</ListHeaderTitle>
                <Arrows onClick={() => sortByName()}/>
            </ListHeaderName>
            <ListHeaderSend>
                <ListHeaderTitle>Envio</ListHeaderTitle>
            </ListHeaderSend>
            <ListHeaderDeadline>
                <ListHeaderTitle>Prazo envio</ListHeaderTitle>
            </ListHeaderDeadline>
            <ListHeaderNF>
                <ListHeaderTitle>NF</ListHeaderTitle>
            </ListHeaderNF>
        </ListHeaderContainer>
    )
}

export default InvoiceListHeader;