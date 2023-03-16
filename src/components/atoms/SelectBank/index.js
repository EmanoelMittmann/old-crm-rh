import React from "react";
import { useEffect, useState } from "react";
import { ErrorMessage, InputLine, Father } from "../DefaultInput/style";
import arrowPointingDown from "../../../assets/icons/arrowPointingDown.svg";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import { DefaultToast } from "../Toast/DefaultToast";

import axios from "axios";
import {
  Img,
  InputSelectContainer,
  InputSelectOption,
  InputSelectOptionPlaceholder,
  Label,
  RequiredLabel,
} from "./style.js";

function InputBank({
  onChange,
  placeHolder,
  width,
  lineWidth,
  value,
  margin,
  touched,
  error,
  label,
  required
}) {
  const [state, setState] = useState([]);
  const [focus, setFocus] = useState(false);
  const [blur, setBlur] = useState(false);
  const [errorRequest, setErrorRequest] = useState(null);

  useEffect(() => {
    axios
      .get(`https://brasilapi.com.br/api/banks/v1`)
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        setErrorRequest(error);
        return toast.error(
          <DefaultToast text="Não foi possível completar o upload do Banco!" />
        );
      });
  }, []);

  const attributeValue = {
    ...(value && { value: value }),
  };

  return (
    <Father width={width}>
      <InputLine width={lineWidth} margin={margin} error={error && touched}>
        <Label focus={focus || value == ''} blur={blur || value !== ''}>
          {label}
          {required && <RequiredLabel>*</RequiredLabel>}
        </Label>
        <InputSelectContainer
          {...attributeValue}
          width={width}
          onChange={onChange}
        >
          <InputSelectOptionPlaceholder disabled selected>
            {placeHolder}
          </InputSelectOptionPlaceholder>
          {state?.map((option, index) => (
            <InputSelectOption
              key={index}
              value={`${option.name ? option.name : ""}`}
            >
              {option.name}
            </InputSelectOption>
          ))}
        </InputSelectContainer>
        <Img src={arrowPointingDown} alt="Lupa" />
      </InputLine>
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}
    </Father>
  );
}

export default InputBank;
