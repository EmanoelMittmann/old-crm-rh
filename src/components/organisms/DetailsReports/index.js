import React from 'react'
import CloseButton from '../../atoms/Buttons/CloseButtonCircle/index.js'

import {
    ModalContainer,
    ContainerHeader,
    ContainerTeam,
    JobReports,
    ModalTitle,
    TitleBank,
    TitleBankC,
    TitleAgenc,
    DateBank,
    DateAgenc,
    DateBankC,
    TitleChavePIX,
    TitlePIX,
    DatePIX
}
    from './style.js'
import { ModalOverlay } from '../../molecules/Modal/style.js'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Main } from '../../molecules/OvertimeListTechnicalLeadApproval/style.js'

const mock = [
    {
        professional: "Jeferson Souza",
        job: "Desenvolvedor FrontEnd",
        banco: "260 - NU Pagamentos S.A",
        agencia: 77525,
        conta: 1244552 - 0,
        tipoChavePIX: "Telefone",
        chavePix: "489993243423"

    }
]

// Dados que vem da API
// data.user.professional_data.bank
// data.user.professional_data.agency
// data.user.professional_data.account_number

// data.user.professional_data.pix_key_type
// data.user.professional_data.pix_key

const DetailsReports = ({ setdetaisVisibled, data, id }) => {
    const history = useHistory();
    
    const ClickModal = () => {
        setdetaisVisibled(prev => !prev)
    }

    return data ? (
            <>
            <ModalContainer key={data.id}>
                <ContainerHeader>
                    <div>
                        <ModalTitle>
                            {data.user.name}
                        </ModalTitle>
                        <JobReports>{data.user.job.name}</JobReports>
                    </div>
                    <CloseButton CloseButtonClickHandler={ClickModal} />
                </ContainerHeader>
                <ContainerTeam>
                    <TitleBank>Banco</TitleBank>
                    <TitleAgenc>Agência</TitleAgenc>
                    <TitleBankC>Conta</TitleBankC>
                </ContainerTeam>
                <ContainerTeam>
                    <DateBank>260 - NU Pagamentos S.A</DateBank>
                    <DateAgenc>77525</DateAgenc>
                    <DateBankC>1244552 - 0</DateBankC>
                </ContainerTeam>
                <ContainerTeam>
                    <TitleChavePIX>Tipo de Chave PIX</TitleChavePIX>
                    <TitlePIX>Chave PIX</TitlePIX>
                </ContainerTeam>
                <ContainerTeam>
                    <DateBank>Telefone</DateBank>
                    <DatePIX>489993243423</DatePIX>
                </ContainerTeam>
            </ModalContainer>
            <ModalOverlay />
            </>
       
    ) : (
        <Main>Loading...</Main>
    )
}
export default DetailsReports