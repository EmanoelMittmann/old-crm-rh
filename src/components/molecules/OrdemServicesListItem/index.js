import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import InputSelect from "../../atoms/InputSelect";
import { ContainerOrdemServices, ContainerSelect, OrdemServiceItens } from "./style";


//Retirando mascara do componente 'comission' => value
// Expressão (/[^0-9,]/g) - parseFloat(value.replace(/[^0-9,]/g, '').replace(',', '.')).toFixed(2);
// 1 - /.../g: diz para o javascript substituir todas as incidências encontradas (g).
// 2 - [^0-9,]*: manda remover tudo o que "não for numérico" e "não for virgula" (^);
// 3 - O segundo "replace" substitui a virgula por ponto.
// 4 - O "parseFloat" converte a string para um valor flutuante e o método 
// 5 - Por fim, o "toFixed(2)" declara que deverão haver 2 casas decimais após o ponto.

const OrdemServiceListItem = ({
  index,
  setCheckedProfissional,
  checkedProfissional,
  deleteProfessionalWithCommission,
  professionals,
  companies,
  idCompanie,
  setIdCompanie
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
          { professional_id: index.id, companies_id: idCompanie ?? companies[0].id },
        ]);
      } else {
        setCheckedProfissional([
          ...checkedProfissional,
          { professional_id: index.id, commission: 0, companies_id: idCompanie ?? companies[0].id },
        ]);
      }
    }

  };


  const handleClickCompanies = () => {
    const obj = checkedProfissional.map((item) => {
     
      if (item.professional_id === index.id) {
        return { ...item, companies_id: idCompanie !== undefined ? idCompanie : item.companies_id };
      } else {
        return item;
      }
    });
    setCheckedProfissional(obj);
  }


  useEffect(() => {
    const exist = checkedProfissional.map((item) => item.professional_id);
    setCheck(exist.includes(index.id));
    console.log('checkedProfissional: ', checkedProfissional);
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
            commission: parseFloat(findProfessionalInCommission.value.replace('R$', "").replaceAll('.','').replace(',', '.'))
          };
        } else {
          return professional;
        }
      });
    setCheckedProfissional(newArr);
  }, [state]);


  return (
    <ContainerOrdemServices key={index.id}>
      <OrdemServiceItens width="19%" content="flex-start">
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
      <ContainerSelect>
        <InputSelect
          textColor={companies}
          lineWidth="10em"
          placeholder={companies[0]?.razao_social}
          onChange={(e) => setIdCompanie(e.target.value)}
          options={companies}
          width="100%"
          onClick={() => handleClickCompanies()}
        />
      </ContainerSelect>

      <OrdemServiceItens width="20%" content="start">
        {index.professional_data?.cnpj}
      </OrdemServiceItens>
      <OrdemServiceItens width="20%" content="start">
        R$ {index.fixed_payment_value},00
      </OrdemServiceItens>

      <OrdemServiceItens width="17%" content="flex-start">
        {index.value
          ? ` ${Number(parseFloat(index.value.replace(/[^0-9,]*/g, '').replace(',', '.'))).toLocaleString("pt-br", {
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
            Number(parseFloat(index.value.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2)) +
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