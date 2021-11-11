import React from 'react'

import {
    ListHeaderName,
    ListHeaderJob,
    ListHeaderEmail,
    ListHeaderPhoneNumbers,
    ListHeaderPlace
} from './style.js'
import { ListHeaderContainer, ListHeaderTitle } from '../ListHeader/style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const ProfessionalsListHeader = () => {
    return (
            <ListHeaderContainer>
    
                <ListHeaderName>
                    <ListHeaderTitle margin="0">Nome</ListHeaderTitle>
                    <Arrows/>
                </ListHeaderName>
    
                <ListHeaderJob>
                    <ListHeaderTitle margin="0">Cargo</ListHeaderTitle>
                    <Arrows/>
                </ListHeaderJob>
    
                <ListHeaderEmail>
                    <ListHeaderTitle margin="0" >E-mail</ListHeaderTitle>
                    <Arrows/>
                </ListHeaderEmail>
    
                <ListHeaderPhoneNumbers>
                    <ListHeaderTitle margin="0">Telefone</ListHeaderTitle>
                    <Arrows/>
                </ListHeaderPhoneNumbers>
    
                <ListHeaderPlace>
                    <ListHeaderTitle margin="0">Local</ListHeaderTitle>
                    <Arrows/>
                </ListHeaderPlace>
            </ListHeaderContainer>
    )
}

export default ProfessionalsListHeader;