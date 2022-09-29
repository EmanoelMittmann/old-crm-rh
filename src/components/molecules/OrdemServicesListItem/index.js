import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";
import {
  ContainerOrdemServices,
  OrdemServiceItens,
  ContainerFather,
} from "./style";

const OrdemServiceListItem = ({
  index,
  setCheckedProfissional,
  checkedProfissional,
}) => {
  
  const handleClick = (index) => {
    const IsExist = checkedProfissional.includes(index.id)
    if(IsExist){
      const filtered = checkedProfissional.indexOf(index.id)
      const deletePosition = checkedProfissional.splice(filtered,1)
      setCheckedProfissional(checkedProfissional)
    }else{
      setCheckedProfissional([...checkedProfissional,index.id])
    }
  }
  
  return (
    <ContainerOrdemServices key={index.id}>
      <OrdemServiceItens width="20%" content="flex-start">
        <input
          type="checkbox"
          name="professional"
          id="box"
          onClick={() => handleClick(index)}
        />
        <p>{index.name}</p>
      </OrdemServiceItens>
      <OrdemServiceItens width="20%" content="right" right="1.5em">
        {index.professional_data?.cnpj}
      </OrdemServiceItens>
      <OrdemServiceItens width="20%" content="right" right="1.5em">
        R$ {index.fixed_payment_value},00
      </OrdemServiceItens>
      <OrdemServiceItens width="20%" content="right" right="5em">
        -
      </OrdemServiceItens>
      <OrdemServiceItens width="20%" content="flex-end" right="1em">
        R$ {index.fixed_payment_value},00
      </OrdemServiceItens>
    </ContainerOrdemServices>
  );
};

export default OrdemServiceListItem;
