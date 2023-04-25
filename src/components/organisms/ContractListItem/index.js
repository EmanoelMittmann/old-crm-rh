import {formatDate } from "../../utils/formatDate";
import { 
    ContainerContractListItem, 
    HistoryCompany, 
    HistoryDateSend, 
    HistoryJob, Img, 
    ContractListItems, 
    HistorySubscribeContract, 
    HistoryDateFinishContract, 
    StatusContract } 
from "./style";

const ContractListItem = ({ contractHistory }) => {

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
            : contractHistory.status === 'Assinado' ? '#229A16'  :
                '#FFFFFF'


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
        </ContainerContractListItem>

    )
}

export default ContractListItem;