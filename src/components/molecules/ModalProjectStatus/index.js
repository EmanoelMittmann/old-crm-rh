import React, { useState, useEffect } from 'react'

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
import { formatFirstLetter } from '../../utils/formatFirstLetter.js'

export const ModalProjectStatus = ({CloseButtonClickHandler, statusId}) => {
    const [statusOptions, setStatusOptions] = useState([])

    const saveStatus = () => {

    }

    const getProjectTypeList = async () => {
        const {data} = await api({
            method:'get',     
            url:`/projectStatus`,
        }); 
        const newStatusOptions = formatFirstLetter(data.data)
        setStatusOptions(newStatusOptions); 
        return data;
    }


    useEffect(() => {
        getProjectTypeList()
    }, [])


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
                    // setSelectedOption={setProjectType}
                    options={statusOptions}
                    width="350px"
                    />
                </ContainerInputSelect>
                <ModalContainerButtons>
                    <CancelButton onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton onClick={(e) => saveStatus(e)} margin="0 3.5em 0 1.7em">Salvar</SaveButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}
