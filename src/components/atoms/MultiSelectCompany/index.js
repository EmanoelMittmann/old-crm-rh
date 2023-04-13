import React from "react";
import { DefaultInput, InputLine } from "../DefaultInput/style";
import { Label, RequiredLabel } from "../DefautInputSelect/style";
import { useState } from "react";
import { Container, Father, ListOptions, Options, Values } from "./style";
import { BlueButton } from "../Buttons/BlueButton/style";
import { useMemo } from "react";
import { toast } from "react-toastify";
import { DefaultToast } from "../Toast/DefaultToast";
import { useCallback } from "react";
import { useEffect } from "react";

const MultiSelectCompany = ({
  label,
  setFieldValue,
  required,
  width,
  value,
  options,
  placeholder,
  name,
}) => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const [arrWaiting, setArrWaiting] = useState([]);

  const findValues = useCallback(() => {
    const companies = options.filter((item) =>
      value.find((v) => v === item.id)
    );
    setArrWaiting(
      companies.map((item) => ({
        id: item.id,
        description: item.razao_social,
      }))
    );
  }, [value, options]);

  function ExistValue(id) {
    return arrWaiting.find((item) => item.id === id);
  }

  const verifyValues = (id, description) => {
    const existValue = arrWaiting.find((index) => index.id === id);
    if (existValue) {
      return toast.warn(<DefaultToast text="Empresa ja selecionada" />);
    }
    setArrWaiting([...arrWaiting, { id: id, description: description }]);
  };

  const filtered = useMemo(() => {
    return (
      options.filter((item) =>
        String(item.razao_social.toLowerCase()).match(text)
      ) ?? options
    );
  }, [text, options]);

  const handleDelete = (id) => {
    setFieldValue(name,value.filter(item => item !== id))
  };

  const handleFocus = () => setVisible(true);

  useEffect(() => {
    findValues();
  }, [findValues]);

  return (
    <>
      <Father width={width}>
        <Container>
          <InputLine width={width}>
            {label && (
              <Label focus={label}>
                {label}
                {required && <RequiredLabel>*</RequiredLabel>}
              </Label>
            )}
            <DefaultInput
              onChange={(e) => setText(e.target.value)}
              width="100%"
              value={text}
              placeholder={placeholder}
              onFocus={handleFocus}
              padding={"0em 0em 0em 1em"}
            />
          </InputLine>
          <BlueButton
            width="25%"
            onClick={() => setFieldValue(name, arrWaiting.map(item => item.id))}
            type="button"
          >
            Adicionar
          </BlueButton>
        </Container>
        <Container>
          {value.length === arrWaiting.length && arrWaiting.map((item) => (
            <Values onClick={() => handleDelete(item.id)} key={item.id}>{item.description}</Values>
          ))}
        </Container>
        <ListOptions visible={visible} onMouseLeave={() => setVisible(false)}>
          {filtered.map((opts) => (
            <Options
              key={opts.id}
              onClick={() => verifyValues(opts.id, opts.razao_social)}
              selected={ExistValue(opts.id)}
            >
              {opts.razao_social}
            </Options>
          ))}
        </ListOptions>
      </Father>
    </>
  );
};

export default MultiSelectCompany;
