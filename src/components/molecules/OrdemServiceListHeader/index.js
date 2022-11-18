import React from "react";
import { ListHeaderTitle } from "../../atoms/ListHeader/style";
import {
  ListHeaderCNPJ,
  ListHeaderComission,
  HeaderContainer,
  ListHeadeSalarioOs,
  ListHeaderProfessional,
  ListHeaderTotal,
} from "./style";
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const OrdemServiceHeader = ({sortByName}) => {
  return (
    <HeaderContainer>
      <ListHeaderProfessional>
        <ListHeaderTitle margin='3em'>Professional</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderProfessional>

      <ListHeaderCNPJ>
        <ListHeaderTitle  margin='3em'>CNPJ</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderCNPJ>

      <ListHeadeSalarioOs>
        <ListHeaderTitle  margin='3em'>Salário</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeadeSalarioOs>

      <ListHeaderComission>
        <ListHeaderTitle  margin='3em'>Comissão</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderComission>

      <ListHeaderTotal>
        <ListHeaderTitle  margin='3em'>Total</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderTotal>

    </HeaderContainer>
  );
};

export default OrdemServiceHeader;
