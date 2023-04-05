import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { InputLine } from "../DefaultInput/style";
import { DefaultInputCnae, Itens, ListItens } from "../InputSearchCnae/style";
import {
  ErrorMessage,
  Label,
  RequiredLabel,
} from "../DefautInputSelect/style.js";
import { LegalNature } from "./Object/index";
import { ValuesSelected, InputSearchWithLabel } from "./style";

const InputNature = ({
  placeholder,
  inputWidth,
  setFieldValue,
  values,
  value,
  disabled,
  label,
  error,
  touched,
  required,
}) => {
  const [id, setId] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleFilter = (id) => {
    const searchCnj = LegalNature.filter((index) => String(index.id).includes(String(id)));
    setFilteredValues(searchCnj);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setVisible(false);
    }, 100);
  };

  const handleFocus = () => setVisible(true);

  const ExistValue = (id) => {
    return value.find((item) => item.id === id);
  };

  const handleDelete = (index) => {
    const temp = value;
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
        <InputLine width="100%" error={touched && error}>
          <Label focus={true}>
            {label}
            {required && <RequiredLabel>*</RequiredLabel>}
          </Label>
          <DefaultInputCnae
            onChange={(e) => setId(e.target.value)}
            value={id}
            disabled={disabled}
            onFocus={handleFocus}
            type="text"
            placeholder={placeholder}
            width={inputWidth}
            padding="0.3em 0 0 1em"
          />
        </InputLine>
        {value?.map((index) => (
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
      <ListItens visible={visible} onMouseLeave={handleBlur}>
        {filteredValues?.map((index) => (
          <Itens
            key={index.id}
            onClick={() => {
              setFieldValue("code_and_description_of_the_legal_status", [
                { id: index.id, name: index.name },
              ]);
              setId("");
            }}
            selected={ExistValue(index.id)}
          >
            {index.name}
          </Itens>
        ))}
      </ListItens>
    </>
  );
};

export default InputNature;
