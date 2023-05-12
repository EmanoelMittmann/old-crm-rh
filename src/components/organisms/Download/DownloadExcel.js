import React, { useState, useEffect } from 'react'
import SaveButton from '../../atoms/Buttons/SaveButton/style.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style.js'
import { ModalOverlay } from '../../molecules/Modal/style.js'
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
import { saveAs } from 'file-saver'
import { toast } from 'react-toastify'
import { DefaultToast } from '../../atoms/Toast/DefaultToast.js'
import ModalGreen from '../../molecules/ModalGreen/index.js'


const DownloadExcel = ({ setModalIsVisibleExcel, getReports }) => {

    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [payingCompany, setPayingCompany] = useState([])
    const [companyCode, setCompanyCode] = useState('')
    const [onlyError, setOnlyError] = useState("")
    
    console.log('payingCompany: ', payingCompany);
    console.log('relatório Excel: ', companyCode);

    const download = async () => {
        try {
            const { data } = await api.get(`/generateExcelPayment?companies_id=${companyCode}`, { responseType: 'blob' })
            saveAs(data, 'Relatório de Pagamento') &&
                toast.success(<DefaultToast text="Downlaod efetuado com sucesso!" />)
        } catch (error) {

            return toast.warn(<DefaultToast text={'Nenhum relatório para pagamento encontrado!'} />)
        }

        getReports()
    }

    const getCompany = async () => {
        try {
            const { data } = await api({
                method: "GET",
                url: `/companies`,
                params: { razao_social: payingCompany }
            });
            setPayingCompany(data.data);
        } catch (error) {
            console.error(error)
        }
    };


    // const handleClicked = () => {
    //     if (companyCode.trim() === "") {
    //         setOnlyError("Selecine uma empresa")
    //     } else {
    //         setModalIsVisible(prev => !prev)
    //     }
    // }
    const handleClicked = () => {
        if (payingCompany){ 
            setModalIsVisible(prev => !prev)
        }
    }


    const ModalClick = () => {
        setModalIsVisibleExcel(prev => !prev)
    };

    useEffect(() => {
        getCompany();
    }, []);

    return (
        <div>
            <ModalContainer>
                <ModalTitle>
                    <Title>Selecione a empresa pagadora</Title>
                    <CloseButtonCircle CloseButtonClickHandler={() => ModalClick()} />
                </ModalTitle>
                <ContainerInputsSelect>
                    <InputSelect
                        onClick={(e) => {
                            setCompanyCode(e.target.value)
                        }}
                        options={payingCompany}
                        width="94%"
                        lineWidth="100%"
                        label="Empresa Pagadora"
                        error={onlyError}
                        touched={onlyError}
                    />
                </ContainerInputsSelect>
                <ContainerButtons>
                    <CancelButton onClick={ModalClick}>Cancelar</CancelButton>
                    <SaveButton onClick={() => handleClicked()}> Exportar</SaveButton>
                    <>
                        {modalIsVisible && (
                            <ModalGreen
                                redButtonClickHandler={() => {
                                    download()
                                    ModalClick()
                                }}
                                CloseButtonClickHandler={() => setModalIsVisible(false)}
                                title="Exportação de Arquivo"
                                message="Deseja realmente exportar arquivo?"
                            />
                        )}</>
                </ContainerButtons>
            </ModalContainer>
            <ModalOverlay />
        </div>
    )
}

export default DownloadExcel