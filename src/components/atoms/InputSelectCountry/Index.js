import React, { useState, useEffect } from 'react';
import { Country } from 'country-state-city';

import { InputLine } from '../DefaultInput/style';
import arrowPointingDown from '../../../assets/icons/arrowPointingDown.svg';
import { Img, InputSelectContainer, InputSelectOption, InputSelectOptionPlaceholder } from '../DefautInputSelect/style.js';

const Index = ({
  margin,
  width,
  onChange,
  placeholder,
  disabled,
  lineWidth,
  value,
  onClick,
  textColor
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
          textColor={textColor}
          width={width}
          onChange={onChange}
          disabled={disabled}
          onClick={onClick}
          placeholder={placeholder}
        >
          {placeholder && <InputSelectOptionPlaceholder disabled selected >
            {placeholder}
          </InputSelectOptionPlaceholder>}
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
