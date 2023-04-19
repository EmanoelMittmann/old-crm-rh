import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../api/api";
import ArrowRegister from "../../atoms/ArrowRegister";
import { ContainerAbsolute, Main } from "../../atoms/Container/style";
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
    const [status, setStatus]=useState('')
    const [order, setOrder] = useState({ order: "", field: "" });
    const [metaHistory, setMetaHistory]=useState({})
    const history = useHistory();
    let params = {};
    
    const sortByField = (field) => {
        const sortOrder = order.order === "" ? "desc" : order.order === "desc" ? "asc" : "desc";
        setOrder({
            order: sortOrder,
            orderField: field,
        });
    };
    
    
    const handleFilterRequest = (pagesFilter) => {
        
        if (pagesFilter === "previous") params.page = `${metaHistory.current_page -1}`;
        
        
        if (pagesFilter === "next") params.page = `${metaHistory.current_page +1}`;
        
        
        if (order.order !== "") {
            params.orderField = order.orderField;
            params.order = order.order;
        }
    };
   
    const getContractsHistory = async () => {
        handleFilterRequest()
        const { data } = await api({
            method: 'get',
            url: "/contractHistory?limit=5",
            params: params,
        });
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
        getContractsHistory()
    }, [order])

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
                    setSearchResult={setSearchResult}
                />

                <ListHeaderHistory fnOrder={sortByField}/>

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
                    <LoadingCircle />     
                )}
            </Container>
        </>
    )

}

export default ContractHistory;