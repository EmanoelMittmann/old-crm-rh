import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import api from '../../../api/api';
import CloseButton from '../../atoms/Buttons/CloseButtonCircle';
import { formatDate } from '../../utils/formatDate';
import { Status } from '../../organisms/DetailsRelease/status';
import InputSelectAproval from '../../atoms/InputSelectApproval';
import InputWithLabel from '../../atoms/InputWithLabel';
import CancelButton from '../../atoms/Buttons/CancelButton/style';
import SaveButton from '../../atoms/Buttons/SaveButton/style';
import {
    ContainerAbsolute,
    ContainerData,
    ContainerDataJustify,
    ContainerTitles,
    InputAprovalStyle,
    ModalContainer,
    ModalContainerButtons,
    ModalTitle,
    StyleDataDate,
    StyleDataJustify,
    StyleDate,
    StyleName,
    StyleTitle
} from './style';
import ModalRed from '../ModalRed';


const ApprovalHoursAdm = () => {
    const [admApproveData, setAdmApproveData] = useState();
    const [currentJustification, setCurrentJustification] = useState('')
    const [toAccept, setToAccept] = useState(true)
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const history = useHistory()
    let { id } = useParams();

    const optionsApproval = [
        { name: 'Aceito', id: 'Aceito' },
        { name: 'Negado', id: 'Negado' },
    ];

    const handlerModal = () => {
        setModalIsVisible(true)
    };

    const ClickHandler = () => {
        history.push('/overtime');
    };

    const getApproveHours = async (id) => {
        try {
            const { data } = await api({
                method: "GET",
                url: `/extrasHoursReleases/details/${id}`,
            });
            setAdmApproveData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleApprovalHours = async () => {
        try {
            await api.post(`/extrasHoursReleases/approval`, {
                releases_id: parseInt(id),
                approved: toAccept,
                justification: currentJustification,

            })
                .then(() => {
                    history.push("/overtime")
                })
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getApproveHours(id)
    }, [id])

    return (
        <>
            {admApproveData?.map((item, index) => (
                <>
                    <ModalContainer key={index}>
                        <ModalTitle padding="1.6em">
                            <CloseButton CloseButtonClickHandler={() => ClickHandler()} />
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
                                <Status data={item} />
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
                                    placeHolder="Aprovação - RH"
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
                                onClick={() => () => ClickHandler()}>
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
                </>
            ))}
        </>
    )
}

export default ApprovalHoursAdm;