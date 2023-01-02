import React from 'react'
import CloseButton from '../../atoms/Buttons/CloseButtonCircle';
import CancelButton from '../../atoms/Buttons/CancelButton/style';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../../api/api';
import { useState } from 'react';
import { useEffect } from 'react';
import SaveButton from '../../atoms/Buttons/SaveButton/style';
import { formatDate } from '../../utils/formatDate';
import InputSelectAproval from '../../atoms/InputSelectApproval';

import {
    ModalContainer,
    ModalTitle,
    ModalOverlay,
    ContainerAbsolute,
    ModalContainerButtons,
    ContainerData,
    StyleName,
    StyleDate,
    StyleTitle,
    ContainerTitles,
    StyleDataDate,
    ContainerDataJustify,
    StyleDataJustify,
    InputAprovalStyle
} from './style';
import InputWithLabel from '../../atoms/InputWithLabel';
import { Status } from '../../organisms/DetailsRelease/status';

const ApprovalIsTechLead = () => {
    const [approveData, setApproveData] = useState();
    const [currentJustification, setCurrentJustification] = useState('')
    const [toAccept, setToAccept] = useState(true)
    const history = useHistory()
    let { id } = useParams();
  
    const optionsApproval = [
        { name: 'Aceito', id: 'Aceito' },
        { name: 'Negado', id: 'Negado' },
    ];

const getApproveHours = async (id) => {
    try {
        const { data } = await api({
                method: "GET",
                url: `/findUserHoursExtrasReleasesDetails/${id}`,
            });
            setApproveData(data);
        } catch (error) {
            console.error(error);
        }
    };

const handleApprovalHours = async () => {
  try{
      await api.post(`/approvalUserHoursExtrasReleases`, {
        releases_id: parseInt(id),
        approved: toAccept,
        justification: currentJustification,

      });
    }catch(err){
    console.error(err);
}}

    useEffect(() => {
        getApproveHours(id)
    }, [id])

    return (
        <div>
            {approveData?.map((item, index) => (
                <>
                    <ModalContainer key={index}>
                        <ModalTitle padding="1.6em">
                            <CloseButton
                                CloseButtonClickHandler={() => {
                                    history.push("/timeIstechLead");
                                }} />
                            Lançamento # {item.id}
                        </ModalTitle>
                    <ContainerAbsolute>
                        <StyleName>{item.project.name}</StyleName>
                    <ContainerData>
                        <StyleDate>
                            Lançado em {item.type === "BY_DATE"
                                ? formatDate(new Date(item.created_at), { timeZone: "UTC" })
                                : `${formatDate(new Date(item.created_at), { timeZone: "UTC" })}`}
                        </StyleDate>
                    <Status data={item}/>
                    </ContainerData>

                    <ContainerTitles>
                        <StyleTitle>Período</StyleTitle>
                        <StyleTitle>Horas</StyleTitle>
                    </ContainerTitles>

                    <ContainerTitles>
                        <StyleDataDate>
                            {item.type === "BY_DATE"
                                ? formatDate(new Date(item.launch_date), { timeZone: "UTC" })
                                : `${formatDate(new Date(item.launch_date), { timeZone: "UTC" })}`
                            }</StyleDataDate>
                        <StyleDataDate>{item.hour_quantity}</StyleDataDate>
                    </ContainerTitles>

                    <ContainerDataJustify>
                        <StyleTitle>Justificativa</StyleTitle>
                        <StyleDataJustify>{item.justification}</StyleDataJustify>
                    </ContainerDataJustify>

                    <InputAprovalStyle>
                        <InputSelectAproval
                            value={toAccept}
                            onChange={() => setToAccept(prev => !prev)}
                            options={optionsApproval}
                            placeHolder="Aceito"
                        />
                    </InputAprovalStyle>
                        {!toAccept &&
                            <InputWithLabel
                                name="justification"
                                type={"text"}
                                value={currentJustification}
                                onChange={(e) => setCurrentJustification(e.target.value)}
                                label="Justificativa"
                                widthContainer="100%"
                                handleBlur={() => { }}
                                padding="2em 2em"
                            />}
                    </ContainerAbsolute>
                    <ModalContainerButtons>
                        <CancelButton
                            onClick={() => {
                                history.push("/timeIstechLead");
                            }}>
                            Cancelar
                        </CancelButton>
                        <SaveButton
                            onClick={() => {
                                handleApprovalHours()
                                    history.push("/timeIstechLead")
                                }}>
                            Confirmar
                        </SaveButton>
                    </ModalContainerButtons>
                    </ModalContainer>
                    <ModalOverlay />
                </>
            ))}
        </div>
    )
}

export default ApprovalIsTechLead;