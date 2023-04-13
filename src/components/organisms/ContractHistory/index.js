import { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowRegister from "../../atoms/ArrowRegister";
import { ContainerAbsolute } from "../../atoms/Container/style";
import HistoryInput from "../../molecules/HistoryInputs";
import ListHeaderHistory from "../../molecules/ListHeaderHistory";
import ContractListItem from "../ContractListItem";
import Footer from "../Footer";
import { ContainerIconModal } from "../SelectorNewOs/style";
import { Container, ContainerButtonGeral, ContainerButtonsHeader, Title } from "./style";

const ContractHistory = () => {
    const [searchResult, setSearchResult] = useState("");
    const history = useHistory();

    const goBackHandler = () => {
        history.push("/professionals");
    };

    return (
        <>
            <ContainerButtonGeral>
                <ContainerButtonsHeader>
                    <ContainerIconModal>
                        <ArrowRegister clickHandler={goBackHandler} />
                    </ContainerIconModal>
                    <Title>Histórico de Contratos</Title>
                </ContainerButtonsHeader>
            </ContainerButtonGeral>
            <Container>
                <HistoryInput
                    setSearchResult={setSearchResult}
                />
                <ListHeaderHistory/>

                <ContainerAbsolute>
                    <ContractListItem/>

                </ContainerAbsolute>

                <Footer />
            </Container>
        </>
    )

}

export default ContractHistory;