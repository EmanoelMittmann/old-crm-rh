import React from 'react';

import { InputLine } from '../../atoms/DefaultInput/style';
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg';
import { Label } from './style.js';
import {
  Img,
  InputSelectContainer,
  InputSelectOption,
  InputSelectOptionPlaceholder,
} from '../InputSelect/style.js';

const InputSelectWithLabel = ({
  setSelectedOption,
  options,
  placeholder,
  width,
  lineWidth,
  label,
  reset,
  onFocus,
}) => {
  return (
    <InputLine width={lineWidth}>
      {label && <Label>{label}</Label>}
      <InputSelectContainer
        width={width}
        onChange={setSelectedOption}
        onFocus={onFocus}
      >
        {reset && (
          <InputSelectOptionPlaceholder value={placeholder} selected>
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
