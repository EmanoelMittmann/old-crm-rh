import React, { useState, useEffect } from 'react'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import {
    ModalTitle,
    ModalContainer,
    ModalOverlay
} from '../Modal/style.js'
import { ContainerInputs, ContainerButtons, ProfessionalData } from './style.js'
import CloseButtonCircle from '../../atoms/Buttons/CloseButtonCircle'
import api from '../../../api/api.js'



const ModalEditAttachment = ({ CloseButtonClickHandler, saveHandler, setWorkload, workload, overtime, setOvertime}) => {
    const [hoursPofessional, sethoursProfessional] = useState([])

   

    return (
        <div>
            <ModalContainer>
                <ModalTitle padding="1.3em 1.3em 1.3em 1.6em">
                    <CloseButtonCircle CloseButtonClickHandler={CloseButtonClickHandler} />
                    Editar Dados do Profissional
                </ModalTitle>
                    <ProfessionalData>

                    </ProfessionalData>

                <ContainerInputs>
                    <InputWithLabel
                        value={workload}
                        onChange={e => setWorkload(e.target.value)}
                        label="Horas Mensais"
                        widthContainer="50%"
                        padding="0em 0 1em 0"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                    <InputWithLabel
                        value={overtime}
                        onChange={e => setOvertime(e.target.value)}
                        label="Horas extras"
                        widthContainer="50%"
                        handleBlur={() => { }}
                        error={() => { }}
                    />
                </ContainerInputs>
                <ContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton
                        onClick={saveHandler}
                        margin="0 3.5em 0 1.7em"
                    >
                        Salvar
                    </SaveButton>
                </ContainerButtons>
            </ModalContainer>
            <ModalOverlay />
        </div>
    )
}

export default ModalEditAttachment