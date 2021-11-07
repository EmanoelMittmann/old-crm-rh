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

const ProjectsListHeader = () => {
    return (
        <ListHeaderContainer>

            <ListHeaderProjeto>
                <ListHeaderTitle>Projeto</ListHeaderTitle>
                <Arrows/>
            </ListHeaderProjeto>

            <ListHeaderType>
                <ListHeaderTitle>Tipo</ListHeaderTitle>
                <Arrows/>
            </ListHeaderType>

            <ListHeaderBeginning>
                <ListHeaderTitle>Início</ListHeaderTitle>
                <Arrows/>
            </ListHeaderBeginning>

            <ListHeaderTime>
                <ListHeaderTitle>Time</ListHeaderTitle>
                <Arrows/>
            </ListHeaderTime>

            <ListHeaderStatus>
                <ListHeaderTitle>Status</ListHeaderTitle>
                <Arrows/>
            </ListHeaderStatus>
        </ListHeaderContainer>
    )
}

export default ProjectsListHeader;