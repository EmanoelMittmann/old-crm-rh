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
  
  // const handleClick = (professional,number) => {
  //   const Exist = checkedProfissional.includes(professional);
  //   const Existvalue = checkedValues.includes(number)
  //   if (Exist | Existvalue) { 
  //     const position = checkedProfissional.indexOf(professional);
  //     const index = checkedValues.indexOf(number);
  //     checkedProfissional.splice(position, 1);
  //     checkedValues.splice(index, 1)
  //     setCheckedProfissional(checkedProfissional);
  //     setCheckedValues([...checkedValues])
  //   } else {
  //     setCheckedProfissional([...checkedProfissional, professional]);
  //     setCheckedValues([...checkedValues,number])
  //   }
  // };

  const handleClick = (professional, number) => {
    const Exist = checkedProfissional.find(item => item.id === professional)
    if(Exist){
      const position = checkedProfissional.indexOf(Exist)
      checkedProfissional.splice(position,1);
      setCheckedProfissional([...checkedProfissional])
    }else{
      setCheckedProfissional([...checkedProfissional,{id: professional, value: number}])
    }
  }

  useEffect(() => {
    const ExistId = checkedProfissional.map(item => item.id)
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
          onClick={() => {
            handleClick(index.id, index.total)
          }}
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
