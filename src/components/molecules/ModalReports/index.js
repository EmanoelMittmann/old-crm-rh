import React from 'react'
import CloseButton from '../../atoms/Buttons/CloseButtonCircle/index.js'
import { ModalOverlay } from '../Modal/style.js'
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
import { useState } from 'react'

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

const ModalReports = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false)

    const handlerModal = () => {
        setModalIsVisible(true)
    };

    const ClickModal = () => {
        setModalIsVisible(prev => !prev)
    }

    return (
    <>
                {modalIsVisible &&
                    <div>
                        {mock?.map((item, index) => (
                            <ModalContainer key={index}>
                                <ContainerHeader>
                                    <div>
                                        <ModalTitle>
                                            {item.professional}
                                        </ModalTitle>
                                        <JobReports>{item.job}</JobReports>
                                    </div>
                                    <CloseButton CloseButtonClickHandler={ClickModal} />
                                </ContainerHeader>
                                <ContainerTeam>
                                    <TitleBank>Banco</TitleBank>
                                    <TitleAgenc>Agência</TitleAgenc>
                                    <TitleBankC>Conta</TitleBankC>
                                </ContainerTeam>
                                <ContainerTeam>
                                    <DateBank>{item.banco}</DateBank>
                                    <DateAgenc>{item.agencia}</DateAgenc>
                                    <DateBankC>{item.conta}</DateBankC>
                                </ContainerTeam>
                                <ContainerTeam>
                                    <TitleChavePIX>Tipo de Chave PIX</TitleChavePIX>
                                    <TitlePIX>Chave PIX</TitlePIX>
                                </ContainerTeam>
                                <ContainerTeam>
                                    <DateBank>{item.tipoChavePIX}</DateBank>
                                    <DatePIX>{item.chavePix}</DatePIX>
                                </ContainerTeam>
                            </ModalContainer>
                        ))}
                        <ModalOverlay />
                    </div>}
            </>
    )
}

export default ModalReports;