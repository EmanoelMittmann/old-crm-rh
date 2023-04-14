import { formatDate } from "../../utils/formatDate";
import { ContainerContractListItem, HistoryCompany, HistoryDateSend, HistoryJob, Img, ContractListItems, HistorySubscribeContract, HistoryDateFinishContract, StatusContract } from "./style";

const ContractListItem = ({ contractHistory }) => {

    const StatusColor = contractHistory.status_contract === 'ENVIADO' ? 'Enviado'  
        : contractHistory.status_contract === 'PENDENTE' ? 'Pendente'
            : contractHistory.status_contract === 'ASSINADO' ? 'Assinado'
                : 'Encerrado'
    const colorBg = contractHistory.status_contract === 'ENVIADO' ? '#BED9FF' 
        : contractHistory.status_contract === 'ASSINADO' ? '#E4F8DD'
            : contractHistory.status_contract === 'PENDENTE' ? '#FFF5D7' :
                '#FFE2E1'

    const colortext = contractHistory.status_contract === 'ENVIADO' ? '#0066FF' 
        : contractHistory.status_contract === 'PENDENTE' ? '#FFAE00'
            : contractHistory.status_contract === 'ASSINADO' ? '#1ECB4F'  :
                '#BB2B3F'


    return (
        <ContainerContractListItem>
            <ContractListItems margin="0.5em">
                <Img src={"https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"} />
                <p>{contractHistory.name}</p>
            </ContractListItems>
            <HistoryJob>{contractHistory.job}</HistoryJob>
            <HistoryCompany>{contractHistory.company}</HistoryCompany>
            <HistoryDateSend>{formatDate(contractHistory.data_send)}</HistoryDateSend>
            <HistorySubscribeContract>{formatDate(contractHistory.data_subscribe_contract)}</HistorySubscribeContract>
            <HistoryDateFinishContract> {formatDate(contractHistory.data_finish_contract)} </HistoryDateFinishContract>
            <StatusContract colorBg={colorBg} colortext={colortext}>{StatusColor}</StatusContract>
        </ContainerContractListItem>

    )
}

export default ContractListItem;