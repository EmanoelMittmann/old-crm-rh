import React from 'react'
import { ModalContainer, ModalTitle, ModalOverlay, ContainerButtons } from './style';
import CloseButton from '../../atoms/Buttons/CloseButtonCircle';
import CancelButton from '../../atoms/Buttons/CancelButton/style';
import { BlueButton } from '../../atoms/Buttons/BlueButton/style';
import { useHistory } from 'react-router-dom';
import api from '../../../api/api';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';


const OvertimeLounchScreen = () => {
    const [dataLounch, setDataLounch] = useState([])
    const history = useHistory()

    const getLounchScreen = async () => {
        await api({
            method: 'get',
            url: '/',
        })
            .then((response) => {
                setDataLounch(response.data)
            })
            .catch((error) => toast.error(error.message))
    }


    useEffect(() => {
        getLounchScreen()
    }, [])

    return (
        <div>
            <ModalContainer>
                <ModalTitle padding="1.6em">
                    <CloseButton
                        CloseButtonClickHandler={() => {
                            history.push("/timeIstechLead");
                        }} />
                    Lançamento #1234223
                </ModalTitle>
                <ContainerButtons>
                    <CancelButton
                        margin="2em 0 0 0"
                        onClick={() => {
                            history.push("/timeIstechLead");
                        }}
                    >
                        Cancelar
                    </CancelButton>
                    <BlueButton
                        margin="2em 0 0 0"
                        width="108px"
                        height="40px">
                        Confirmar
                    </BlueButton>
                </ContainerButtons>
            </ModalContainer>
            <ModalOverlay />
        </div>
    );
}

export default OvertimeLounchScreen;