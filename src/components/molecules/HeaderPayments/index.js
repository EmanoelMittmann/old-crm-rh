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

const HeaderPayments = () => {
  return (
    <>
      <HeaderContainer>
        <ListItemCompany>
          <ListTitle>Empresa Pagadora</ListTitle>
          <Arrows />
        </ListItemCompany>
        <ListItemProfessional>
          <ListTitle>Profissional</ListTitle>
          <Arrows />
        </ListItemProfessional>
        <ListItemCnpj>
          <ListTitle>CNPJ</ListTitle>
        </ListItemCnpj>
        <ListItemNfe>
          <ListTitle>Valor da NFe</ListTitle>
          <Arrows />
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
