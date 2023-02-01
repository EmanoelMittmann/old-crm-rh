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
import { Main } from '../../molecules/OvertimeListTechnicalLeadApproval/style.js'


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
                    <DateBank>{data.user.professional_data.bank}</DateBank>
                    <DateAgenc>{data.user.professional_data.agency}</DateAgenc>
                    <DateBankC>{data.user.professional_data.account_number}</DateBankC>
                </ContainerTeam>
                <ContainerTeam>
                    <TitleChavePIX>Tipo de Chave PIX</TitleChavePIX>
                    <TitlePIX>Chave PIX</TitlePIX>
                </ContainerTeam>
                <ContainerTeam>
                    <DateBank>{data.user.professional_data.pix_key_type}</DateBank>
                    <DatePIX>{data.user.professional_data.pix_key}</DatePIX>
                </ContainerTeam>
            </ModalContainer>
            <ModalOverlay />
            </>
       
    ) : (
        <Main>Loading...</Main>
    )
}
export default DetailsReports