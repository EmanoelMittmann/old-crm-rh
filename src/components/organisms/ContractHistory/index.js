import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../api/api";
import ArrowRegister from "../../atoms/ArrowRegister";
import {ContainerAbsolute} from "../../atoms/Container/style";
import LoadingCircle from "../../atoms/LoadingCircle";
import HistoryInput from "../../molecules/HistoryInputs";
import ListHeaderHistory from "../../molecules/ListHeaderHistory";
import ContractListItem from "../ContractListItem";
import Footer from "../Footer";
import { ContainerIconModal } from "../SelectorNewOs/style";
import { Container, ContainerButtonGeral, ContainerButtonsHeader, Title } from "./style";

const ContractHistory = () => {
    const [searchResult, setSearchResult] = useState("");
    const [statusSelected, setStatusSelected] = useState("")
    const [signature, setSignature] = useState("")
    const [finish, setFinish] = useState("")
    const [contracstHistory, setContracstHistory] = useState([])
    const [order, setOrder] = useState({ order: "", field: "" });
    const [metaHistory, setMetaHistory] = useState({})
    const history = useHistory();

    let params = {
        page: metaHistory,
        order: order.order,
        orderField: order.orderField,
        search: searchResult,
        initialDate: signature,
        finalDate: finish,
    }
function required(){

}
    const handleFilterRequest = (pagesFilter) => {
        params.orderField = order.orderField;
        params.order = order.order;
        params.search = searchResult;
        params.status = statusSelected;
        params.initialDate = signature;
        params.finalDate = finish;
        params.page = metaHistory.first_page;

        if (pagesFilter === "previous") params.page = metaHistory.current_page - 1;
        if (pagesFilter === "next") params.page = metaHistory.current_page + 1;
    };

    const sortByField = (field) => {
        const sortOrder = order.order === "" ? "desc" : order.order === "desc" ? "asc" : "desc";
        setOrder({
            order: sortOrder,
            orderField: field,
        });
    };

    const getContractsHistory = async () => {
        const { data } = await api.get("contractHistory?limit=5", { params: params })
        setContracstHistory(data.data)
        setMetaHistory(data.meta)
    }


    const nextPage = () => {
        handleFilterRequest("next");
        getContractsHistory()
    };

    const previousPage = () => {
        handleFilterRequest("previous");
        getContractsHistory()
    };

    useEffect(() => {
        handleFilterRequest()
        getContractsHistory()
    }, [order, searchResult, statusSelected, finish, signature])

    const goBackHandler = () => {
        history.push("/professionals");
    };

    return (
        <>
            <ContainerButtonGeral>
                <ContainerButtonsHeader>
                    <ContainerIconModal><ArrowRegister clickHandler={goBackHandler} /></ContainerIconModal>
                    <Title>Histórico de Contratos</Title>
                </ContainerButtonsHeader>
            </ContainerButtonGeral>
            <Container>
                <HistoryInput
                    statusSelected={statusSelected}
                    setStatusSelected={setStatusSelected}
                    finish={finish}
                    setFinish={setFinish}
                    signature={signature}
                    setSignature={setSignature}
                    searchResult={searchResult}
                    setSearchResult={setSearchResult}
                />
                <ListHeaderHistory fnOrder={sortByField} />

                {contracstHistory[0] ? (
                    <>
                        <ContainerAbsolute>
                            {contracstHistory.map(contractHistory =>
                                <ContractListItem
                                    key={contractHistory.id}
                                    contractHistory={contractHistory}
                                    getContractsHistory={getContractsHistory}
                                />
                            )}
                        </ContainerAbsolute>
                        <Footer
                            previousPage={previousPage}
                            nextPage={nextPage}
                            lastPage={metaHistory?.last_page}
                            currentPage={metaHistory?.current_page}
                            firstPage={metaHistory?.first_page}
                        />
                    </>
                ) : (
                    <LoadingCircle /> && <p>Nenhum arquivo encontrado...</p>
                )}
            </Container>
        </>
    )

}

export default ContractHistory;