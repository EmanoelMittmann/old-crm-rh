import React from 'react'

import User from '../../../assets/user.png'
import CloseButton from '../../atoms/Buttons/CloseButton/index.js'
import {
    ModalTitle,
    ModalContainer,
    ModalOverlay
} from '../Modal/style.js'
import { ContainerTeam } from './style.js'
import { TeamMemberPic } from '../../atoms/TeamMemberPic/style.js';

const ModalProjectTeam = ({CloseButtonClickHandler, users}) => {
    return (
        <div>
            <ModalContainer>
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler}/>
                <ModalTitle padding="1.6em">
                    Team
                </ModalTitle>
                <ContainerTeam>
                    {users.map(user => {
                        return <TeamMemberPic  margin="0 0.7em 0 0" key={user.id} size="45px" src={user?.avatar || User}/>
                    })}
                </ContainerTeam>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default ModalProjectTeam;