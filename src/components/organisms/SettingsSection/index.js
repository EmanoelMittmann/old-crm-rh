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
import { openModal } from '../../../redux/actions'

export const SettingsSection = () => {
    const dispatch = useDispatch()
    const modelVisibility = useSelector(state => state.modelVisibility)

    //Aqui será colocado a lógica na troca de página
    const registerJobClickHandler = () => {
        dispatch(openModal())
    }

    return (
        <Container>
                <Main>
                    <Title>Cadastro de cargos</Title>
                    <ContainerFilterJob>
                        <SettingsInputs/>
                        <DarkButton width="180px" height="40"
                        onClick={registerJobClickHandler}>
                            Cadastrar novo
                        </DarkButton>
                    </ContainerFilterJob>
                    <FilterTab>Cargo</FilterTab>
                    <Job></Job>
                </Main>
            <SettingsSectionFooter/>
            {modelVisibility && <Modal/>}
        </Container>
    )
}
