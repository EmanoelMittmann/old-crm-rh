import { formatDate } from "../../utils/formatDate";
import { ContainerOptions } from "../ContractHistory/style";
import MenuOptions from '../../atoms/MenuOptions';
import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as OptionsIcon } from '../../../assets/icons/options.svg';
import {
    ContainerContractListItem,
    HistoryCompany,
    HistoryDateSend,
    HistoryJob, Img,
    ContractListItems,
    HistorySubscribeContract,
    HistoryDateFinishContract,
    StatusContract,
    ContainerIconOptions
} from "./style";


const ContractListItem = ({ contractHistory, getFileContract}) => {
    const [menuOptions, setMenuOptions] = useState(false)
    const modalRef = useRef(null);
    const buttonRef = useRef(null);

    function handleOutside(e) {
        if (
            modalRef.current &&
            !modalRef.current.contains(e.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target)
        ) {
            setMenuOptions(false)
        }
    }

    const StatusColor = contractHistory.status === 'Enviado' ? 'Enviado'
        : contractHistory.status === 'Pendente' ? 'Pendente'
            : contractHistory.status === 'Assinado' ? 'Assinado'
                : 'Encerrado'
    const colorBg = contractHistory.status === 'Enviado' ? '#FFF5D7'
        : contractHistory.status === 'Pendente' ? '#FFE2E1'
            : contractHistory.status === 'Assinado' ? '#E4F8DD' :
                '#BB2B3F'

    const colortext = contractHistory.status === 'Enviado' ? '#FFAE00'
        : contractHistory.status === 'Pendente' ? '#BB2B3F'
            : contractHistory.status === 'Assinado' ? '#229A16' :
                '#FFFFFF'

    useEffect(() => {
        document.addEventListener("mousedown", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
        };
    }, [])


    return (
        <ContainerContractListItem>
            <ContractListItems margin="0.5em">
                <Img src={contractHistory.avatar_profissional} />
                <p>{contractHistory.name_profissional}</p>
            </ContractListItems>
            <HistoryJob>{contractHistory.job_profissional}</HistoryJob>
            <HistoryCompany>{contractHistory.company_profissional}</HistoryCompany>
            <HistoryDateSend>{(contractHistory.date_sent_contract.substr(0, 10).split("-").reverse().join("/"))}</HistoryDateSend>
            <HistorySubscribeContract>{formatDate(contractHistory.date_signature_contract)}</HistorySubscribeContract>
            <HistoryDateFinishContract> {formatDate(contractHistory.date_finish_contract)} </HistoryDateFinishContract>
            <StatusContract colorBg={colorBg} colortext={colortext}>{StatusColor}</StatusContract>

            <ContainerOptions
                onClick={() => setMenuOptions(!menuOptions)}
                ref={buttonRef}
                optionsColor={menuOptions ? "#407BFF" : "#B7BDC2"}
            >
                <ContainerIconOptions>
                    <OptionsIcon />
                </ContainerIconOptions>
            </ContainerOptions>
            {menuOptions && (
                <MenuOptions
                    ref={modalRef}
                    positionMenu="15px"
                    firstOptionDescription="Visualizar PDF"
                    firstChosenOption={()=> getFileContract(contractHistory.id)}
                    secondOptionDescription="Baixar PDF"
                    secondChosenOption={() => getFileContract(contractHistory.id)}
                    padding="0.5em 0.5em 0.4em 0.7em"
                    id={contractHistory.id}
                />
            )}
        </ContainerContractListItem>
    )
}

export default ContractListItem;