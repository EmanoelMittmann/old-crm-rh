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

const ModalDelete = ({CloseButtonClickHandler, deleteHandler, id}) => {

    const redButtonClickHandler = () => {
        deleteHandler(id)
        CloseButtonClickHandler()
    }


    return (
        <div>
            <ModalContainer>
                <CloseButton onClick={CloseButtonClickHandler}/>
                <ModalTitle padding="1.6em 1.6em 0.7em 1.6em">
                <IconInfoImg src={IconInfo} alt="Info"/>
                    Excluir profissional
                </ModalTitle>
                   <ModalDeleteMessage>Tem certeza que deseja excluir profissional?</ModalDeleteMessage>
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

export default ModalDelete;