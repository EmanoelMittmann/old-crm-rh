import React, { useLayoutEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { toast } from 'react-toastify'

import api from '../../../api/api.js'
import { setJobList, setProjectTypeList, settingsPages, setFilterOrder, setFilterStatus, setSearchName, closeModal, setOccupationList } from '../../../redux/actions/index.js'

import InputWithLabel  from '../../atoms/InputWithLabel'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import CloseButton from '../../atoms/Buttons/CloseButton'
import { DefaultToast } from '../../atoms/Toast/DefaultToast'

import {
    ModalOverlay,
    ModalContainer,
    ModalTitle,
    ModalContainerButtons
} from './style.js'

const Modal = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [inputWithLabelValue, setInputWithLabelValue] = useState("")
    const state = useSelector(state => state)

    const CloseButtonClickHandler = () => {
        dispatch(closeModal())
    }

    const resetFilters = () => {
        dispatch(setFilterOrder(''))
        dispatch(setFilterStatus(''))
        dispatch(setSearchName(''))
    }

    const displayModalTitle = route => {
        if(route === "/job") {
            return state.modalFunctionality.edit ? "Editar cargo" : "Novo cargo"
        }
        if(route === "/projectType") {
            return state.modalFunctionality.edit ? "Editar tipo de projeto" : "Novo tipo de projeto"
        }
        if(route === "/occupation") {
            return state.modalFunctionality.edit ? "Editar função" : "Nova função"
        }
    }

     const displayModalInputLabel = route => {
        if(route === "/job") return "Cargo"
        if(route === "/projectType") return "Tipo de Projeto"
        if(route === "/occupation") return "Função"
    }

    let params
    
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

    const saveButtonClickHandler = (e) => {
        if (inputWithLabelValue.length == 0) return

        if(state.modalFunctionality.register){
            dispatch(closeModal())
            
            const saveJob = async () => {
                try {
                    await api({
                        method: 'post',
                        url: '/job',
                        data: {
                            name: inputWithLabelValue,
                        }
                    })

                    const {data} = await api({
                        method: 'get',
                        url: '/job',
                    })

                    dispatch(setJobList(data.data))
                    dispatch(settingsPages(data.meta))
                    resetFilters()

                    return data.data && toast.success(<DefaultToast text="Cargo cadastrado!"/>)
                    
                } catch (error) {
                    return error.message
                }
            }

            const saveProjectType = async () => {
                try {
                    await api({
                        method: 'post',
                        url: '/projectType',
                        data: {
                            name: inputWithLabelValue,
                        }
                    })

                    const {data} = await api({
                        method: 'get',
                        url: '/projectType',
                    })
                    ///resetar aqui o order
                    dispatch(setProjectTypeList(data.data))
                    dispatch(settingsPages(data.meta))
                    resetFilters()

                    return data.data && toast.success(<DefaultToast text="Tipo de Projeto cadastrado!"/>)
                    
                } catch (error) {
                    return error.message
                }
            }

            const saveOccupation = async () => {
                try {
                    await api({
                        method: 'post',
                        url: '/occupation',
                        data: {
                            name: inputWithLabelValue,
                        }
                    })

                    const {data} = await api({
                        method: 'get',
                        url: '/occupation',
                    })

                    dispatch(setOccupationList(data.data))
                    dispatch(settingsPages(data.meta))
                    resetFilters()

                    return data.data && toast.success(<DefaultToast text="Nova função cadastrada!"/>)
                    
                } catch (error) {
                    return error.message
                }
            }

            if(location.pathname === "/job") return saveJob()
            if(location.pathname === "/projectType") return saveProjectType()
            if(location.pathname === "/occupation") return saveOccupation()
        }

        if(state.modalFunctionality.edit){
            dispatch(closeModal())

            const updateJob = async () => {
                try {
                    await api({
                        method: 'put',
                        url: `/job/${state.jobId}`,
                        data: {
                            name: inputWithLabelValue,
                        }
                    })

                    const {data} = await api({
                        method: 'get',
                        url: '/job',
                        params: params
                    })
                   
                    dispatch(setJobList(data.data))
                    dispatch(settingsPages(data.meta))

                    return data.data && toast.success(<DefaultToast text="Cargo atualizado!"/>)
                } catch (error) {
                    return error.message
                }
            }

            const updateProjectType = async () => {
                try {
                    await api({
                        method: 'put',
                        url: `/projectType/${state.projectTypeId}`,
                        data: {
                            name: inputWithLabelValue,
                        }
                    })

                    const {data} = await api({
                        method: 'get',
                        url: '/projectType',
                        params: params
                    })

                    dispatch(setProjectTypeList(data.data))
                    dispatch(settingsPages(data.meta))

                    return data.data && toast.success(<DefaultToast text="Tipo do projeto atualizado!"/>)
                } catch (error) {
                    return error.message
                }
            }
            
            const updateOccupation = async () => {
                try {
                    await api({
                        method: 'put',
                        url: `/occupation/${state.occupationId}`,
                        data: {
                            name: inputWithLabelValue,
                        }
                    })

                    const {data} = await api({
                        method: 'get',
                        url: '/occupation',
                        params: params
                    })
                   
                    dispatch(setOccupationList(data.data))
                    dispatch(settingsPages(data.meta))

                    return data.data && toast.success(<DefaultToast text="Função atualizado!"/>)
                } catch (error) {
                    return error.message
                }
            }

            if(location.pathname === "/job") return updateJob()
            if(location.pathname === "/projectType") return updateProjectType()
            if(location.pathname === "/occupation") return updateOccupation()
        }
    }

    const cancelButtonClickHandler = () => {
        dispatch(closeModal())
    }

    const editJob = state.jobs.filter(job => {
        if(state.jobId === job.id) return job
    })

    const editProjectType = state.projectType.filter(projectType => {
        if(state.projectTypeId === projectType.id) return projectType
    })

    const editOccupation = state.occupation.filter(occupation => {
        if(state.occupationId === occupation.id) return occupation
    })
    
    const jobName = () => {
        if(state.modalFunctionality.edit !== true) return
        const [{name}] = editJob
        setInputWithLabelValue(name)
    }

    const projectTypeName = () => {
        if(state.modalFunctionality.edit !== true) return
        const [{name}] = editProjectType
        setInputWithLabelValue(name)
    }

    const occupationName = () => {
        if(state.modalFunctionality.edit !== true) return
        const [{name}] = editOccupation
        setInputWithLabelValue(name)
    }

    const displayNameBeingEdited = () => {
        if(location.pathname === "/job") return jobName()
        if(location.pathname === "/projectType") return projectTypeName()
        if(location.pathname === "/occupation") return occupationName()
    }

    useLayoutEffect(() => {
        displayNameBeingEdited()
    },[])

    return (
        <div>
            <ModalContainer>
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler}/>
                <ModalTitle padding="1.6em">
                    {displayModalTitle(location.pathname)}
                </ModalTitle>
                    <InputWithLabel
                        label={displayModalInputLabel(location.pathname)}
                        onChange={e=> setInputWithLabelValue(e.target.value)}
                        handleBlur={() => {}}
                        value={inputWithLabelValue}
                        padding="0em 0em 0em 1.5em"
                        width="85%"
                        justify="center"
                    />
                <ModalContainerButtons>
                    <CancelButton onClick={() => cancelButtonClickHandler()}>Cancelar</CancelButton>
                    <SaveButton 
                        onClick={(e) => saveButtonClickHandler(e)} 
                        margin="0 3.5em 0 1.7em"
                    > 
                        Salvar 
                    </SaveButton>
                </ModalContainerButtons>
            </ModalContainer>
            <ModalOverlay/>
        </div>
    )
}

export default Modal