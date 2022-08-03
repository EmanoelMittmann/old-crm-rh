import React from 'react'

import IconInfo from '../../../assets/icons/icon-info.svg';
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import CloseButton from '../../atoms/Buttons/CloseButton/index.js'
import RedButton from '../../atoms/Buttons/RedButton/style.js'
import { ModalContainer, ModalContainerButtons, ModalDeleteMessage, IconInfoImg } from './style.js'
import {
    ModalOverlay,
    ModalTitle
} from '../Modal/style.js'

const ModalRed = ({CloseButtonClickHandler, redButtonClickHandler, title, message}) => {

    return (
        <div>
            <ModalContainer>
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler}/>
                <ModalTitle padding="1.6em 1.6em 0.7em 1.6em">
                <IconInfoImg src={IconInfo} alt="Info"/>
                    {title}
                </ModalTitle>
                   <ModalDeleteMessage>{message}</ModalDeleteMessage>
                <ModalContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <RedButton
                    onClick={redButtonClickHandler}
                    width="115px"
                    height="40px"
                    fontSize="0.9rem"
                    margin= "0 3.5em 0 1.7em"
                    >Sim</RedButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default ModalRed;