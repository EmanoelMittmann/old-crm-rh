import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  DefaultInputCnae,
  InputSearchWithLabel,
  Itens,
  ListItens,
} from "../InputSearchCnae/style";
import { LegalNature } from "./Object/index";
import { ValuesSelected } from "./style";

const InputNature = ({ placeholder, inputWidth, setFieldValue, values }) => {
  const [id, setId] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);

  const handleFilter = (id) => {
    const searchCnj = LegalNature.filter((index) => index.id.includes(id));
    setFilteredValues(searchCnj);
  };

  const handleDelete = (index) => {
    const temp = values.code_and_description_of_the_legal_status
    temp.splice(index,1)
    setFieldValue('code_and_description_of_the_legal_status',temp)
  }

  useEffect(() => {
    if (LegalNature[0] !== undefined) {
      console.log(handleFilter(id));
    }
  }, [id]);

  return (
    <>
      <InputSearchWithLabel>
        <DefaultInputCnae
          onChange={(e) => setId(e.target.value)}
          values={id}
          type="search"
          placeholder={placeholder}
          width={inputWidth}
          padding="0.3em 0 0 1em"
        />
        {values.code_and_description_of_the_legal_status?.map((index) => (
          <ValuesSelected key={index.id} onClick={(index) => handleDelete(index)}>{index.name}</ValuesSelected>
        ))}
      </InputSearchWithLabel>

      {id >= 1 && (
        <ListItens>
          {filteredValues?.map((index) => (
            <Itens
              key={index.id}
              onClick={() => {
                setFieldValue("code_and_description_of_the_legal_status", [
                  { id: index.id, name: index.name },
                ]);
                setId("");
              }}
            >
              {index.name}
            </Itens>
          ))}
        </ListItens>
      )}
    </>
  );
};

export default InputNature;
