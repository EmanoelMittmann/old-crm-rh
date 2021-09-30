import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { Container, Main, ContainerFilterJob } from './style.js'
import { SettingsInputs } from '../../molecules/SettingsInputs/index.js'
import Title from '../../atoms/SettingsSectionTitle/style.js'
import DarkButton from '../../atoms/Buttons/DarkButton/style.js'
import FilterTab from '../../atoms/FilterTab'
import Job from '../../molecules/Job'
import SettingsSectionFooter from '../../molecules/SettingsSectionFooter'
import Modal from '../../molecules/Modal'
import { openModal, modalRegisterOpen } from '../../../redux/actions'



export const SettingsSection = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const modelVisibility = state.modelVisibility
    const token = state.authentication.token
    const jobList = state.jobs;

    const registerJobClickHandler = () => {
        dispatch(modalRegisterOpen())
        dispatch(openModal())
    }

    return (
        <Container>
                <Main>
                    <Title>Cadastro de cargos</Title>
                    <ContainerFilterJob>
                        <SettingsInputs/>
                        <DarkButton width="180px" height="40"
                        onClick={() => registerJobClickHandler()}>
                            Cadastrar novo
                        </DarkButton>
                    </ContainerFilterJob>
                    <FilterTab/>   
                     <Job/>
                </Main>
            <SettingsSectionFooter/>
            {modelVisibility && <Modal/>}
        </Container>
    )
}
