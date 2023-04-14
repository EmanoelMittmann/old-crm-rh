import { Column, HeaderContainer, Styles, Title } from "./style";
import { ReactComponent as Arrows } from "../../../assets/icons/arrows.svg";

const ListHeaderHistory = ({ sortByName }) => {

    return (
        <HeaderContainer>
            <Styles>
                <table>
                    <tr>
                        <Column width='3%'> <Title>Nome </Title> </Column>
                        <Column width='12%'><Arrows onClick={sortByName} /></Column>
                        <Column width='3%'> <Title> Cargo</Title></Column>
                        <Column width='7%'><Arrows onClick={sortByName} /></Column>
                        <Column width='8%'><Title> Empresa Contratante </Title></Column>
                        <Column width='7%'><Arrows onClick={sortByName} /></Column>
                        <Column width='14%'><Title> Data do envio do Contrato</Title> </Column>
                        <Column width='6%'><Arrows onClick={sortByName} /></Column>
                        <Column width='15%' ><Title>Data da Assinatura do Contrato </Title> </Column>
                        <Column width='8%'><Arrows onClick={sortByName} /></Column>
                        <Column width='22%'><Title>Data do encerramento do Contrato</Title> </Column>
                        <Column width='7%'><Arrows onClick={sortByName} /></Column>
                        <Column width='4%' ><Title>Status</Title></Column>
                        <Column width='5%'><Arrows onClick={sortByName} /></Column>
                    </tr>
                </table>

            </Styles>
        </HeaderContainer>
    )

}

export default ListHeaderHistory;