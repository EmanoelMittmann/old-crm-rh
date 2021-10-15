import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'

import {
    setJobList,
    setStatusList,
    settingsPages,
    setProjectTypeList,
    setFilterStatus,
    setSearchName
} from '../../../redux/actions/index.js'
import api from '../../../api/api.js'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'
import { SettingsInputsContainer } from './style.js'

export const SettingsInputs = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useLocation()
    const [selectedOption, setSelectedOption] = useState('');
    const [searchResult, setSearchResult] = useState('')
    //Chamando api para filtrar status

    const filterStatus = async () => {

        let params;
    
        if(state.filterOrder !== ""){


            params = {
                page: 1,
                is_active: selectedOption,
                search: state.settingsSearchFilter,
                orderField: 'name',
                order: state.filterOrder
            }
        }

        if(state.filterOrder === ""){
            params = {
                page: 1,
                is_active: selectedOption,
                search: state.filterSearchName,
            }
        }


        try {
            const {data} = await api({
                method:'get',     
                url:`${location.pathname}`,
                params: params
            }); 

            if(location.pathname === "/job") dispatch(setJobList(data.data));
            if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
            if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
            dispatch(settingsPages(data.meta));

        } catch (error){
            return console.error(error)
        }
    }

   useEffect(() => {  
        filterStatus()
        dispatch(setFilterStatus(selectedOption))
   }, [selectedOption])

   const settingsFilterStatusOptions = [
        {    
            description: "Todos",
            value: ""
        },

        {
            description: "Ativo",
            value: 1,
        },

        {
            description: "Inativo",
            value: 0
        }
   ]

   console.log(state);

   // Chamando api para filtrar a pesquisa

    const searchList = async () => {
        const {data} = await api({
            method:'get',     
            url:`${location.pathname}`,
            params: {
                is_active: selectedOption,
                search: searchResult,
            }
        }); 

        if(location.pathname === "/job") dispatch(setJobList(data.data));
        if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
        if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
        dispatch(settingsPages(data.meta));

        return data;
    }

    const resetSettingsList = async () => {
        const {data} = await api({
            method:'get',     
            url:`${location.pathname}`,
            params: {
                page: 1,
                is_active: selectedOption,
            }
        }); 
    
        if(location.pathname === "/job") dispatch(setJobList(data.data));
        if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
        if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
        dispatch(settingsPages(data.meta));
    
        return data;
    }

    
    useEffect(() => {
        searchResult !== '' && searchList()
        searchResult === '' && resetSettingsList()
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
            setSelectedOption={setSelectedOption}
            placeholder="Status"
            width="220px"
            />
        </SettingsInputsContainer>
    )
}
