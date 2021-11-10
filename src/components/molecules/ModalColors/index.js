import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router'

import api from '../../../api/api.js'
import {InputLine, DefaultInput} from '../../atoms/DefaultInput/style.js'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import CloseButton from '../../atoms/Buttons/CloseButton'
import InputSelect from '../../atoms/InputSelect'
import InputSelectEdit from '../../atoms/InputSelectEdit'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import { ModalContainerButtons, ModalInputContainer } from './style.js'
import { 
    setStatusList,
    settingsPages,
    setFilterOrder,
    setFilterStatus,
    closeModal,
    setSearchName,
    setStatusColors,
} from '../../../redux/actions/index.js'
import {
    ModalOverlay,
    ModalContainer,
    ModalTitle,
} from '../Modal/style.js'

const ModalColors = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const [value, setValue] = useState("")
    const [selectedOption, setSelectedOption] = useState("")
    
    const state = useSelector(state => state)
    let params;
    let colorId;

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
                    colors_id: selectedOption
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
                    color: selectedOption
                }
            });

            const {data} = await api({
                method: 'get',
                url: '/projectStatus',
                params: params
            });
            
            dispatch(setStatusList(data.data))
            dispatch(settingsPages(data.meta));
            
            console.log(data.data);

        } catch (error) {
            console.error(error);
        }
    }
    console.log(state.status);

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

    const CloseButtonClickHandler = () => {
        dispatch(closeModal())
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
         [{colors_id: colorId}] = editStatus
        return name;
    };

    const getStatusColor = async () => {
        try{
            const {data} = await api({
                method: 'get',
                url: '/color'
            })

            dispatch(setStatusColors(data))

        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getStatusColor()
    }, [])

    //pegar a cor selecionada referente a um status especifico
    //status especifico

    //mandar para o input
    // o que o input tem que fazer?
    //se o id da cor do status sendo editado for === uma das options de cores então colocar como selected aquela cor


    return (
        <div>
            <ModalContainer>
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler}/>
                <ModalTitle padding="1.3em 0 1.3em 1.6em">
                    {state.modalFunctionality.edit ? "Editar status do projeto" : "Novo status do projeto"}
                </ModalTitle>
                        <ModalInputContainer>
                        
                            <InputWithLabel
                            label="Status"
                            setinputWithLabelValue={setValue}
                            editValue={statusName()}
                            width="100%"
                            widthContainer="85%"
                            justify="center"
                            padding="0 0 0.8em 0"/>

                            {state.modalFunctionality.edit ? 
                            (
                                <InputSelectEdit
                                label="Status"
                                optionId={colorId}
                                setSelectedOption={setSelectedOption}
                                width="85%"
                                options={state.statusColors}
                                ></InputSelectEdit>
                            ) : 
                            (
                                <InputSelect 
                                setSelectedOption={setSelectedOption}
                                placeholder="Color"
                                width="100%"
                                lineWidth="85%"
                                options={state.statusColors}
                                />
                            )}

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