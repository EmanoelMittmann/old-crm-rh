import React from 'react'
import {
    ListHeaderProjeto,
    ListHeaderType,
    ListHeaderBeginning,
    ListHeaderTime,
    ListHeaderStatus
} from './style.js'
import { ListHeaderContainer, ListHeaderTitle } from '../ListHeader/style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const fields = {
    NAME: 'name',
    DATA_START: 'date_start',
}

const ProjectsListHeader = ({ fnOrder }) => {

    return (
        <ListHeaderContainer>
            <ListHeaderProjeto>
                <ListHeaderTitle onClick={() => fnOrder(fields.NAME)}>Projeto</ListHeaderTitle>
                <Arrows onClick={() => fnOrder(fields.NAME)}/>
            </ListHeaderProjeto>

            <ListHeaderType>
                <ListHeaderTitle>Tipo</ListHeaderTitle>
            </ListHeaderType>

            <ListHeaderBeginning>
                <ListHeaderTitle onClick={()=> fnOrder(fields.DATA_START)}>Início</ListHeaderTitle>
                <Arrows onClick={() => fnOrder(fields.DATA_START)}/>
            </ListHeaderBeginning>

            <ListHeaderTime>
                <ListHeaderTitle margin="0">Time</ListHeaderTitle>
            </ListHeaderTime>

            <ListHeaderStatus>
                <ListHeaderTitle>Status</ListHeaderTitle>
            </ListHeaderStatus>
        </ListHeaderContainer>
    )
}

export default ProjectsListHeader