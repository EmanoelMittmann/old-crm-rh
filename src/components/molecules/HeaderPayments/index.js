import { ReactComponent as Arrows } from "../../../assets/icons/arrows.svg";
import { HeaderContainer } from "../ListHeaderInvoice/style";
import {
  ListItemCnpj,
  ListItemCompany,
  ListItemDatePayment,
  ListItemNfe,
  ListItemProfessional,
  ListItemProjects,
  ListItemStatus,
  ListTitle,
} from "./style";

const HeaderPayments = ({sortByName,setOrderField}) => {
  return (
    <>
      <HeaderContainer>
        <ListItemCompany>
          <ListTitle>Empresa Pagadora</ListTitle>
          <Arrows onClick={() => {
            sortByName()
            setOrderField('order.companies_id')
            }}/>
        </ListItemCompany>
        <ListItemProfessional>
          <ListTitle>Profissional</ListTitle>
          <Arrows onClick={() => {
            sortByName()
            setOrderField('users.name')
            }}/>
        </ListItemProfessional>
        <ListItemCnpj>
          <ListTitle>CNPJ</ListTitle>
        </ListItemCnpj>
        <ListItemNfe>
          <ListTitle>Valor da NFe</ListTitle>
          <Arrows onClick={() => {
            sortByName()
            setOrderField('fiscal_note_id')
          }}/>
        </ListItemNfe>
        <ListItemDatePayment>
          <ListTitle>Data de Pagamento</ListTitle>
        </ListItemDatePayment>
        <ListItemStatus>
          <ListTitle>Status de Pagamento</ListTitle>
            </ListItemStatus>
              </HeaderContainer>
    </>
  );
};

export default HeaderPayments;
