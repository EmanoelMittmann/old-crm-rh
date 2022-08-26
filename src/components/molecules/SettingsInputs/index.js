import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { useSelector } from 'react-redux'

import {
    setJobList,
    setStatusList,
    settingsPages,
    setProjectTypeList,
    setFilterStatus,
    setSearchName,
    setOccupationList
} from '../../../redux/actions/index.js'
import api from '../../../api/api.js'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'
import { SettingsInputsContainer } from './style.js'

export const SettingsInputs = () => {
    const state = useSelector(state => state)
    const history = useHistory()
    const dispatch = useDispatch()
    const location = useLocation()
    const [selectedOption, setSelectedOption] = useState('');
    const [searchResult, setSearchResult] = useState('')

    let params = {}

    const handleFilterRequest = () => {
        params.page = 1

        if(selectedOption !== " " && selectedOption !== "") params.is_active = selectedOption

        if(state.settingsSearchFilter !== "" && searchResult !== "") params.search = searchResult

        if(state.filterOrder !== "" && searchResult !== "") params.orderField = 'name'

        if(state.filterOrder !== "" && searchResult !== "") params.order = state.filterOrder
    }


    const filterStatus = async () => {
        try {
            handleFilterRequest()

            const {data} = await api({
                method:'get',     
                url:`${location.pathname}`,
                params: params
            }); 

            if(location.pathname === "/job") dispatch(setJobList(data.data));
            if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
            if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))

            dispatch(settingsPages(data.meta));

        } catch (err){
           return err.message
        }
    }

   useEffect(() => {  
        filterStatus()
        dispatch(setFilterStatus(selectedOption))
   }, [selectedOption])

   const settingsFilterStatusOptions = [
        {    
            name: "Todos",
            id: ""
        },
        {
            name: "Ativo",
            id: 1,
        },
        {
            name: "Inativo",
            id: '0'
        }
   ]

    const searchList = async () => {
        
        try{
            handleFilterRequest()
    
            const {data} = await api({
                method:'get',     
                url:`${location.pathname}`,
                params: params
            }); 
    
            if(location.pathname === "/job") dispatch(setJobList(data.data));
            if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
            if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
            dispatch(settingsPages(data.meta));

        }catch(err){
           return err.message
        }
    }
    
    useEffect(() => {
        searchList()
        dispatch(setSearchName(searchResult))
    }, [searchResult])

    return (
        <SettingsInputsContainer>
            <InputSearch 
                lineWidth="250px" 
                inputWidth="200px" 
                setSearchResult={setSearchResult}
            />
            <InputSelect
                options={settingsFilterStatusOptions}
                onChange={e => setSelectedOption(e.target.value)}
                placeHolder="Status"
                width="220px"
            />
        </SettingsInputsContainer>
    )
}
