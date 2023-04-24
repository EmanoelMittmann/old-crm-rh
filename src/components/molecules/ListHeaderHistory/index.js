import { Column, HeaderContainer, Styles, Title } from "./style";
import { ReactComponent as Arrows } from "../../../assets/icons/arrows.svg";
import { field } from "./field";

const ListHeaderHistory = ({ fnOrder }) => {


    return (
        <HeaderContainer>
            <Styles>
                <table>
                    <tr>
                        <Column width='2%'> <Title onClick={() => fnOrder(field.NAME)}>Nome</Title></Column>
                        <Column width='12.5%'><Arrows onClick={() => fnOrder(field.NAME)} /></Column>
                        <Column width='2%'> <Title onClick={() => fnOrder(field.JOB)} >Cargo</Title></Column>
                        <Column width='8%'><Arrows onClick={() => fnOrder(field.JOB)} /></Column>
                        <Column width='6%'><Title onClick={() => fnOrder(field.COMPANY)} >Empresa Contratante</Title></Column>
                        <Column width='8%'><Arrows onClick={() => fnOrder(field.COMPANY)} /></Column>
                        <Column width='14%'><Title onClick={() => fnOrder(field.DATESENT)} >Data do envio do Contrato</Title></Column>
                        <Column width='4%'><Arrows onClick={() => fnOrder(field.DATESENT)} /></Column>
                        <Column width='16%' ><Title onClick={() => fnOrder(field.DATESIGNATURE)} >Data da Assinatura do Contrato</Title></Column>
                        <Column width='4%'><Arrows onClick={() => fnOrder(field.DATESIGNATURE)} /></Column>
                        <Column width='17.5%'><Title onClick={() => fnOrder(field.DATEFINISH)} >Data do encerramento do Contrato</Title></Column>
                        <Column width='8%'><Arrows onClick={() => fnOrder(field.DATEFINISH)} /></Column>
                        <Column width='2%' ><Title onClick={() => fnOrder(field.STATUS)} >Status</Title></Column>
                        <Column width='1%'><Arrows onClick={() => fnOrder(field.STATUS)} /></Column>
                    </tr>
                </table>
            </Styles>
        </HeaderContainer>
    )

}

export default ListHeaderHistory;