import React from 'react'
import { Container, Main, ContainerFilterJob } from './style.js'
import { SettingsInputs } from '../../molecules/SettingsInputs/index.js'
import Title from '../../atoms/SettingsSectionTitle/style.js'
import DarkButton from '../../atoms/DarkButton/style.js'
import FilterTab from '../../atoms/FilterTab'
import Job from '../../molecules/Job'
import SettingsSectionFooter from '../../molecules/SettingsSectionFooter'

export const SettingsSection = () => {
    //Aqui será colocado a lógica na troca de página
    return (
        <Container>
                <Main>
                    <Title>Cadastro de cargos</Title>
                    <ContainerFilterJob>
                        <SettingsInputs/>
                        <DarkButton width="180px" height="40">Cadastrar novo</DarkButton>
                    </ContainerFilterJob>
                    <FilterTab>Cargo</FilterTab>
                    <Job></Job>
                </Main>
            <SettingsSectionFooter/>
        </Container>
    )
}
