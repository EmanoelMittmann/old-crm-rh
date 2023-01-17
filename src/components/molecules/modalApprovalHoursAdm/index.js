import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { ModalContainer, ModalOverlay, ModalTitle } from '../Modal/style';
import api from '../../../api/api';
import CloseButton from '../../atoms/Buttons/CloseButtonCircle';

export const ApprovalHoursAdm = ({ CloseButtonClickHandler }) => {
    const [admApprovalData, setAdmApprovaldata] = useState()
    const [toAccept, setToAccept] = useState(true)
    const history = useHistory()
    let { id } = useParams();

    const optionsApproval = [
        { name: 'Aceito', id: 'Aceito' },
        { name: 'Negado', id: 'Negado' },
    ];

    const getAdmApproveHours = async (id) => {
        try {
            const { data } = await api({
                method: "GET",
                url: `/extrasHoursReleases/pending/${id}`,
            });
            setAdmApprovaldata(data);
        } catch (error) {
            console.error(error);
        }

    };

    useEffect((id) => {
        getAdmApproveHours()
    }, [id])

    return (

        <>
            <div>
                {admApprovalData?.map((item, index) => (
                    <>
                        <ModalContainer key={index}>
                            <ModalTitle padding="1.6em">
                                <CloseButton CloseButtonClickHandler={() => {
                                    history.push("/overtime");
                                }} />
                                Lançamento # {item.id}
                            </ModalTitle>
                        </ModalContainer>
                        <ModalOverlay />
                    </>
                ))}
            </div></>
    )
}
