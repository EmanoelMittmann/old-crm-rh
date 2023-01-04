import React from "react";
import { ListHeaderTitle, Container } from "../../../atoms/ListHeader/style.js";
const ListHeader = () => {
  return (
    <Container>
      <ListHeaderTitle width="23.5em" wrap="nowrap" left="1em">
        Profissional e Cargo
      </ListHeaderTitle>
      <ListHeaderTitle width="19em">Horas Mensais Estimadas</ListHeaderTitle>
      <ListHeaderTitle width="20em">Horas Mensais Realizadas</ListHeaderTitle>
      <ListHeaderTitle width="7em">%</ListHeaderTitle>
      <ListHeaderTitle width="19em">Horas Extras Estimadas</ListHeaderTitle>
      <ListHeaderTitle width="20em">Horas Extras Realizadas</ListHeaderTitle>
      <ListHeaderTitle width="8em">%</ListHeaderTitle>
      <ListHeaderTitle width="10em">Status</ListHeaderTitle>
    </Container>
  );
};

export default ListHeader;
