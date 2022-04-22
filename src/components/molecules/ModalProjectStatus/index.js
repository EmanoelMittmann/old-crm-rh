import React, { useState } from 'react'
import api from '../../../api/api.js'
import CloseButton from '../../atoms/Buttons/CloseButton/index.js'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import InputSelectEdit from '../../atoms/InputSelectEdit/index.js'
import {
    ModalContainerButtons,
    ModalTitle,
    ModalContainer,
    ModalOverlay
} from '../Modal/style.js'
import { ContainerInputSelect } from './style.js'


export const ModalProjectStatus = ({CloseButtonClickHandler, statusId, projectId, options}) => {
    const [selectedOption, setSelectedOption] = useState('')
    const updateStatusProject = async () => {
        try{
            await api({
                method:'patch',     
                url:`/updateStatusProject/${projectId}`,
                data: {
                    project_status_id: +selectedOption
                }
            }) 
        }catch(err){
        }
        window.location.reload()
        CloseButtonClickHandler()
    }

    return (
        <div>
            <ModalContainer>
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler}/>
                <ModalTitle padding="1.6em">
                    Status
                </ModalTitle>
                <ContainerInputSelect>
                    <InputSelectEdit
                    optionId={statusId}
                    setSelectedOption={setSelectedOption}
                    options={options}
                    width="350px"
                    />
                </ContainerInputSelect>
                <ModalContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton onClick={() => updateStatusProject(selectedOption)} margin="0 3.5em 0 1.7em">Salvar</SaveButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}
