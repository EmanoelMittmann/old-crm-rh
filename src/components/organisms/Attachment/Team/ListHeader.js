import React from "react";
import { ListHeaderTitle, Container } from "../../../atoms/ListHeader/style.js";
import { Column, Styles } from './style'
const ListHeader = () => {
  return (
    <Container>
      <Styles>
        <table>
          <tr>
            <Column w='18em'>Profissional e Cargo</Column>
            <Column w='14em'>Horas Mensais Estimadas</Column>
            <Column w='11em'>Horas Mensais Realizadas</Column>
            <Column w='1em'>%</Column>
            <Column w='10em'>Horas Extras Estimadas</Column>
            <Column w='11em'>Horas Extras Realizadas</Column>
            <Column w='3em'>%</Column>
            <Column w='9em'>Status</Column>
          </tr>
        </table>
      </Styles>
    </Container>
  );
};

export default ListHeader;
