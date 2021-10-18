import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";

import api from '../../../api/api.js';
import { Container, Main, ContainerFilterJob, SettingsSectionFooterContainer } from './style.js'
import { SettingsInputs } from '../../molecules/SettingsInputs/index.js'
import SecondaryText from '../../atoms/SecondaryText/style.js'
import DarkButton from '../../atoms/Buttons/DarkButton/style.js'
import SettingsListHeader from '../../atoms/SettingsListHeader'
import SettingsListItem from '../../molecules/SettingsListItem'
import Footer from '../Footer'
import Modal from '../../molecules/Modal'
import ModalColors from '../../molecules/ModalColors/index.js';
import {
    openModal,
    modalRegisterOpen,
    setJobList,
    setStatusList,
    setProjectTypeList,
    settingsPages 
}
from '../../../redux/actions'



export const SettingsSection = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const state = useSelector(state => state)

    const displayTitle = route => {
        if(route === "/job") return  "Cadastro de cargos"
        if(route === "/projectStatus") return "Cadastro de status"
        if(route === "/projectType") return "Cadastro de Tipo de Projeto"
    }

    const modelVisibility = state.modelVisibility
    const token = state.authentication.token
    const jobList = state.jobs;
    const lastPage = state.settingsPagesFilter.last_page
    const currentPage = state.settingsPagesFilter.current_page
    const firstPage = state.settingsPagesFilter.first_page

    const registerJobClickHandler = () => {
        dispatch(modalRegisterOpen())
        dispatch(openModal())
    };

    //Requisição a api para filtros de paginação

    const nextPage = async () => {
        let params;

        if(state.filterOrder === ""){
            params = {
                page: `${state.settingsPagesFilter.current_page + 1}`,
                is_active: state.filterStatus,
                search: state.settingsSearchFilter,
            }
        }
    
        if(state.filterOrder !== ""){
            params = {
                page: `${state.settingsPagesFilter.current_page + 1}`,
                is_active: state.filterStatus,
                search: state.settingsSearchFilter,
                orderField: 'name',
                order: state.filterOrder,
            }
        }
        
        const {data} = await api({
            method:'get',     
            url: `${location.pathname}`,
            params: params
        }); 

        if(location.pathname === "/job") dispatch(setJobList(data.data));
        if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
        if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
        dispatch(settingsPages(data.meta));
        
        return data;
    }



    const previousPage = async () => {
        let params;

        if(state.filterOrder === ""){
            params = {
                page: `${state.settingsPagesFilter.current_page - 1}`,
                is_active: state.filterStatus,
                search: state.settingsSearchFilter,
            }
        }
    
        if(state.filterOrder !== ""){
            params = {
                page: `${state.settingsPagesFilter.current_page - 1}`,
                is_active: state.filterStatus,
                search: state.settingsSearchFilter,
                orderField: 'name',
                order: state.filterOrder,
            }
        }

        const {data} = await api({
            method:'get',     
            url:`${location.pathname}`,
            params: params
        }); 
    
        if(location.pathname === "/job") dispatch(setJobList(data.data));
        if(location.pathname === "/projectStatus") dispatch(setStatusList(data.data))
        if(location.pathname === "/projectType") dispatch(setProjectTypeList(data.data))
        dispatch(settingsPages(data.meta));
    
        return data;
    }


    return (
        <Container>
                <Main>
                    <SecondaryText margin="2em 0 2em 0">
                        {displayTitle(location.pathname)}
                    </SecondaryText>
                    <ContainerFilterJob>
                        <SettingsInputs/>
                        <DarkButton width="180px" height="40" fontSize="15px"
                        onClick={() => registerJobClickHandler()}>
                            Cadastrar novo
                        </DarkButton>
                    </ContainerFilterJob>
                    <SettingsListHeader/>   
                     <SettingsListItem/>
                </Main>
            <SettingsSectionFooterContainer>
                <Footer
                previousPage={previousPage}
                nextPage={nextPage}
                lastPage={lastPage}
                currentPage={currentPage}
                firstPage={firstPage}
                />
            </SettingsSectionFooterContainer>
            {modelVisibility && location.pathname !== "/projectStatus" && <Modal/>}
            {modelVisibility && location.pathname === "/projectStatus" && <ModalColors/>}
        </Container>
    )
}
