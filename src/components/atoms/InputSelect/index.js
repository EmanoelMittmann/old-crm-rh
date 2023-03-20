import React, { useState } from 'react';
import { InputLine } from '../../atoms/DefaultInput/style';
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg';
import {
  Img,
  InputSelectContainerData,
} from './style.js';
import { Father } from '../InputSelectUf/style';
import { ErrorMessage, Label, RequiredLabel } from '../StyledComponents/generalStyle';

const InputSelect = ({
  id,
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
}) => {
  const [focus, setFocus] = useState(false);
  const [blur, setBlur] = useState(false);
  const [textColor, setTextColor] = useState("#acb4ba")

  function handleTextColor(e){
    setTextColor(e.target.value)
  }

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

        <InputSelectContainerData
          {...attributeValue}
          width={width}
          disabled={handleTextColor && disabled}
          onChange={onChange}
          onClick={onClick}
          placeholder={placeholder}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options?.map((option, index) => (
            <option
              key={index}
              value={option.id}
            >
              {option.name || option.razao_social}
            </option>
          ))}

        </InputSelectContainerData>
        <Img src={arrowPointingDown} alt="Lupa" />
      </InputLine>
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}
    </Father>
  );
};

export default InputSelect;
