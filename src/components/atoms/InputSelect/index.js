import React, { useState } from "react";
import { InputLine } from "../../atoms/DefaultInput/style";
import arrowPointingDown from "../../../assets/icons/arrowPointingDown.svg";
import {
  ErrorMessage,
  Label,
  RequiredLabel,
  Img,
  InputSelectContainer,
  InputSelectOption,
  InputSelectOptionPlaceholder,
  Father,
} from "../DefautInputSelect/style.js";

const InputSelect = ({
  onChange,
  options,
  placeholder,
  width,
  error,
  disabled,
  touched,
  lineWidth,
  value,
  margin,
  onClick,
  label,
  required,
  textColor,
}) => {
  const [focus, setFocus] = useState(false);
  const [blur, setBlur] = useState(false);

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
          textColor={textColor}
          width={lineWidth}
          disabled={disabled}
          onChange={onChange} 
          placeholder={placeholder}
        >
          {placeholder && (
            <InputSelectOptionPlaceholder value={placeholder}>
              {placeholder}
            </InputSelectOptionPlaceholder>
          )}
          {options?.map((option, index) => (
            <InputSelectOption key={index} value={option.id}>
              {option.name || option.razao_social}
            </InputSelectOption>
          ))}
        </InputSelectContainer>
        <Img src={arrowPointingDown} alt="Lupa" />
      </InputLine>
      {error && touched && <ErrorMessage visible={error}>{error}</ErrorMessage>}
    </Father>
  );
};

export default InputSelect;
