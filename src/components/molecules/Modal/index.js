import React from 'react'
import { useDispatch } from 'react-redux'

import {ModalOverlay, ModalContainer, ModalTitle, ModalContainerInput, ModalInputLabel, ModalContainerButtons} from './style.js'
import {InputLine, Input} from '../../atoms/SettingsInput/style.js'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import CloseButton from '../../atoms/Buttons/CloseButton/style.js'
import { closeModal } from '../../../redux/actions/index.js'


const Modal = () => {
    const dispatch = useDispatch()
    
    const CloseButtonClickHandler = () => {
        dispatch(closeModal())
    }

    return (
        <div>
            <ModalContainer>
                <CloseButton onClick={CloseButtonClickHandler}>X</CloseButton>
                <ModalTitle>Novo cargo</ModalTitle>
                <ModalContainerInput>
                    <InputLine width="85%">
                        <ModalInputLabel>Cargo</ModalInputLabel>
                        <Input
                            type="text"
                            placeholder=""
                            width="97%"
                            padding="0.3em 0 0 1.5em"/>
                    </InputLine>
                </ModalContainerInput>
                <ModalContainerButtons>
                    <CancelButton>Cancelar</CancelButton>
                    <SaveButton margin="0 3.5em 0 1.7em">Salvar</SaveButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default Modal;