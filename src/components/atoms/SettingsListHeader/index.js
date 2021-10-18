import React, { useState } from "react"
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import api from '../../../api/api'
import { setJobList, setStatusList, settingsPages, setFilterOrder, setProjectTypeList } from '../../../redux/actions/index.js'
import { ListHeaderContainer, ListHeaderTitle } from '../../ListHeader/style.js'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const SettingsListHeader = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useLocation();
    const [isAsc, setIsAsc] = useState(true)

    const displayListTitle = route => {
        if(route === "/job") return "Cargo"
        if(route === "/projectStatus") return "Status"
        if(route === "/projectType") return "Tipo de Projeto"
    }

    const orderSettingsList = async () => {
        const isActive = state.filterStatus
        const paramsOrder = isAsc ? 'asc' : 'desc'

        setIsAsc(!isAsc)

        const {data} = await api({
            method:'get',     
            url:`${location.pathname}`,
            params: {
                page: 1,
                is_active: isActive,
                orderField: 'name',
                order: paramsOrder,
                search: state.settingsSearchFilter,
            }
        }); 

        dispatch(setFilterOrder(paramsOrder))
        if(location.pathname === "/job") dispatch(setJobList(data.data));
        if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
        if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
        dispatch(settingsPages(data.meta));


        return data;
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

export default SettingsListHeader;

