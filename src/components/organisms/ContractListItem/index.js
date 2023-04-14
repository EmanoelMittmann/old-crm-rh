import StatusLabel from "../../atoms/StatusLabel";
import { formatDate } from "../../utils/formatDate";
import { ContainerContractListItem, HistoryCompany, HistoryDateSend, HistoryJob, Img, ContractListItems, HistorySubscribeContract, HistoryDateFinishContract, StatusContract } from "./style";

const ContractListItem = ({ contractHistory })=> {

   

    return(
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
            <StatusContract>{contractHistory.status_contract}
                {/* <StatusLabel
                    name={contractHistory.status_contract.name}
                    textColor={contractHistory.status_contract.color.textColor}
                    buttonColor={contractHistory.status_contract.color.buttonColor}
                /> */}

            </StatusContract>
        </ContainerContractListItem>

    )
}

export default ContractListItem;