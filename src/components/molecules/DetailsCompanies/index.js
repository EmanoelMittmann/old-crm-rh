import React, { useState } from 'react'
import CloseButton from '../../atoms/Buttons/CloseButtonCircle';
import { formatDate } from '../../utils/formatDate';
import {
    ContaineTitles,
    ContainerAbsolute,
    ContainerData,
    ContainerTime,
    ModalContainer,
    ModalOverlay,
    ModalTitle,
    StyleName,
    StyleTipe,
    StyleTitle,
    StyleTitleProject,
    ContainerTitles,
    StyleTip,
    StyleCnae,
    ContainerDataBank,
    ContainerBank,
    StyleTitleBank,
    StyleTitleBanks,
    StyleTitless,
    StyleTipeBank,
    StyleNameBank,
} from './style';
import api from '../../../api/api';
import { useEffect } from 'react';


const DetaislCompanies = ({ id, setModalDetailsCompanies }) => {
    const [listCompanie, setListCompanie] = useState()

    const ClickHandlerDetais = () => {
        setModalDetailsCompanies(prev => !prev)
    };

    const getCompaniesDetails = async () => {

        const { data } = await api({
            method: "get",
            url: `/companies/${id}`,
        });
        setListCompanie(data);
    };


    useEffect(() => {
        getCompaniesDetails(id)
    }, [id])

    return (
        <>
            {listCompanie?.map((item, index) => (
                <div>
                    <ModalContainer key={index}>
                        <ModalTitle padding="1em 2em ">
                            <CloseButton CloseButtonClickHandler={() => ClickHandlerDetais()} />
                            Detalhes da Empresa
                        </ModalTitle>
                        <ContaineTitles>
                            <StyleTitleProject>Tipo de Empresa</StyleTitleProject>
                            <StyleTitle>Data de abertura</StyleTitle>
                        </ContaineTitles>
                        <ContainerData>
                            <StyleName>{item.type_company}</StyleName>
                            <StyleTip>{formatDate(item.opening_date.substring(0, 10))}</StyleTip>
                        </ContainerData>
                        <ContainerAbsolute>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitleProject>CNPJ</StyleTitleProject>
                                    <StyleTitle>Razão Social</StyleTitle>
                                    <StyleTitle>Nome fantasia</StyleTitle>
                                </ContainerTitles>
                                <ContainerTitles>
                                    <StyleTipe>{item.cnpj}</StyleTipe>
                                    <StyleName>{item.razao_social}</StyleName>
                                    <StyleName>{item.fantasy_name}</StyleName>
                                </ContainerTitles>
                            </ContainerTime>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitleProject>Inscrição Estadual</StyleTitleProject>
                                    <StyleTitle>Inscrição Municipal</StyleTitle>
                                    <StyleTitle>Porte</StyleTitle>
                                </ContainerTitles>
                                <ContainerTitles>
                                    <StyleTipe>{item.state_registration}</StyleTipe>
                                    <StyleName>{item.municipal_registration}</StyleName>
                                    <StyleName>{item.size}</StyleName>
                                </ContainerTitles>
                            </ContainerTime>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitleProject>Atividade Principal</StyleTitleProject>
                                </ContainerTitles>
                                <ContainerTitles>
                                    {item.main_cnae.map(data => (
                                        <StyleCnae>{data.description}</StyleCnae>
                                    ))}
                                </ContainerTitles>
                            </ContainerTime>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitle>Atividade Secundária</StyleTitle>
                                </ContainerTitles>
                                <ContainerTitles>
                                    {item.secondary_cnae.map(cnae => (
                                        <StyleCnae>{cnae.description}</StyleCnae>
                                    ))}
                                </ContainerTitles>
                            </ContainerTime>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitle>Natureza jurídica</StyleTitle>
                                </ContainerTitles>
                                <ContainerTitles>
                                    {item.code_and_description_of_the_legal_status
                                        .map(code => (
                                            <StyleCnae>{code.name}</StyleCnae>
                                        ))}
                                </ContainerTitles>
                            </ContainerTime>
                            <ContainerDataBank>
                                <StyleTitleProject>Dados Bancários</StyleTitleProject>
                                <ContainerBank>
                                    <ContainerTitles>
                                        <StyleTitleBank>Agência</StyleTitleBank>
                                        <StyleTitle>Número da conta</StyleTitle>
                                        <StyleTitle>Banco</StyleTitle>
                                        <StyleTitle>Tipo da conta</StyleTitle>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                        <StyleTipe>{item.agency}</StyleTipe>
                                        <StyleName>{item.account_number}</StyleName>
                                        <StyleName>{item.bank}</StyleName>
                                        <StyleName>{item.account_type}</StyleName>
                                    </ContainerTitles>
                                </ContainerBank>
                            </ContainerDataBank>
                            <ContainerDataBank>
                                <StyleTitleProject>Endereço</StyleTitleProject>
                                <ContainerBank>
                                    <ContainerTitles>
                                        <StyleTitleBank>Rua</StyleTitleBank>
                                        <StyleTitle>Número</StyleTitle>
                                        <StyleTitle>Bairro</StyleTitle>
                                        <StyleTitle>Complemento</StyleTitle>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                        <StyleTipe>{item.street_name}</StyleTipe>
                                        <StyleName>{item.house_number}</StyleName>
                                        <StyleName>{item.neighborhood_name}</StyleName>
                                        <StyleName>{item.complement}</StyleName>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                        <StyleTitleBanks>CEP</StyleTitleBanks>
                                        <StyleTitless>Cidade</StyleTitless>
                                        <StyleTitle>Estado</StyleTitle>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                        <StyleTipeBank>{item.cep}</StyleTipeBank>
                                        <StyleNameBank>{item.city_name}</StyleNameBank>
                                        <StyleName>{item.uf}</StyleName>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                        <StyleTitleBanks>E-mail</StyleTitleBanks>
                                        <StyleTitle>Telefone</StyleTitle>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                        <StyleTipeBank>{item.main_email}</StyleTipeBank>
                                        <StyleName>{item.phone_number}</StyleName>
                                    </ContainerTitles>
                                </ContainerBank>
                            </ContainerDataBank>
                        </ContainerAbsolute>
                    </ModalContainer>
                    <ModalOverlay />
                </div>
            ))}
        </>

    )

}

export default DetaislCompanies;