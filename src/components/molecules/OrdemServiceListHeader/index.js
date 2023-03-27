import React from "react";
import { ListHeaderTitle } from "../../atoms/ListHeader/style";
import {
  ListHeaderCNPJ,
  ListHeaderComission,
  HeaderContainer,
  ListHeadeSalarioOs,
  ListHeaderProfessional,
  ListHeaderTotal,
  ListHeaderValueExtraHour,
  ListHeaderCompanies,
} from "./style";
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const OrdemServiceHeader = ({sortByName}) => {
  return (
    <HeaderContainer>
      <ListHeaderProfessional>
        <ListHeaderTitle margin="1em">Professional</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderProfessional>

      <ListHeaderCompanies>
        <ListHeaderTitle >Empresa</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderCompanies>

      <ListHeaderCNPJ>
        <ListHeaderTitle  margin='2.3em'>CNPJ</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderCNPJ>

      <ListHeadeSalarioOs>
        <ListHeaderTitle  margin='3em'>Salário</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeadeSalarioOs>

      <ListHeaderComission>
        <ListHeaderTitle  margin='2em'>Comissão</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderComission>

      <ListHeaderValueExtraHour>
        <ListHeaderTitle  margin='3em'>Valor Horas Extras</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderValueExtraHour>

      <ListHeaderTotal>
        <ListHeaderTitle  margin='-1em'>Total</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderTotal>

    </HeaderContainer>
  );
};

export default OrdemServiceHeader;
