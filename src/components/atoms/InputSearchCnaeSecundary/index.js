import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BlueButton } from "../Buttons/BlueButton/style.js";
import {
  InputSearchWithLabel,
  DefaultInputCnae,
  ListItens,
  Itens,
  ValuesSelected,
} from "./style.js";

const InputSearchCnaeSecundary = ({
  inputWidth,
  placeholder,
  setFieldValue,
  values,
}) => {
  const [id, setId] = useState("");
  const [value, setValue] = useState([]);
  const [filteredValues, setFilteredValues] = useState([]);
  const [waitingValue, setWaitingValue] = useState([])
  const [selectValue, setSelectValue] = useState([]);

  const handleFilter = (id) => {
    const searchCnae = value.filter((index) => index.id.includes(id));
    setFilteredValues(searchCnae);
  };

  const handleClick = (e) => {
    e.preventDefault()
    setFieldValue('secondary_cnae',waitingValue)
  }

  const handleDelete = (index) => {
    const temp = values.secondary_cnae
    temp.splice(index,1)
    setFieldValue('secondary_cnae',temp)
  }

  useEffect(() => {
    const dataInApi = async () => {
      await axios
        .get(`https://servicodados.ibge.gov.br/api/v2/cnae/classes/`)
        .then((res) => setValue(res.data));
    };
    dataInApi();
  }, []);

  useEffect(() => {
    if (value[0] !== undefined) {
      handleFilter(id);
    }
  }, [id]);

  useEffect(() => {
    setSelectValue(values.secondary_cnae);
    console.log(selectValue)
  }, [values.secondary_cnae]);

  return (
    <>
      <InputSearchWithLabel>
        <DefaultInputCnae
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="search"
          placeholder={placeholder}
          width={inputWidth}
          padding="0.3em 0 0 1em"
        />
        <div className="div1">
          {selectValue?.map((index) => (
            <ValuesSelected key={index.id} onClick={(index) => handleDelete(index)}>{index.description}</ValuesSelected>
          ))}
        </div>
      </InputSearchWithLabel>
      {id >= 1 && (
        <ListItens>
          {filteredValues.length <= 150 &&
            filteredValues.map((index) => (
              <Itens
                key={index.id}
                onClick={() => {
                  setWaitingValue( 
                  [...values.secondary_cnae,{id: index.id, description: index.descricao}]);
                  setId("");
                }}
              >
                {index.id} {index.descricao}
              </Itens>
            ))}
        </ListItens>
      )}
      <BlueButton width="20%" onClick={(e) => handleClick(e)}>Adicionar</BlueButton>
    </>
  );
};

export default InputSearchCnaeSecundary;
