import { Column, HeaderContainer, Styles, Title } from "./style";
import { ReactComponent as Arrows } from "../../../assets/icons/arrows.svg";

const ListHeaderHistory = ({ sortByName }) => {

    return (
        <HeaderContainer>
            <Styles>
                <tr>
                    <Column width='15%'><Title>Nome</Title>  <Arrows onClick={sortByName} /> </Column>
                    <Column width='15%' padding="3em"> <Title> Cargo</Title> <Arrows onClick={sortByName} /></Column>
                    <Column width='17%' padding="2em"><Title> Empresa Contratante </Title> <Arrows onClick={sortByName} /></Column>
                    <Column width='19%' padding="2em"><Title> Data do envio do Contrato</Title>  <Arrows onClick={sortByName} /> </Column>
                    <Column width='22%' padding="1em"><Title>Data da Assinatura do Contrato </Title>  <Arrows onClick={sortByName} /></Column>
                    <Column width='22%' padding="1em"><Title>Data do encerramento do Contrato</Title>  <Arrows onClick={sortByName} /> </Column>
                    <Column width='11%' padding="1em"><Title>Status</Title>  <Arrows onClick={sortByName} /></Column>
                </tr>
            </Styles>
        </HeaderContainer>
    )

}

export default ListHeaderHistory;