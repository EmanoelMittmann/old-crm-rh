import React from 'react'

import InconInfPositive from '../../../assets/icons/icon-info-positive.svg'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import CloseButtonCircle from '../../atoms/Buttons/CloseButtonCircle'
import { ModalContainer, ModalContainerButtons, ModalDeleteMessage, IconInfoImg } from './style.js'
import {
    ModalOverlay,
    ModalTitle
} from '../Modal/style.js'
import GreenButton from '../../atoms/Buttons/GreenButton/style';

const ModalGreen = ({ CloseButtonClickHandler, redButtonClickHandler, title, message,  }) => {

    return (
        <div>
            <ModalContainer>
                <CloseButtonCircle onClick={CloseButtonClickHandler} CloseButtonClickHandler={CloseButtonClickHandler} />
                <ModalTitle padding="1.6em 1.6em 0.7em 1.6em">
                    <IconInfoImg src={InconInfPositive} alt="Info"/>
                    {title}
                </ModalTitle>
                   <ModalDeleteMessage>{message}</ModalDeleteMessage>
                <ModalContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <GreenButton
                    onClick={redButtonClickHandler}
                    width="115px"
                    height="40px"
                    fontSize="0.9rem"
                    margin= "0 3.5em 0 1.7em"
                    >Sim</GreenButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default ModalGreen;