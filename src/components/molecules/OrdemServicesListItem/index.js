import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ContainerOrdemServices, OrdemServiceItens } from "./style";

const OrdemServiceListItem = ({
  index,
  setCheckedProfissional,
  checkedProfissional,
  deleteProfessionalWithCommission,
  professionals,
}) => {
  const [check, setCheck] = useState(false);
  const state = useSelector((state) => state.valueOfCommission);
  const hourQuantity = index?.extrahour_release
    .map((prop) => prop.hour_quantity)
    .reduce((acc, cc) => acc + cc, 0);
  const handleClick = () => {
    const IsExist = checkedProfissional.find(
      (item) => item.professional_id === index.id
    );
    if (IsExist) {
      setCheckedProfissional(
        checkedProfissional.filter((item) => item.professional_id !== index.id)
      );
    } else {
      const isHaveComission = professionals.find((obj) => obj.id === index.id);

      if (isHaveComission.commission) {
        setCheckedProfissional([
          ...checkedProfissional,
          { professional_id: index.id },
        ]);
      } else {
        setCheckedProfissional([
          ...checkedProfissional,
          { professional_id: index.id, commission: 0 },
        ]);
      }
    }
  };

  useEffect(() => {
    const exist = checkedProfissional.map((item) => item.professional_id);
    setCheck(exist.includes(index.id));
  }, [checkedProfissional]);

  useEffect(() => {
    deleteProfessionalWithCommission(index);
  }, [check]);

  useEffect(() => {
    const newArr = checkedProfissional.map((professional) => {
      const findProfessionalInCommission = state.find(
        (commission) => professional.professional_id === commission.id
      );
      if (findProfessionalInCommission) {
        return {
          ...professional,
          commission: findProfessionalInCommission.value,
        };
      } else {
        return professional;
      }
    });
    setCheckedProfissional(newArr);
  }, [state]);

  return (
    <ContainerOrdemServices key={index.id}>
      <OrdemServiceItens width="37%" content="flex-start">
        <input
          type="checkbox"
          name="professional"
          id="box"
          checked={check}
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
          onClick={() => handleClick()}
        />
        <p>{index.name}</p>
      </OrdemServiceItens>
      <OrdemServiceItens width="20%" content="start">
        {index.professional_data?.cnpj}
      </OrdemServiceItens>
      <OrdemServiceItens width="18%" content="start">
        R$ {index.fixed_payment_value},00
      </OrdemServiceItens>
      <OrdemServiceItens width="17%" content="flex-start">
        {index.value
          ? ` ${Number(index.value).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}`
          : " - "}
      </OrdemServiceItens>
      <OrdemServiceItens width="25%" content="flex-start">
        {hourQuantity
          ? Number(hourQuantity * index.extra_hour_value).toLocaleString(
              "pt-br",
              {
                style: "currency",
                currency: "BRL",
              }
            )
          : "-"}
      </OrdemServiceItens>
      <OrdemServiceItens width="10%" content="flex">
        {index.value
          ? (
              Number(index.value) +
              Number(index.fixed_payment_value) +
              Number(hourQuantity * index.extra_hour_value)
            ).toLocaleString("pt-br", { style: "currency", currency: "BRL" })
          : (
              Number(index.fixed_payment_value) +
              Number(hourQuantity * index.extra_hour_value)
            ).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
      </OrdemServiceItens>
    </ContainerOrdemServices>
  );
};

export default OrdemServiceListItem;
