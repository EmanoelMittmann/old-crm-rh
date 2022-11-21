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
                <ListHeaderTitle onClick={() => fnOrder(fields.NAME)} left='3em'>Projeto</ListHeaderTitle>
                <Arrows onClick={() => fnOrder(fields.NAME)}/>
            </ListHeaderProjeto>

            <ListHeaderType>
                <ListHeaderTitle left='3em'>Tipo</ListHeaderTitle>
            </ListHeaderType>

            <ListHeaderBeginning>
                <ListHeaderTitle onClick={()=> fnOrder(fields.DATA_START)} left='3em'>Início</ListHeaderTitle>
                <Arrows onClick={() => fnOrder(fields.DATA_START)}/>
            </ListHeaderBeginning>

            <ListHeaderTime>
                <ListHeaderTitle margin="0">Time</ListHeaderTitle>
            </ListHeaderTime>

            <ListHeaderStatus>
                <ListHeaderTitle left='1.5em'>Status</ListHeaderTitle>
            </ListHeaderStatus>
        </ListHeaderContainer>
    )
}

export default ProjectsListHeader