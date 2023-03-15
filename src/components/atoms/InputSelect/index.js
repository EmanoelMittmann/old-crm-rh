import React, { useState } from 'react';

import { InputLine } from '../../atoms/DefaultInput/style';
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg';
import {
  Img,
  InputSelectContainer,
  InputSelectOption,
  InputSelectOptionPlaceholder,
} from './style.js';
import { ErrorMessage, Father } from '../InputSelectUf/style';
import { Label, RequiredLabel } from '../InputWithLabel/style';

const InputSelect = ({
  onChange,
  options,
  placeHolder,
  width,
  error,
  disabled,
  touched,
  lineWidth,
  value,
  margin,
  onClick,
  label, 
  required
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
          width={width}
          disabled={disabled}
          onChange={onChange}
          onClick={onClick}  
        >
            <InputSelectOptionPlaceholder disabled selected>
              {placeHolder}
            </InputSelectOptionPlaceholder>
          {options?.map((option, index) => (
            <InputSelectOption
              key={index}
              value={option.id}
            >
              {option.name || option.razao_social}
            </InputSelectOption>
          ))}
        </InputSelectContainer>
        <Img src={arrowPointingDown} alt="Lupa" />
      </InputLine>
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}
    </Father>
  );
};

export default InputSelect;
