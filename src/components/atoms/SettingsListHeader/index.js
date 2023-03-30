import React, { useState } from "react"
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import api from '../../../api/api'
import { setJobList, setStatusList, settingsPages, setFilterOrder, setProjectTypeList, setOccupationList } from '../../../redux/actions/index.js'
import { ListHeaderContainer, ListHeaderTitle } from '../../atoms/ListHeader/style.js'


const handleDisplayTitle = {
    job: 'Cargo',
    projectStatus: 'Status do projeto',
    projectType: 'Tipo de Projeto',
    occupation: 'Funções'
}

const SettingsListHeader = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useLocation()
    const [isAsc, setIsAsc] = useState(true)
    let params = {}
    let path = location.pathname.slice(1);

    const handleFilterRequest = (paramsOrder) => {
        params.page = 1
        
        if(!state.filterStatus.trim()) params.is_active = state.filterStatus

        if(state.settingsSearchFilter !== "") params.search = state.settingsSearchFilter

        params.orderField = 'name'

        params.order = paramsOrder
    }

    const displayListTitle = route => {
        return handleDisplayTitle[route]
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
        dispatch(settingsPages(data.meta))

        return data
    }

    return (
        <ListHeaderContainer>
            <ListHeaderTitle onClick={() => orderSettingsList()} left='3em'>
                {displayListTitle(path)}
            </ListHeaderTitle>
        </ListHeaderContainer>
    )
}

export default SettingsListHeader

