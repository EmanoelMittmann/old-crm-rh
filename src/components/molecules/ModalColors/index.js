import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router'

import api from '../../../api/api.js'
import { setStatusList, settingsPages, setFilterOrder, setFilterStatus, closeModal, setSearchName} from '../../../redux/actions/index.js'
import {InputLine, DefaultInput} from '../../atoms/DefaultInput/style.js'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import CloseButton from '../../atoms/Buttons/CloseButton'
import InputColors from '../../atoms/InputColors'
import { ModalContainerButtons, ModalInputContainer } from './style.js'
import {
    ModalOverlay,
    ModalContainer,
    ModalTitle,
} from '../Modal/style.js'

const ModalColors = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const [value, setValue] = useState("")
    const state = useSelector(state => state)
    let params;

    if(state.filterOrder !== ""){
        params = {
            page: `${state.settingsPagesFilter.current_page}`,
            is_active: state.filterStatus,
            search: state.settingsSearchFilter,
            orderField: 'name',
            order: state.filterOrder
        }
    }

    if(state.filterOrder === ""){
        params = {
            page: `${state.settingsPagesFilter.current_page}`,
            is_active: state.filterStatus,
            search: state.settingsSearchFilter,
        }
    }

    const resetFilters = () => {
        dispatch(setFilterOrder(''))
        dispatch(setFilterStatus('all'))
        dispatch(setSearchName(''))
    }

    const saveStatus = async () => {
        try {
            await api({
                method: 'post',
                url: '/projectStatus',
                data: {
                    name: value,
                }
            });

            const {data} = await api({
                method: 'get',
                url: '/projectStatus',
            });

            dispatch(setStatusList(data.data))
            dispatch(settingsPages(data.meta));
            resetFilters()
            
        } catch (error) {
            console.error(error);
        }
    }

    const updateStatus = async () => {
        try {
            await api({
                method: 'put',
                url: `/projectStatus/${state.statusId}`,
                data: {
                    name: value,
                }
            });

            const {data} = await api({
                method: 'get',
                url: '/projectStatus',
                params: params
            });

            dispatch(setStatusList(data.data))
            dispatch(settingsPages(data.meta));
            
        } catch (error) {
            console.error(error);
        }
    }

    const saveButtonClickHandler = (e) => {
        if (value.length == 0) return;

        if(state.modalFunctionality.register){
            saveStatus()
            dispatch(closeModal())
        }

        if(state.modalFunctionality.edit){
            updateStatus()
            dispatch(closeModal())
        }
    }

    const getJobOnChangeInputHandler = (e) => {
        return setValue(e.target.value); 
    }

    const cancelButtonClickHandler = () => {
        dispatch(closeModal())
    }

    const editStatus = state.status.filter(status => {
        if(state.statusId === status.id) return status
    });

    const statusName = () => {
        if(state.modalFunctionality.edit !== true) return;

        const [{name}] = editStatus;
        return name;
    };

    return (
        <div>
            <ModalContainer>
                <CloseButton/>
                <ModalTitle padding="1.3em 0 1.3em 1.6em">
                    {state.modalFunctionality.edit ? "Editar status" : "Novo status"}
                </ModalTitle>
                        <ModalInputContainer>
                            <InputLine width="85%">
                                    <DefaultInput
                                        onChange={(e) => getJobOnChangeInputHandler(e)}
                                        type="text"
                                        defaultValue={statusName()}
                                        width="97%"
                                        padding="0.3em 0 0 1.5em"/>
                            </InputLine>
                            <InputColors/>
                        </ModalInputContainer>
                <ModalContainerButtons>
                    <CancelButton onClick={cancelButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton onClick={(e) => saveButtonClickHandler(e)} margin="0 3.5em 0 1.7em">Salvar</SaveButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default ModalColors;