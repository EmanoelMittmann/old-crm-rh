import React from "react";
import { ListHeaderTitle } from "../../atoms/ListHeader/style";
import {
  ListHeaderCNPJ,
  ListHeaderComission,
  HeaderContainer,
  ListHeaderNumberOs,
  ListHeaderProfessional,
  ListHeaderTotal,
} from "./style";
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const OrdemServiceHeader = ({sortByName}) => {
  return (
    <HeaderContainer>
      <ListHeaderProfessional>
        <ListHeaderTitle>Professional</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderProfessional>

      <ListHeaderCNPJ>
        <ListHeaderTitle>CNPJ</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderCNPJ>

      <ListHeaderNumberOs>
        <ListHeaderTitle>Salário</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderNumberOs>

      <ListHeaderComission>
        <ListHeaderTitle>Comissão</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderComission>

      <ListHeaderTotal>
        <ListHeaderTitle>Total</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderTotal>

    </HeaderContainer>
  );
};

export default OrdemServiceHeader;
