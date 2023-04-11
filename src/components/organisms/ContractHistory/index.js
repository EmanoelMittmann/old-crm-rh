import { useHistory } from "react-router-dom";
import ArrowRegister from "../../atoms/ArrowRegister";
import {ContainerIconModal} from "../SelectorNewOs/style";
import { Container, ContainerButtonGeral, ContainerButtonsHeader, Title } from "./style";

const ContractHistory = ()=>{
    const history = useHistory();

    const goBackClickHandler = () => {
        history.push("/professionals");
    };

    return (
        <>
        <ContainerButtonGeral>
            <ContainerButtonsHeader>
                <ContainerIconModal>
                    <ArrowRegister clickHandler={goBackClickHandler} />
                </ContainerIconModal>
                <Title>Histórico de Contratos</Title>
            </ContainerButtonsHeader>
        </ContainerButtonGeral>
        
        <Container>

        </Container>
            </>
      

    )

}

export default ContractHistory;