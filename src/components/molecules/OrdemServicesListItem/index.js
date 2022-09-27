import React from "react";
import { ContainerOrdemServices, OrdemServiceItens, ContainerFather } from "./style";

const OrdemServiceListItem = ({ index }) => {
  return (
      <ContainerOrdemServices key={index.id}>
        <OrdemServiceItens width="20%" content="flex-start">
          <input type="checkbox" name="professional" id="box"/>
          <p>{index.name}</p>
        </OrdemServiceItens>
        <OrdemServiceItens width="20%" content="right" right="1.5em">
          {index.professional_data?.cnpj}
        </OrdemServiceItens>
        <OrdemServiceItens width="20%" content="right" right="3em">
          R$ {index.fixed_payment_value}
        </OrdemServiceItens>
        <OrdemServiceItens width="20%" content="right" right="5em">
          -
        </OrdemServiceItens>
        <OrdemServiceItens width="20%" content="flex-end" right="1em">
          R$ 1000,00
        </OrdemServiceItens>
      </ContainerOrdemServices>
  );
};

export default OrdemServiceListItem;
