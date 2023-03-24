import { useEffect, useState } from "react";
import { InputLine, Father, DefaultInput } from "../DefaultInput/style";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import { DefaultToast } from "../Toast/DefaultToast";
import axios from "axios";
import { Container, InputSelectOption, Label, RequiredLabel } from "./style.js";
import { ErrorMessage } from "../InputSelectUf/style";

function InputBank({
  width,
  value,
  setFieldValue,
  label,
  required,
  error,
  touched,
  translate,
  lineWidth,
  padding,
  name
}) {
  const [state, setState] = useState([]);
  const [text, setText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [visible, setVisible] = useState(false);
  const propName = name;

  const getBanks = async () => {
    try {
      const { data } = await axios.get(`https://brasilapi.com.br/api/banks/v1`);
      setState(data);
      setFiltered(data);
    } catch (error) {
      return toast.error(<DefaultToast text={error.data} />);
    }
  };

  const handleChange = async (e) => {
    setText(e.target.value);
    const filter = state.filter(
      (obj) =>
        obj["fullName"] && obj["fullName"].toLowerCase().match(text) && obj
    );
    setFiltered(filter);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setVisible(false);
    }, 100);
  };

  const handleFocus = () => {
    setVisible(true);
    setFieldValue(propName, "");
  };

  const attributeValue = {
    ...(value && { value: value }),
  };

  useEffect(() => {
    getBanks();
  }, []);

  useEffect(() => {
    if (text.trim() === "") {
      setFiltered(state);
    }
  }, [text]);

  return (
    <>
      <Father width={width}>
        <InputLine error={error && touched}>
          {label && (
            <Label focus={label}>
              {label}
              {required && <RequiredLabel>*</RequiredLabel>}
            </Label>
          )}
          <DefaultInput
            {...attributeValue}
            width={width}
            onChange={(e) => handleChange(e)}
            padding={padding}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder="Pesquise seu banco"
          />
        </InputLine>
        {error && touched && <ErrorMessage>{error}</ErrorMessage>}
        <Container visible={visible} translate={translate} width={lineWidth}>
          {filtered?.map((item) => (
            <InputSelectOption
              key={item?.ispb}
              onClick={() => setFieldValue(propName, item?.name)}
            >
              {item?.ispb} {item?.name}
            </InputSelectOption>
          ))}
        </Container>
      </Father>
    </>
  );
}

export default InputBank;