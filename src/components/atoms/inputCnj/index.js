import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { InputLine } from "../DefaultInput/style";
import { DefaultInputCnae, Itens, ListItens } from "../InputSearchCnae/style";
import { ErrorMessage, Label } from "../InputWithLabel/style";
import { LegalNature } from "./Object/index";
import { ValuesSelected, InputSearchWithLabel } from "./style";

const InputNature = ({
  placeholder,
  inputWidth,
  setFieldValue,
  values,
  value,
  label,
  error,
  touched,
}) => {
  const [id, setId] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);
  const [blur, setBlur] = useState("");
  const [focus, setFocus] = useState("");

  const handleFilter = (id) => {
    const searchCnj = LegalNature.filter((index) => index.id.includes(id));
    setFilteredValues(searchCnj);
  };

  const handleDelete = (index) => {
    const temp = values.code_and_description_of_the_legal_status;
    temp.splice(index, 1);
    setFieldValue("code_and_description_of_the_legal_status", temp);
  };

  useEffect(() => {
    if (LegalNature[0] !== undefined) {
      handleFilter(id);
    }
  }, [id]);

  return (
    <>
      <InputSearchWithLabel>
        <InputLine width={'100%'} error={touched && error}>
          <Label focus={focus || value !== ""} blur={blur || value !== ""}>
            {label}
          </Label>
          <DefaultInputCnae
            onChange={(e) => setId(e.target.value)}
            value={id}
            type="search"
            placeholder={placeholder}
            width={inputWidth}
            padding="0.3em 0 0 1em"
          />
        </InputLine>
        {values.code_and_description_of_the_legal_status?.map((index) => (
          <ValuesSelected
            key={index.id}
            onClick={(index) => handleDelete(index)}
          >
            {index.name}
          </ValuesSelected>
        ))}
        {error && touched && (
          <ErrorMessage visible={error}>{error}</ErrorMessage>
        )}
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
