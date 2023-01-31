import React, { useState, useEffect } from 'react'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import {ModalOverlay} from '../../molecules/Modal/style.js'
import {
    ContainerButtons,
    ContainerInputsSelect,
    ModalContainer,
    ModalTitle,
    Title
} from './style.js'
import CloseButtonCircle from '../../atoms/Buttons/CloseButtonCircle/index.js'
import api from '../../../api/api.js'
import ModalRed from '../../molecules/ModalRed/index.js'
import InputSelect from '../../atoms/InputSelect/index.js'


const DownloadPDF = ({setVisibleDownlaodPDF}) => {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [payingCompany, setPayingCompany] = useState([])
    let params = {};

    const getCompany = async () => {
        const { data } = await api({
            method: "GET",
            url: `/companies`,
            params: params,
        });
        setPayingCompany(data.data);
        
    };

    const ModalClick = () => {
        setVisibleDownlaodPDF(prev => !prev)

    };

    useEffect(() => {
        getCompany();

    }, [payingCompany]);

    return (
        <div>
            <ModalContainer>
                    <ModalTitle>
                        <Title>Selecione a empresa pagadora</Title>
                    <CloseButtonCircle CloseButtonClickHandler={ModalClick} />
                    </ModalTitle>
          
                <ContainerInputsSelect>
                    <InputSelect
                        onChange={(e) => setPayingCompany(e.target.value)}
                        options={payingCompany}
                        placeHolder={"Empresa Pagadora"}
                        width="380px"
                    />
                </ContainerInputsSelect>
                <ContainerButtons>
                    <CancelButton onClick={ModalClick}>Cancelar</CancelButton>
                    <SaveButton onClick={() => ModalClick()}> Exportar</SaveButton>
                    {modalIsVisible && (
                        <ModalRed
                            redButtonClickHandler={() => {}}
                            CloseButtonClickHandler={() => setModalIsVisible(false)}
                            title="Exportação de Arquivo"
                            message="Deseja realmente exportar arquivo?"
                        />
                    )}
                </ContainerButtons>
            </ModalContainer>
            <ModalOverlay />
        </div>
    )
}

export default DownloadPDF