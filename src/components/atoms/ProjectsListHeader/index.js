import React from 'react'
import {
    ListHeaderProjeto,
    ListHeaderType,
    ListHeaderBeginning,
    ListHeaderTime,
    ListHeaderStatus,
    ListHeaderId
} from './style.js'
import { ListHeaderContainer, ListHeaderTitle } from '../ListHeader/style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const fields = {
    ID: 'id',
    NAME: 'name',
    DATA_START: 'date_start',
}

const ProjectsListHeader = ({ fnOrder }) => {

    return (
        <ListHeaderContainer>
            <ListHeaderId>
                <ListHeaderTitle onClick={() => fnOrder(fields.ID)} left='1em'>Id</ListHeaderTitle>
                <Arrows onClick={() => fnOrder(fields.ID)}/>
            </ListHeaderId>

            <ListHeaderProjeto>
                <ListHeaderTitle onClick={() => fnOrder(fields.NAME)} left='2.6em'>Projeto</ListHeaderTitle>
                <Arrows onClick={() => fnOrder(fields.NAME)}/>
            </ListHeaderProjeto>

            <ListHeaderType>
                <ListHeaderTitle left ="0.8em">Tipo</ListHeaderTitle>
            </ListHeaderType>

            <ListHeaderBeginning>
                <ListHeaderTitle  onClick={()=> fnOrder(fields.DATA_START)} left="0.3em">Início</ListHeaderTitle>
                <Arrows onClick={() => fnOrder(fields.DATA_START)}/>
            </ListHeaderBeginning>

            <ListHeaderTime>
                <ListHeaderTitle left="0.8em">Data Final</ListHeaderTitle>
            </ListHeaderTime>

            <ListHeaderStatus>
                <ListHeaderTitle>Status</ListHeaderTitle>
            </ListHeaderStatus>
        </ListHeaderContainer>
    )
}

export default ProjectsListHeader