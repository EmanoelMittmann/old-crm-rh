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
import ModalRed from '../ModalRed';

const ApprovalIsTechLead = () => {
    const [approveData, setApproveData] = useState();
    const [currentJustification, setCurrentJustification] = useState('')
    const [modalIsVisible, setModalIsVisible] = useState(false)
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
            url: `/extrasHoursReleases/details/${id}`,
            });
            setApproveData(data);
        } catch (error) {
            console.error(error);
        }
    };

const handleApprovalHours = async () => {
  try{
      await api.post(`/extrasHoursReleases/approval`, {
        releases_id: parseInt(id),
        approved: toAccept,
        justification: currentJustification,

      })
        .then(() => {
              history.push("/overtime")
    })
    }catch(err){
    console.error(err);
}}

    const handlerModal = () => {
        setModalIsVisible(true)

    };

    const ClickHandler = () => {
        history.push('/timeIstechLead');
    };

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
                                CloseButtonClickHandler={() => ClickHandler()} />
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
                            onClick={() => ClickHandler()}>
                            Cancelar
                        </CancelButton>
                        <SaveButton
                            onClick={() => {
                                    handlerModal(prev => !prev)
                                }}>
                            Confirmar
                        </SaveButton>
                            {modalIsVisible && (
                                <ModalRed
                                    CloseButtonClickHandler={() => setModalIsVisible(false)}
                                    redButtonClickHandler={() => handleApprovalHours()}
                                    title={toAccept ? "Aprovar horas extras" : "Negar horas extras"}
                                    message={toAccept ? "Deseja realmente aprovar as horas extras?" : "Deseja realmente reprovar as horas extras"}

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