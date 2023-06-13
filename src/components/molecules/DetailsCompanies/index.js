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
          <div>
                    <ModalContainer>
                        <ModalTitle padding="1em 2em ">
                            <CloseButton CloseButtonClickHandler={() => ClickHandlerDetais()} />
                            Detalhes da Empresa
                        </ModalTitle>
                        <ContaineTitles>
                            <StyleTitleProject>Tipo de Empresa</StyleTitleProject>
                            <StyleTitle>Data de abertura</StyleTitle>
                        </ContaineTitles>
                        <ContainerData>
                            <StyleName>{listCompanie?.type_company}</StyleName>
                            <StyleTip>{formatDate(listCompanie?.opening_date.substring(0, 10))}</StyleTip>
                        </ContainerData>
                        <ContainerAbsolute>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitleProject>CNPJ</StyleTitleProject>
                                    <StyleTitle>Razão Social</StyleTitle>
                                    <StyleTitle>Nome fantasia</StyleTitle>
                                </ContainerTitles>
                                <ContainerTitles>
                                <StyleTipe>{listCompanie?.cnpj}</StyleTipe>
                                <StyleName>{listCompanie?.razao_social}</StyleName>
                                <StyleName>{listCompanie?.fantasy_name}</StyleName>
                                </ContainerTitles>
                            </ContainerTime>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitleProject>Inscrição Estadual</StyleTitleProject>
                                    <StyleTitle>Inscrição Municipal</StyleTitle>
                                    <StyleTitle>Porte</StyleTitle>
                                </ContainerTitles>
                                <ContainerTitles>
                                <StyleTipe>{listCompanie?.state_registration}</StyleTipe>
                                <StyleName>{listCompanie?.municipal_registration}</StyleName>
                                <StyleName>{listCompanie?.size}</StyleName>
                                </ContainerTitles>
                            </ContainerTime>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitleProject>Atividade Principal</StyleTitleProject>
                                </ContainerTitles>
                                <ContainerTitles>
                                {listCompanie?.main_cnae.map(data => (
                                        <StyleCnae>{data.description}</StyleCnae>
                                    ))}
                                </ContainerTitles>
                            </ContainerTime>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitle>Atividade Secundária</StyleTitle>
                                </ContainerTitles>
                                <ContainerTitles>
                                {listCompanie?.secondary_cnae.map(cnae => (
                                        <StyleCnae>{cnae.description}</StyleCnae>
                                    ))}
                                </ContainerTitles>
                            </ContainerTime>
                            <ContainerTime>
                                <ContainerTitles>
                                    <StyleTitle>Natureza jurídica</StyleTitle>
                                </ContainerTitles>
                                <ContainerTitles>
                                {listCompanie?.code_and_description_of_the_legal_status
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
                                    <StyleTipe>{listCompanie?.agency}</StyleTipe>
                                    <StyleName>{listCompanie?.account_number}</StyleName>
                                    <StyleName>{listCompanie?.bank}</StyleName>
                                    <StyleName>{listCompanie?.account_type}</StyleName>
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
                                    <StyleTipe>{listCompanie?.street_name}</StyleTipe>
                                    <StyleName>{listCompanie?.house_number}</StyleName>
                                    <StyleName>{listCompanie?.neighborhood_name}</StyleName>
                                    <StyleName>{listCompanie?.complement}</StyleName>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                        <StyleTitleBanks>CEP</StyleTitleBanks>
                                        <StyleTitless>Cidade</StyleTitless>
                                        <StyleTitle>Estado</StyleTitle>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                    <StyleTipeBank>{listCompanie?.cep}</StyleTipeBank>
                                    <StyleNameBank>{listCompanie?.city_name}</StyleNameBank>
                                    <StyleName>{listCompanie?.uf}</StyleName>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                        <StyleTitleBanks>E-mail</StyleTitleBanks>
                                        <StyleTitle>Telefone</StyleTitle>
                                    </ContainerTitles>
                                    <ContainerTitles>
                                    <StyleTipeBank>{listCompanie?.main_email}</StyleTipeBank>
                                    <StyleName>{listCompanie?.phone_number}</StyleName>
                                    </ContainerTitles>
                                </ContainerBank>
                            </ContainerDataBank>
                        </ContainerAbsolute>
                    </ModalContainer>
                    <ModalOverlay />
                </div>
        </>

    )

}

export default DetaislCompanies;