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
    const [approveHours, setApproveHours] = useState();
    const [justification, setJustification] = useState('')
    const [toAccept, setToAccept] = useState("")
    const history = useHistory()
    let { id } = useParams();
    let params = {}


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
            setApproveHours(data);
        } catch (error) {
            console.error(error);
        }
    };

const postApprovalHours = async () => {
    try {
        await api ({
            method: "POST",
            url:`/approvalUserHoursExtrasReleases`,
            data: approveHours.map(item => item.id),
            params: params,
        }).then((res)=> {

        })
    }catch (err) {
        console.error(err)
    }
   
}
    useEffect(() => {
        getApproveHours(id)
        postApprovalHours()
    }, [id])

    return (
        <div>
            {approveHours?.map((item, index) => (
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
                            onChange={(e) => setToAccept(e.target.value)}
                            options={optionsApproval}
                            placeHolder="Aceito"
                        />
                    </InputAprovalStyle>
                        {toAccept === "Negado" ?
                            <InputWithLabel
                                name="justification"
                                type={"text"}
                                value={justification}
                                onChange={(e) => setJustification(e.target.value)}
                                label="Justificativa"
                                widthContainer="100%"
                                handleBlur={() => { }}
                                padding="2em 2em"
                            /> : ""}
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
                                    history.push("/timeIstechLead");
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