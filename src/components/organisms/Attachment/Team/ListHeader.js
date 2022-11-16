import React from 'react'
import {
    ListHeaderContainer,
    ListHeaderTitle,
} from "../../../atoms/ListHeader/style.js";
const ListHeader = () => {

  return (
      <ListHeaderContainer>
          <ListHeaderTitle width="26.7%" wrap="nowrap" left='1em'>
              Profissional e Cargo
          </ListHeaderTitle>
          <ListHeaderTitle width="11%">
              Horas Mensais Estimadas
          </ListHeaderTitle>
          <ListHeaderTitle width="10%">
              Horas Mensais Realizadas
          </ListHeaderTitle>
          <ListHeaderTitle width="12%">
              %
          </ListHeaderTitle>
          <ListHeaderTitle width="11%" >
              Horas Extras Estimadas
          </ListHeaderTitle>
          <ListHeaderTitle width="10%" >
              Horas Extras Realizadas
          </ListHeaderTitle>
          <ListHeaderTitle width="10%">
              %
          </ListHeaderTitle>
          <ListHeaderTitle width="17%" >
              Status
          </ListHeaderTitle>
      </ListHeaderContainer>
  )
}

export default ListHeader