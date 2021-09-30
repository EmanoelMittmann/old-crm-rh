import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import api from '../../../api/api.js'
import { setJobList } from '../../../redux/actions/index.js'
import {ModalOverlay, ModalContainer, ModalTitle, ModalContainerInput, ModalInputLabel, ModalContainerButtons} from './style.js'
import {InputLine, Input} from '../../atoms/SettingsInput/style.js'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import CloseButton from '../../atoms/Buttons/CloseButton'
import { closeModal } from '../../../redux/actions/index.js'


const Modal = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const state = useSelector(state => state)

    const saveButtonClickHandler = (e) => {
        if (value.length == 0) return;

        if(state.modalFunctionality.register){
            
            dispatch(closeModal())
           
            const saveJob = async () => {
                try {
                    await api({
                        method: 'post',
                        url: '/job',
                        data: {
                            name: value,
                        }
                    });

                    const {data} = await api({
                        method: 'get',
                        url: '/job',
                    });

                    dispatch(setJobList(data))
                    
                  } catch (error) {
                    console.error(error);
                  }
            }


            saveJob()

        }

        dispatch(closeModal())
        if(state.modalFunctionality.edit){
            const updateJob = async () => {
                try {
                    await api({
                        method: 'put',
                        url: `/job/${state.jobId}`,
                        data: {
                            new_name: value,
                        }
                    });

                    const {data} = await api({
                        method: 'get',
                        url: '/job',
                    });

                    dispatch(setJobList(data))
                    
                  } catch (error) {
                    console.error(error);
                  }
            }

            updateJob()

        }
    }

    const getJobOnChangeInputHandler = (e) => {
            setValue(e.target.value);   
    }

    const cancelButtonClickHandler = () => {
        dispatch(closeModal())
    }


    return (
        <div>
            <ModalContainer>
                <CloseButton/>
                <ModalTitle>
                    {state.modalFunctionality.edit ? "Editar cargo" : "Novo cargo"}
                </ModalTitle>
                <ModalContainerInput>
                    <InputLine width="85%">
                        <ModalInputLabel>Cargo</ModalInputLabel>
                        <Input
                            onChange={(e) => getJobOnChangeInputHandler(e)}
                            type="text"
                            placeholder=""
                            width="97%"
                            padding="0.3em 0 0 1.5em"/>
                    </InputLine>
                </ModalContainerInput>
                <ModalContainerButtons>
                    <CancelButton onClick={cancelButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton onClick={(e) => saveButtonClickHandler(e)} margin="0 3.5em 0 1.7em">Salvar</SaveButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default Modal;