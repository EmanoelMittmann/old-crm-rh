import axios from "axios";
import React, { useCallback, useMemo } from "react";
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
import { useRef } from "react";

const InputSearchCnae = ({
  inputWidth,
  placeholder,
  setFieldValue,
  values,
  name,
  disabled,
  label,
  width,
  error,
  touched,
  required,
}) => {
  const url = `https://servicodados.ibge.gov.br/api/v2/cnae/classes/`;
  const [text, setText] = useState("");
  const [value, setValue] = useState([]);
  const [visible, setVisible] = useState(false);

  const arrCnaes = useCallback(async() => {
      try {
        const { data } = await axios.get(url);
        setValue(data);
      } catch (error) {
        console.error(error);
      }
  },[])

  function ExistValue(id) {
    return values.find((item) => item.id === id);
  }

  const handleBlur = (e) => {
    setTimeout(() => {
      setVisible(false);
    }, 100);
  };

  const handleFocus = () => {
    setVisible(true);
  };

  const filtered = useMemo(() => {
    return value.filter((prop) => String(prop.id).match(text)) ?? value;
  },[text, value]);

  const handleClick = (id, description) => {
    const isExist = values.find((obj) => obj.id === id);
    if (isExist) {
      return toast.error(
        <DefaultToast text="Essa atividade ja foi selecionada" />
      );
    }
    setFieldValue(name, [...values, { id: id, description: description }]);
  };

  const handleDelete = (index) => {
    const temp = values.filter((item) => item.id !== index);
    setFieldValue(name, temp);
  };

  useEffect(() => {
    arrCnaes();
  }, []);

  return (
    <>
      <InputSearchWithLabel width={width}>
        <InputLine width={width} error={touched && error}>
          <Label focus={true}>
            {label}
            {required && <RequiredLabel>*</RequiredLabel>}
          </Label>
          <DefaultInputCnae
            label={label}
            value={text}
            disabled={disabled}
            onChange={(e) => setText(e.target.value)}
            type="text"
            onFocus={handleFocus}
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
      <ListItens visible={visible} onMouseLeave={(e) => handleBlur(e)}>
        {filtered.map(({ id, descricao }, index) => (
          <Itens
            key={index}
            onClick={() => !ExistValue(id) && handleClick(id, descricao)}
            selected={ExistValue(id)}
          >
            {id} {descricao}
          </Itens>
        ))}
      </ListItens>
    </>
  );
};

export default InputSearchCnae;
