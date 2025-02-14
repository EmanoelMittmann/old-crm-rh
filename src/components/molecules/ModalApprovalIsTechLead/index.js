import React from 'react'
import CloseButton from '../../atoms/Buttons/CloseButtonCircle';
import CancelButton from '../../atoms/Buttons/CancelButton/style';
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
import ModalRed from '../ModalRed';
import ModalGreen from '../ModalGreen';

const ApprovalIsTechLead = ({ id, setModalIsVisibleTechLead, getOvertimesTechLead }) => {
    const [approveData, setApproveData] = useState();
    const [currentJustification, setCurrentJustification] = useState('')
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [toAccept, setToAccept] = useState(true)
  
    const optionsApproval = [
        { name: 'Aceito', id: 'Aceito' },
        { name: 'Negado', id: 'Negado' },
    ];

const getApproveHoursTechLead = async () => {
    try {
        const { data } = await api({
            method: "GET",
            url: `/extrasHoursReleases/details/${id}`,
            });
            setApproveData(data);
        } catch (error) {
            console.error(error);
        }
    };

const handleApprovalHoursTechLead = async () => {
  try{
      await api.post(`/extrasHoursReleases/approval`, {
        releases_id: parseInt(id),
        approved: toAccept,
        justification: currentJustification,

      })
          .then(() => handlerModalTechLead())
    }catch(err){
    console.error(err);
    }
    return;
}

    const handlerModal = () => {
        setModalIsVisible(prev => !prev)
    };

    const handlerModalTechLead = () => {
        getOvertimesTechLead()
        setModalIsVisibleTechLead(prev => !prev)
    };

    useEffect(() => {
        getApproveHoursTechLead(id)
    }, [id])

    return (
        <div>
            {approveData?.map((item, index) => (
                <>
                    <ModalContainer key={index}>
                        <ModalTitle padding="1.6em">
                            <CloseButton
                                CloseButtonClickHandler={() =>handlerModalTechLead()} />
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
                            width="100%"
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
                                onClick={() => handlerModalTechLead()}>
                            Cancelar
                        </CancelButton>
                        <SaveButton
                                onClick={() => handlerModal()}>
                            Confirmar
                        </SaveButton>
                            {toAccept && modalIsVisible && (
                                <ModalGreen
                                    CloseButtonClickHandler={() => setModalIsVisible(false)}
                                    redButtonClickHandler={() => handleApprovalHoursTechLead()}
                                    title="Aprovar horas extras"
                                    message="Deseja realmente aprovar as horas extras?"
                                />
                            )}
                            {!toAccept && modalIsVisible && (
                                <ModalRed
                                    CloseButtonClickHandler={() => setModalIsVisible(false)}
                                    redButtonClickHandler={() => handleApprovalHoursTechLead()}
                                    title="Negar horas extras"
                                    message="Deseja realmente reprovar as horas extras"
                                />
                            )}
                    </ModalContainerButtons>
                    </ModalContainer>
                    <ModalOverlay />
                </>
            ))}
        </div>
    )
}

export default ApprovalIsTechLead;