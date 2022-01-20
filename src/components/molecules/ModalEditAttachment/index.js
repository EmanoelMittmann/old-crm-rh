import React from 'react'

import CloseButton from '../../atoms/Buttons/CloseButton/index.js'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import {
    ModalTitle,
    ModalContainer,
    ModalOverlay
} from '../Modal/style.js'
import { ContainerInputs, ContainerButtons } from './style.js'

const ModalEditAttachment = ({CloseButtonClickHandler, saveHandler, setWorkload, workload, overtime, setOvertime}) => {
    return (
        <div>
            <ModalContainer>
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler}/>
                <ModalTitle padding="1.3em 1.3em 1.3em 1.6em">
                    Editar
                </ModalTitle>
                <ContainerInputs>
                    <InputWithLabel
                    inputValue={workload}
                    setInputWithLabelValue={setWorkload}
                    label="Horas Mensais"
                    width="100%"
                    widthContainer="80%"
                    padding="0em 0 1em 0"
                    />
                     <InputWithLabel
                    inputValue={overtime}
                    setInputWithLabelValue={setOvertime}
                    label="Horas extras"
                    width="100%"
                    widthContainer="80%"
                    />
                </ContainerInputs>
                <ContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton 
                    onClick={saveHandler} margin="0 3.5em 0 1.7em">
                        Salvar
                    </SaveButton>
                </ContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default ModalEditAttachment;