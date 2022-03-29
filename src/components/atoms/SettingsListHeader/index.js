import React, { useState } from "react"
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import api from '../../../api/api'
import { setJobList, setStatusList, settingsPages, setFilterOrder, setProjectTypeList, setOccupationList } from '../../../redux/actions/index.js'
import { ListHeaderContainer, ListHeaderTitle, ListHeaderOrderContainer } from '../../atoms/ListHeader/style.js'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const SettingsListHeader = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useLocation()
    const [isAsc, setIsAsc] = useState(true)
    let params = {}

    const handleFilterRequest = (paramsOrder) => {
        params.page = 1
        
        if(state.filterStatus !== "" && state.filterStatus !== " ") params.is_active = state.filterStatus

        if(state.settingsSearchFilter !== "") params.search = state.settingsSearchFilter

        params.orderField = 'name'

        params.order = paramsOrder
    }

    const displayListTitle = route => {
        if(route === "/job") return "Cargo"
        if(route === "/projectStatus") return "Status do projeto"
        if(route === "/projectType") return "Tipo de Projeto"
        if(route === "/occupation") return "Funções"
    }

    const orderSettingsList = async () => {

        setIsAsc(!isAsc)
        const paramsOrder = isAsc ? 'asc' : 'desc'
        handleFilterRequest(paramsOrder)

        const {data} = await api({
            method:'get',     
            url:`${location.pathname}`,
            params: params
        }) 

        dispatch(setFilterOrder(paramsOrder))
        if(location.pathname === "/job") dispatch(setJobList(data.data))
        if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
        if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
        if(location.pathname === "/occupation") dispatch(setOccupationList(data.data))
        dispatch(settingsPages(data.meta))

        return data
    }

    return (
        <ListHeaderContainer>
            <ListHeaderTitle onClick={() => orderSettingsList()}>
                {displayListTitle(location.pathname)}
            </ListHeaderTitle>
            <Arrows onClick={() => orderSettingsList()}/>
        </ListHeaderContainer>
    )
}

export default SettingsListHeader

