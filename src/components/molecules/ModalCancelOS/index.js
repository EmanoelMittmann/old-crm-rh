import React from 'react'
import exclamation from '../../../assets/icons/exclamation.svg'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import CloseButtonCirle from '../../atoms/Buttons/CloseButtonCircle/'
import RedButton from '../../atoms/Buttons/RedButton/style.js'
import { ModalContainer, ModalContainerButtons, ModalDeleteMessage, IconExclamation } from './style.js'
import {
    ModalOverlay,
    ModalTitle
} from '../Modal/style.js'

const ModalCancelOS = ({redButtonClickHandler,CloseButtonClickHandler, text }) => {

    return (
        <div>
            <ModalContainer>
                <CloseButtonCirle/>
                <ModalTitle padding="1.6em 1.6em 0.7em 1.6em">
                    <IconExclamation src={exclamation} alt="Info"/>
                    Cancelar O.S
                </ModalTitle>
                   <ModalDeleteMessage>{text}</ModalDeleteMessage>
                <ModalContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>não</CancelButton>
                    <RedButton
                    onClick={redButtonClickHandler}
                    width="115px"
                    height="40px"
                    fontSize="0.9rem"
                    margin= "0 3.5em 0 1.7em"
                    >sim, cancelar</RedButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default ModalCancelOS;