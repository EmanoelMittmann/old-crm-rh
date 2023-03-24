import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../../../api/api";
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
}) => {
  const [check, setCheck] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [idCompanie, setIdCompanie] = useState();
  const [wage, setWage] = useState(0)
  const [comissionUser, setcomissionUser] = useState(0)
  const [extraHours, setExtraHours] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)


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
          { professional_id: index.id, commission: 0, companies_id: idCompanie },
        ]);
      }
    }

  };
  const getCompanies = async () => {
    try {
      const { data } = await api({
        method: "GET",
        url: "/companies",
        razao_social: companies
      });
      setCompanies(data.data);
    } catch (error) {
      console.error(error)
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

  const totalSalaryPayment = () =>{
    setTotalPayment(
      index.value
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
        }),

      setWage(index.fixed_payment_value),

      setcomissionUser(index.value
        ? ` ${Number(parseFloat(index.value.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2)).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}`
        : " - "),
      setExtraHours(hourQuantity
        ? Number(hourQuantity * index.extra_hour_value).toLocaleString(
          "pt-br",
          {
            style: "currency",
            currency: "BRL",
          }
        )
        : "-")
    )
  }


  useEffect(() => {
    const exist = checkedProfissional.map((item) => item.professional_id);
    setCheck(exist.includes(index.id));
    if (idCompanie === undefined) setIdCompanie(1)
  }, [checkedProfissional]);

  useEffect(() => {
    deleteProfessionalWithCommission(index);
    getCompanies();
    totalSalaryPayment()
  }, [check, wage, extraHours, totalPayment, comissionUser]);
  console.log('totalPayment: ', totalPayment);

  useEffect(() => {
    const newArr = checkedProfissional.map((professional) => {
      const findProfessionalInCommission = state.find(
        (commission) => professional.professional_id === commission.id
      );
      if (findProfessionalInCommission) {
        return {
          ...professional,
          commission: parseFloat(findProfessionalInCommission.value.split('$')[1].replace(',', '.'))
        };
      } else {
        return professional;
      }
    });
    setCheckedProfissional(newArr);
  }, [state]);


  return (
    <ContainerOrdemServices key={index.id}>
      <OrdemServiceItens width="15%" content="flex-start">
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
          lineWidth="12em"
          value={idCompanie}
          onChange={(e) => setIdCompanie(e.target.value)}
          options={companies}
          width="100%"
          onClick={() => handleClickCompanies()}

        />
      </ContainerSelect>
      <OrdemServiceItens width="20%" content="start">
        {index.professional_data?.cnpj}
      </OrdemServiceItens>
      
      {/* valor salario */}
      <OrdemServiceItens width="18%" content="start">
        R$ {wage},00
      </OrdemServiceItens>

      {/* valor da comissão */}
      <OrdemServiceItens width="17%" content="flex-start">
        {comissionUser}
      </OrdemServiceItens>

      {/* Valor das horas extras */}
      <OrdemServiceItens width="25%" content="flex-start">
        { extraHours}
      </OrdemServiceItens>

      {/* Soma do Total */}
      <OrdemServiceItens width="10%" content="flex">
        {totalPayment}
      </OrdemServiceItens>
      {extraHours}
    </ContainerOrdemServices>
  );
};

export default OrdemServiceListItem;