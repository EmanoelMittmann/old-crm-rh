import React from 'react';

import { InputLine } from '../../atoms/DefaultInput/style';
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg';
import { Label } from './style.js';
import { Img, InputSelectContainer, InputSelectOption } from '../DefautInputSelect/style.js';
import { InputSelectOptionPlaceholder } from '../InputSelectUf/style';


const InputSelectWithLabel = ({
  setSelectedOption,
  options,
  placeholder,
  width,
  lineWidth,
  label,
  reset,
  disabled,
  onFocus,
  value,
}) => {
  return (
    <InputLine width={lineWidth}>
      {label && <Label>{label}</Label>}
      <InputSelectContainer
        width={width}
        disabled={disabled}
        onChange={setSelectedOption}
        onFocus={onFocus}
        value={value}
      >
        {reset && (
          <InputSelectOptionPlaceholder value={placeholder} selected disabled>
            {placeholder}
          </InputSelectOptionPlaceholder>
        )}
        {!options.length ? (
          <InputSelectOption disabled>Sem {placeholder}</InputSelectOption>
        ) : (
          options.map((option) => (
            <InputSelectOption key={option.id} value={option.id}>
              {option.name}
            </InputSelectOption>
          ))
        )}
      </InputSelectContainer>
      <Img src={arrowPointingDown} alt="Lupa" />
    </InputLine>
  );
};

export default InputSelectWithLabel;
