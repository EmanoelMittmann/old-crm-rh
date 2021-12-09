import React from 'react'

import CloseButton from '../../atoms/Buttons/CloseButton/index.js'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import InputText from '../../atoms/InputText'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import {
    ModalContainerButtons,
    ModalTitle,
    ModalContainer,
    ModalOverlay
} from '../Modal/style.js'
import { ContainerInput } from './style.js'

const ModalEditAttachment = ({CloseButtonClickHandler, saveHandler, setValue, value, editValue}) => {
    return (
        <div>
            <ModalContainer>
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler}/>
                <ModalTitle padding="1.6em">
                    Editar
                </ModalTitle>
                <ContainerInput>
                    <InputWithLabel
                    inputValue={value}
                    setinputWithLabelValue={setValue}
                    // editValue={}
                    label="Horas Mensais"
                    width="100%"
                    widthContainer="80%"
                    />
                </ContainerInput>
                <ModalContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton 
                    onClick={saveHandler} margin="0 3.5em 0 1.7em">
                        Salvar
                    </SaveButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default ModalEditAttachment;