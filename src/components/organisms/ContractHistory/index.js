import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../api/api";
import ArrowRegister from "../../atoms/ArrowRegister";
import { ContainerAbsolute } from "../../atoms/Container/style";
import LoadingCircle from "../../atoms/LoadingCircle";
import HistoryInput from "../../molecules/HistoryInputs";
import ListHeaderHistory from "../../molecules/ListHeaderHistory";
import ContractListItem from "../ContractListItem";
import Footer from "../Footer";
import { ContainerIconModal } from "../SelectorNewOs/style";
import { Container, ContainerButtonGeral, ContainerButtonsHeader, Title } from "./style";

const ContractHistory = () => {
    const [searchResult, setSearchResult] = useState("");
    const [contracstHistory, setContracstHistory] = useState([])
    const history = useHistory();
    let params = {};
    
    
    const getContractsHistory = async () => {
        const { data } = await api({
            method: 'get',
            url: "/mockDataContract",
            params: params,
        });
        setContracstHistory(data)
    }
    useEffect(() => {

        getContractsHistory()
    }, [])

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
                <ListHeaderHistory />
                {contracstHistory[0] ? (
                    <>
                        <ContainerAbsolute> 
                            {contracstHistory.map(contractHistory =>
                                <ContractListItem
                                    key={contractHistory.id}
                                    contractHistory={contractHistory}
                                    getContractsHistory={getContractsHistory} />
                                )}                 
                        </ContainerAbsolute>

                        <Footer />
                    </>
                ) : (
                    <LoadingCircle />
                )}

            </Container>
        </>
    )

}

export default ContractHistory;