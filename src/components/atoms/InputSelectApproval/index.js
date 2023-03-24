import React from 'react';

import { InputLine } from '../../atoms/DefaultInput/style';
import arrowApproval from '../../../assets/icons/arrowApproval.svg'
import {
  Img,
  InputSelectContainer,
  InputSelectOption,
  InputSelectOptionPlaceholder,
} from './style.js';

const InputSelectAproval = ({
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
          onClick={onClick}
          placeholder={placeholder}
        >
          {placeholder && <InputSelectOptionPlaceholder disabled selected >
            {placeholder}
          </InputSelectOptionPlaceholder>}
          {options?.map((option, index) => (
            <InputSelectOption
              key={index}
              value={`${option.id}`}
            >
              {option.name || option.razao_social}
            </InputSelectOption>
          ))}
        </InputSelectContainer>
        <Img src={arrowApproval} alt="Lupa" />
      </InputLine>
    </>
  );
};

export default InputSelectAproval;
