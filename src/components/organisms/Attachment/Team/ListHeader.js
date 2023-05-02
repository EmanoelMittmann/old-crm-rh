import React from "react";
import { Container } from "../../../atoms/ListHeader/style.js";
import { Column, Styles } from './style'
const ListHeader = () => {
  return (
    <Container>
      <Styles>
        <table>
          <tr>
            <Column>Profissional e Cargo</Column>
            <Column>Horas Mensais Estimadas</Column>
            <Column>Horas Mensais Realizadas</Column>
            <Column>%</Column>
            <Column>Horas Extras Estimadas</Column>
            <Column>Horas Extras Realizadas</Column>
            <Column>%</Column>
            <Column>Status</Column>
          </tr>
        </table>
      </Styles>
    </Container>
  );
};

export default ListHeader;
