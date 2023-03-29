import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { InputLine } from "../DefaultInput/style.js";
import {
  ErrorMessage,
  Label,
  RequiredLabel,
} from "../DefautInputSelect/style.js";
import { DefaultToast } from "../Toast/DefaultToast.js";
import {
  InputSearchWithLabel,
  DefaultInputCnae,
  ListItens,
  Itens,
  ValuesSelected,
} from "./style.js";

const InputSearchCnae = ({
  inputWidth,
  placeholder,
  setFieldValue,
  values,
  name,
  disabled,
  handleBlur,
  label,
  width,
  error,
  touched,
  required,
}) => {
  const url = `https://servicodados.ibge.gov.br/api/v2/cnae/classes/`;
  const [text, setText] = useState("");
  const [value, setValue] = useState([]);
  const [filteredValues, setFilteredValues] = useState([]);
  const [visible, setVisible] = useState(handleBlur);

  const arrCnaes = async () => {
    try {
      const { data } = await axios.get(url);
      setValue(data);
      setFilteredValues(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = (e) => {
    setText(e.target.value);
    const searchCnae = value.filter((prop) => String(prop["id"]).match(text));
    setFilteredValues(searchCnae);
  };

  const handleClick = (id, description) => {
    const isExist = values.find(obj => obj.id === id)
    if (isExist) {
      return toast.error(
        <DefaultToast text="Essa atividade ja foi selecionada" />
      );
    }
    setFieldValue(name, [...values,{id:id, description: description}])
  };

  const handleDelete = (index) => {
    const temp = values.filter((item) => item.id !== index); // para remover.
    setFieldValue("main_cnae", temp);
  };

  useEffect(() => {
    arrCnaes();
  }, []);

  return (
    <>
      <InputSearchWithLabel>
        <InputLine width={width} error={touched && error}>
          <Label focus={true}>
            {label}
            {required && <RequiredLabel>*</RequiredLabel>}
          </Label>
          <DefaultInputCnae
            label={label}
            value={text}
            disabled={disabled}
            onChange={(e) => handleFilter(e)}
            type="text"
            onBlur={visible}
            placeholder={placeholder}
            width={inputWidth}
            padding="0.3em 0 0 1em"
            required={required}
          />
        </InputLine>
        <div className="div1">
          {values?.map((index) => (
            <ValuesSelected
              key={index.id}
              onClick={() => handleDelete(index.id)}
            >
              {index.description}
            </ValuesSelected>
          ))}
        </div>
        {error && touched && (
          <ErrorMessage visible={error}>{error}</ErrorMessage>
        )}
      </InputSearchWithLabel>
      <ListItens visible={visible}>
        {filteredValues.map(({id,descricao},index) => (
          <Itens
            key={index}
            onClick={() => handleClick(id,descricao)}
          >
            {id} {descricao}
          </Itens>
        ))}
      </ListItens>
    </>
  );
};

export default InputSearchCnae;
