import React from 'react';

import { InputLine } from '../DefaultInput/style';
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg';
import {
  Img,
  InputSelectContainer,
  InputSelectOption,
  InputSelectOptionPlaceholder,
} from './style.js';
import { ErrorMessage } from '../InputWithLabel/style';

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

}) => {
  const attributeValue = {
    ...(value && { value: value }),
  };

  return (
    <>
      <InputLine width={lineWidth} margin={margin}>
        <InputSelectContainer
          {...attributeValue}
          width={width}
          disabled={disabled}
          onChange={onChange}
        >
          <InputSelectOptionPlaceholder disabled selected>
            {placeHolder}
          </InputSelectOptionPlaceholder>
          {options?.map((option, index) => (
            <InputSelectOption
              key={index}
              value={`${option.id ? option.id : ''}`}
            >
              {option.name || option.razao_social}
            </InputSelectOption>
          ))}
        </InputSelectContainer>
        <Img src={arrowPointingDown} alt="Lupa" />
      </InputLine>
    </>
  );
};

export default InputSelect;
