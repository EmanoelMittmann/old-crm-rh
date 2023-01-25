import React, { useState, useEffect } from 'react';
import { Country } from 'country-state-city';

import {
  InputSelectContainer,
  InputSelectOption,
  InputSelectOptionPlaceholder,
  Img,
} from './style';
import { InputLine } from '../DefaultInput/style';
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg';

const Index = ({
  margin,
  width,
  onChange,
  placeHolder,
  options,
  disabled,
  lineWidth,
  value,
  onClick,
}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const attributeValue = {
    ...(value && { value: value }),
  };

  return (
    <>
      <InputLine width={lineWidth} margin={margin}>
        <InputSelectContainer
          {...attributeValue}
          width={width}
          onChange={onChange}
          disabled={disabled}
          onClick={onClick}
        >
          <InputSelectOptionPlaceholder disabled selected>
            {placeHolder}
          </InputSelectOptionPlaceholder>
          {countries?.map((option) => (
            <InputSelectOption key={option.isoCode}>
              {option.name}
            </InputSelectOption>
          ))}
        </InputSelectContainer>
        <Img src={arrowPointingDown} alt="Lupa" />
      </InputLine>
    </>
  );
};

export default Index;
