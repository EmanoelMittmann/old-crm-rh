import React from "react";
import { ListHeaderTitle, Container } from "../../../atoms/ListHeader/style.js";
const ListHeader = () => {
  return (
    <Container>
      <ListHeaderTitle width="23.5em" wrap="nowrap" left="1em">
        Profissional e Cargo
      </ListHeaderTitle>
      <ListHeaderTitle width="10em">Horas Mensais Estimadas</ListHeaderTitle>
      <ListHeaderTitle width="10em">Horas Mensais Realizadas</ListHeaderTitle>
      <ListHeaderTitle width="6em">%</ListHeaderTitle>
      <ListHeaderTitle width="11em">Horas Extras Estimadas</ListHeaderTitle>
      <ListHeaderTitle width="10em">Horas Extras Realizadas</ListHeaderTitle>
      <ListHeaderTitle width="20em">%</ListHeaderTitle>
      <ListHeaderTitle width="10em">Status</ListHeaderTitle>
    </Container>
  );
};

export default ListHeader;
