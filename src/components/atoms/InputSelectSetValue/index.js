import { Father } from "./style";
import { InputLine } from "../DefaultInput/style";
import {
  Img,
  InputSelectContainer,
  InputSelectOption,
  InputSelectOptionPlaceholder,
  Label,
} from "../DefautInputSelect/style";
import arrowPointingDown from "../../../assets/icons/arrowPointingDown.svg";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
const InputSelectSetValue = ({
  width,
  linewidth,
  label,
  value,
  textColor,
  setFieldValue,
  options,
  onChange,
  disabled,
  onClick,
  name,
  placeholder,
}) => {
  return (
    <Father>
      <InputLine width={linewidth}>
        <Label focus={true}>{label}</Label>
        <InputSelectContainer
          value={value}
          textColor={textColor}
          width={width}
          onClick={onClick}
          onChange={(e) => setFieldValue(name,Number(e.target.value))}
          disabled={disabled}
          placeholder={placeholder}
        >
          {placeholder && (
            <InputSelectOptionPlaceholder disabled selected>
              {placeholder}
            </InputSelectOptionPlaceholder>
          )}
          {options.map((item) => (
            <InputSelectOption key={item.id} value={item.id}>
              {item.name}
            </InputSelectOption>
          ))}
        </InputSelectContainer>
        <Img src={arrowPointingDown} alt="Lupa" />
      </InputLine>
    </Father>
  );
};

export default InputSelectSetValue;
