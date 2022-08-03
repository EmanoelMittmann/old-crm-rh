import React from 'react'
import {
    ListHeaderName,
    ListHeaderJob,
    ListHeaderEmail,
    ListHeaderPhoneNumbers,
    ListHeaderPlace,
    ListHeaderStatus
} from './style.js'
import { ListHeaderContainer, ListHeaderTitle } from '../ListHeader/style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const ProfessionalsListHeader = ({sortByName}) => {
    return (
        <ListHeaderContainer>
            <ListHeaderName>
                <ListHeaderTitle margin="0">Nome</ListHeaderTitle>
                <Arrows onClick={sortByName}/>
            </ListHeaderName>

            <ListHeaderJob>
                <ListHeaderTitle margin="0">Cargo</ListHeaderTitle>
            </ListHeaderJob>

            <ListHeaderEmail>
                <ListHeaderTitle margin="0" >E-mail</ListHeaderTitle>
            </ListHeaderEmail>

            <ListHeaderPhoneNumbers>
                <ListHeaderTitle margin="0">Telefone</ListHeaderTitle>
            </ListHeaderPhoneNumbers>

            <ListHeaderPlace>
                <ListHeaderTitle margin="0">Local</ListHeaderTitle>
            </ListHeaderPlace>

            <ListHeaderStatus>
                <ListHeaderTitle margin="0">Status</ListHeaderTitle>
            </ListHeaderStatus>
        </ListHeaderContainer>
    )
}

export default ProfessionalsListHeader