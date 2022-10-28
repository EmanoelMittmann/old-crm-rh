import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ContainerOrdemServices, OrdemServiceItens } from "./style";

const GenerateOSItens = ({
  index,
  setCheckedProfissional,
  checkedProfissional,
}) => {
  const [check, setCheck] = useState(true);

  const handleClick = (professional) => {
    const Exist = checkedProfissional.includes(professional);
    if (Exist) {
      const position = checkedProfissional.indexOf(professional);
      checkedProfissional.splice(position, 1);
      setCheckedProfissional(checkedProfissional);
    } else {
      setCheckedProfissional([...checkedProfissional, professional]);
    }
  };

  useEffect(() => {
    const ExistId = checkedProfissional.map(item => item)
    setCheck(ExistId.includes(index.id))
  },[checkedProfissional])

  return (
    <ContainerOrdemServices key={index.id}>
      <OrdemServiceItens width="54%" content="flex-start">
        <input
          type="checkbox"
          name="professional"
          id="box"
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
          onClick={() => handleClick(index.id)}
        />
        <p>{index.name}</p>
      </OrdemServiceItens>
      <OrdemServiceItens width="47%" content="flex-start">
        {index.cnpj}
      </OrdemServiceItens>
      <OrdemServiceItens width="19%" content="flex-start">
        {index.total ?
            Number(
              index.total
            ).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
            : 
            (
              Number(
                index.fixed_payment_value
              ).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            )
        }
      </OrdemServiceItens>
    </ContainerOrdemServices>
  );
};

export default GenerateOSItens;
