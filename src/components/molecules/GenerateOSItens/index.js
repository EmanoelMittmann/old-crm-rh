import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ContainerOrdemServices, OrdemServiceItens } from "./style";

const GenerateOSItens = ({ index, setCheckedProfissional, checkedProfissional }) => {
  const [check, setCheck] = useState([])
  
  const handleClick = (professional) => {
    const Exist = checkedProfissional.includes(professional)
    if(Exist){
      const position = checkedProfissional.indexOf(professional)
      checkedProfissional.splice(position,1)
      setCheckedProfissional(checkedProfissional)
    }else{
      setCheckedProfissional([...checkedProfissional,professional])
    }
  }

  useEffect(() => {
    setCheck(checkedProfissional.includes(index.id))
  },[check])

  return (
    <ContainerOrdemServices key={index.id}>
      <OrdemServiceItens width="33.3%" content="flex-start">
        <input
          type="checkbox"
          name="professional"
          id="box"    
          onChange={(e) => setCheck(e.target.value)}   
          onClick={() => handleClick(index.id)}
        />
        <p>{index.name}</p>
      </OrdemServiceItens>
      <OrdemServiceItens width="33.3%" content="flex-end">
        {index.cnpj}
      </OrdemServiceItens>
      <OrdemServiceItens width="33.3%" content="end" right="2.5em">
        {Number(index.value).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </OrdemServiceItens>
    </ContainerOrdemServices>
  );
};

export default GenerateOSItens;
