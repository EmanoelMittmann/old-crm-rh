import { ContainerContractListItem, Img, ProfessionalsListItems } from "./style";

const ContractListItem = ({ })=> {


    return(
        <ContainerContractListItem>
            <ProfessionalsListItems margin="0.5em">
                <Img src={"https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"} />
                <p>Maria Cicera Ferreira dos Santos Ribeiro</p>
            </ProfessionalsListItems>

        </ContainerContractListItem>

    )
}

export default ContractListItem;