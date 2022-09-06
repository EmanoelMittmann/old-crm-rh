import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { InputSearchWithLabel, DefaultInputCnae, ListItens } from "./style.js";

const InputSearchCnae = ({ inputWidth, placeholder, onChange }) => {
  const [id, setId] = useState("");
  const [value, setValue] = useState([]);

  useEffect(() => {
    const dataInApi = async () => {
      await axios
        .get(`https://servicodados.ibge.gov.br/api/v2/cnae/classes/`)
        .then((res) => setValue(res.data));
    };

    const handleFilterInput = (id) => {
      const searchCnae = value.filter((index) => index.id.includes(id));
      setValue(searchCnae);
    };

    if (id) {
      handleFilterInput(id);
    } else {
      dataInApi();
    }
  }, [id]);

  console.log(value);

  return (
    <>
      <InputSearchWithLabel>
        <DefaultInputCnae
          onChange={(e) => setId(e.target.value)}
          type="search"
          placeholder={placeholder}
          width={inputWidth}
          padding="0.3em 0 0 1em"
        />
      </InputSearchWithLabel>
        {value.map((index) => (
          <ListItens key={index.id}>{index.descricao}</ListItens>
        ))}
    </>
  );
};

export default InputSearchCnae;
