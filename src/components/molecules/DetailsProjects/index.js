import React, { useState } from 'react'
import CloseButton from '../../atoms/Buttons/CloseButtonCircle';
import { formatDate } from '../../utils/formatDate';
import {
    ContaineTitles,
    ContaineTitlesCost,
    ContaineTitlesDuo,
    ContaineTitlesTwo,
    ContainerAbsolute,
    ContainerData,
    ContainerDataDate,
    ContainerDataDateDuo,
    ContainerDataUser,
    ContainerTime,
    EstimatedCost,
    ModalContainer,
    ModalOverlay,
    ModalTitle,
    StyleDate,
    StyleName,
    StyleTipe,
    StyleTitle,
    StyleTitleProject,
    TableLine,
    ProfilePicture,
    ProfessionalJob,
    StyleTitleProjectTime,
} from './style';
import { ProfessionalName, ProfessionalProfilePicture } from '../../organisms/Attachment/Team/style';
import StatusLabel from '../../atoms/StatusLabel';
import api from '../../../api/api';
import { useEffect } from 'react';


const DetailsProjects = ({ id, setModalDetails }) => {
   const [listData, setListData] =  useState()

   const ClickHandler = () => {
       setModalDetails(prev => !prev)
    };
    
    const getProjectsDetails = async () => {
        
        const { data } = await api({
            method: "get",
            url: `/project/${id}`,
        });
        setListData(data);
    };

useEffect(()=> {
    getProjectsDetails(id)

},[id])

    return (
        <>
            {listData?.map((item, index) => (
                <div>
                    <ModalContainer key={index}>
                        <ModalTitle padding="1.6em">
                            <CloseButton CloseButtonClickHandler={() => ClickHandler()} />
                            Detalhes do Projeto
                        </ModalTitle>
                        <ContaineTitles>
                            <StyleTitleProject>Projeto</StyleTitleProject>
                            <StyleTitle>Contrato</StyleTitle>
                            <StyleTitle>Tipo do Projeto</StyleTitle>
                            <StyleTitle>Status do Projeto</StyleTitle>
                        </ContaineTitles>
                        <ContainerData>
                            <StyleName>{item.name}</StyleName>
                            <StyleTipe>{item.id}</StyleTipe>
                            <StyleTipe>{item.project_type.name}</StyleTipe>
                            <StatusLabel
                                name={item.status.name}
                                textColor={item.status.color.text_color}
                                buttonColor={item.status.color.button_color} />
                        </ContainerData>
                        <ContaineTitlesDuo>
                            <StyleTitle>Data Início efetivo</StyleTitle>
                            <StyleTitle>Data final efetivo</StyleTitle>
                        </ContaineTitlesDuo>
                        <ContainerDataDateDuo>
                            <StyleDate>{formatDate(item.date_start)}</StyleDate>
                            <StyleDate>{formatDate(item.date_end)}</StyleDate>
                        </ContainerDataDateDuo>
                        <ContaineTitlesTwo>
                            <StyleTitle>Data início do contarto</StyleTitle>
                            <StyleTitle>Data Final do contrato</StyleTitle>
                        </ContaineTitlesTwo>
                        <ContainerDataDate>
                            <StyleDate>{formatDate(item.date_start_performed)}</StyleDate>
                            <StyleDate>{formatDate(item.date_end_performed)}</StyleDate>
                        </ContainerDataDate>
                        <ContaineTitlesCost>
                            <StyleTitle>Custo estimado</StyleTitle>
                        </ContaineTitlesCost>
                        <ContainerDataDate>
                            <EstimatedCost>{item.team_cost}</EstimatedCost>
                        </ContainerDataDate>
                        <ContainerAbsolute>
                            <ContainerTime>
                                <StyleTitleProjectTime>Time</StyleTitleProjectTime>
                            </ContainerTime>
                            <TableLine>
                                {item.users.map(user => (
                                    <ContainerDataUser>
                                        <ProfessionalProfilePicture>
                                            <ProfilePicture src={user.avatar} />
                                        </ProfessionalProfilePicture>
                                        <div className="professional">
                                            <ProfessionalName>{user.name}</ProfessionalName>
                                            <ProfessionalJob>{user.job_}</ProfessionalJob>
                                        </div>
                                    </ContainerDataUser>
                                ))}
                            </TableLine>
                        </ContainerAbsolute>
                    </ModalContainer>
                    <ModalOverlay />
                </div>
            ))}
        </>

    )

}

export default DetailsProjects;