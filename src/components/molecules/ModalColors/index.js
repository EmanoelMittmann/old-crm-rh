import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import api from '../../../api/api.js'

import {
    setStatusList,
    settingsPages,
    setFilterOrder,
    setFilterStatus,
    closeModal,
    setSearchName,
    setStatusColors,
} from '../../../redux/actions/index.js'

import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import CloseButton from '../../atoms/Buttons/CloseButton'
import InputSelect from '../../atoms/InputSelect'
import InputSelectEdit from '../../atoms/InputSelectEdit'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'
import { DefaultToast } from '../../atoms/Toast/DefaultToast.js'

import { ModalContainerButtons, ModalInputContainer } from './style.js'
import {
    ModalOverlay,
    ModalContainer,
    ModalTitle,
} from '../Modal/style.js'

const ModalColors = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const [selectedOption, setSelectedOption] = useState("")

    const state = useSelector(state => state)
    let params
    let colorId

    if (state.filterOrder !== "") {
        params = {
            page: `${state.settingsPagesFilter.current_page}`,
            is_active: state.filterStatus,
            search: state.settingsSearchFilter,
            orderField: 'name',
            order: state.filterOrder
        }
    }

    if (state.filterOrder === "") {
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

            const { data } = await api({
                method: 'get',
                url: '/projectStatus',
            });

            dispatch(setStatusList(data.data))
            dispatch(settingsPages(data.meta));
            resetFilters()

            return data.data && toast.success(<DefaultToast text="Status do Projeto cadastrado!" />)

        } catch (error) {
            return toast.warn(<DefaultToast text={'Escreva o Status!'}/>)
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
            getStatus()

            return toast.success(<DefaultToast text="Status do Projeto atualizado!" />)
        } catch (error) {
            return error
        }
    }
    
    const getStatus = async() => {
        const { data } = await api({
            method: 'get',
            url: '/projectStatus',
            params: params
        });

        dispatch(setStatusList(data.data))
        dispatch(settingsPages(data.meta))
    }

    const saveButtonClickHandler = (e) => {
        if (value.length === 0) return

        if (state.modalFunctionality.register) {
            saveStatus()
            dispatch(closeModal())
        }

        if (state.modalFunctionality.edit) {
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

    
    const statusName = () => {        
        const editStatus = state.status.find(status => {
            if (state.statusId === status.id) return status
        });

        return {name: editStatus.name, colorId: editStatus.color.id}       
    };

    const getStatusColor = async () => {
        try {
            const { data } = await api({
                method: 'get',
                url: '/color'
            })

            dispatch(setStatusColors(data))

        } catch (error) {
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
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler} />
                <ModalTitle padding="1.3em 0 1.3em 1.6em">
                    {state.modalFunctionality.edit ? "Editar status do projeto" : "Novo status do projeto"}
                </ModalTitle>
                <ModalInputContainer>

                    <InputWithLabel
                        label="Status"
                        onChange={e => setValue(e.target.value)}
                        value={statusName().name}
                        width="100%"
                        widthContainer="85%"
                        handleBlur={() => { }}
                        justify="center"
                        padding="0 0 0.8em 0" />

                    {state.modalFunctionality.edit ?
                        (
                            <InputSelectEdit
                                label="Status"
                                optionId={statusName().colorId}
                                setSelectedOption={setSelectedOption}
                                width="85%"
                                options={state.statusColors}
                            ></InputSelectEdit>
                        ) :
                        (
                            <InputSelect
                                onChange={e => setSelectedOption(e.target.value)}
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
            <ModalOverlay />
        </div>
    )
}

export default ModalColors