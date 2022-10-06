import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ContainerOrdemServices, OrdemServiceItens } from "./style";

const OrdemServiceListItem = ({
  index,
  setCheckedProfissional,
  checkedProfissional,
  deleteProfessionalWithCommission,
}) => {
  const [check, setCheck] = useState(false);
  const handleClick = (index) => {
    const IsExist = checkedProfissional.includes(index.id);
    if (IsExist) {
      const filtered = checkedProfissional.indexOf(index.id);
      checkedProfissional.splice(filtered, 1);
      setCheckedProfissional(checkedProfissional);
    } else {
      setCheckedProfissional([...checkedProfissional, index.id]);
    }
  };

  useEffect(() => {
    setCheck(checkedProfissional.includes(index.id));
  }, [checkedProfissional]);

  useEffect(() => {
    deleteProfessionalWithCommission(index);
  }, [check]);

  return (
    <ContainerOrdemServices key={index.id}>
      <OrdemServiceItens width="36%" content="flex-start">
        <input
          type="checkbox"
          name="professional"
          id="box"
          checked={check}
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
          onClick={() => handleClick(index)}
        />
        <p>{index.name}</p>
      </OrdemServiceItens>
      <OrdemServiceItens width="29%" content="start" >
        {index.professional_data?.cnpj}
      </OrdemServiceItens>
      <OrdemServiceItens width="20%" content="start" >
        R$ {index.fixed_payment_value},00
      </OrdemServiceItens>
      <OrdemServiceItens width="30%" content="space-evenly" >
        {index.value
          ? ` ${Number(index.value).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}`
          : " - "}
      </OrdemServiceItens>
      <OrdemServiceItens width="20%" content="center">
        {index.value
          ? (
              Number(index.value) + Number(index.fixed_payment_value)
            ).toLocaleString("pt-br", { style: "currency", currency: "BRL" })
          : Number(index.fixed_payment_value).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
      </OrdemServiceItens>
    </ContainerOrdemServices>
  );
};

export default OrdemServiceListItem;
