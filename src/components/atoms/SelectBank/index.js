import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import {
  ErrorMessage,
  InputLine,
  Father,
  DefaultInput,
} from "../DefaultInput/style";
import arrowPointingDown from "../../../assets/icons/arrowPointingDown.svg";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import { DefaultToast } from "../Toast/DefaultToast";

import axios from "axios";
import { Container, InputDynamic, InputSelectOption, Label, RequiredLabel } from "./style.js";

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
  required,
}) {
  const [state, setState] = useState([]);
  const [focus, setFocus] = useState(false);
  const [blur, setBlur] = useState(false);
  const [text, setText] = useState('');

  const getBanks = async () => {
    try {
      const { data } = await axios.get(`https://brasilapi.com.br/api/banks/v1`);
      setState({ id: data.ispb, name: data.fullName });
    } catch (error) {
      return toast.error(<DefaultToast text={error.data} />);
    }
  };
  useMemo(() => {
    getBanks();
  }, []);

  const attributeValue = {
    ...(value && { value: value }),
  };

  return (
    <>
      <Father width={width}>
        <InputLine>
          <DefaultInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            padding="0 0 0 1em"
            placeholder="Pesquise seu banco"
          />
        </InputLine>
      </Father>
      {text.length >= 1 &&
       <Container>
        {state.map(item => <InputSelectOption key={item.id}>{item.id} {item.name}</InputSelectOption>)}
       </Container>
       }
    </>
  );
}

export default InputBank;
