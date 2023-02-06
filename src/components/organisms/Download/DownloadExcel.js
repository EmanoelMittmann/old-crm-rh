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
import InputSelect from '../../atoms/InputSelect/index.js'
import ModalRed from '../../molecules/ModalRed/index.js'
import { useHistory } from 'react-router-dom'
import { saveAs } from 'file-saver'



const DownloadExcel = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [payingCompany, setPayingCompany] = useState()
    const [dataCompany, setDataCompany] = useState('')
    const history = useHistory()
    let params = {};
    
    const ModalClick = () => {    
        history.push('/reports')
    };
    const handleClicked = () => {
        setModalIsVisible(true)

    }

    // const download = async (id, type, name) => {
    //     try {
    //         const { data } = await api.get(`/downloadReportsFiles?user_id=${id}&type_file=${type}`, { responseType: 'xslb' })
    //         saveAs(data, name)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const getCompany = async () => {
        const { data } = await api({
            method: "GET",
            url: `/companies`,
            params: params,
        });
        setPayingCompany(data.data);

    };

    useEffect(() => {
        getCompany();

    }, []);

    return (
        <div>
            <ModalContainer>
                    <ModalTitle>
                        <Title>Selecione a empresa pagadora</Title>
                    <CloseButtonCircle CloseButtonClickHandler={ModalClick} />
                    </ModalTitle>
          
                <ContainerInputsSelect>
                    <InputSelect
                        onClick={(e) => setDataCompany(e.target.value)}
                        options={payingCompany}
                        placeHolder="Empresa Pagadora"
                        width="380px"
                        label="Empresa Pagadora"    
                    />
                </ContainerInputsSelect>
                <ContainerButtons>
                    <CancelButton onClick={ModalClick}>Cancelar</CancelButton>
                    <SaveButton onClick={() => handleClicked()}> Exportar</SaveButton>
                    {modalIsVisible && (
                        <ModalRed
                            redButtonClickHandler={() => ModalClick()}
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

export default DownloadExcel