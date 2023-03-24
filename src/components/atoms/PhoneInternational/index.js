import React, { useState } from "react";
import {Phone, Father} from './style'
import { InputLine } from "../DefaultInput/style";
import { ErrorMessage, Label, RequiredLabel } from "../DefautInputSelect/style.js";

const PhoneInternational = ({  error,  touched,  onBlur,  value,  width,  onChange, label, required}) => {
  const [focus, setFocus] = useState(false);
  const [blur, setBlur] = useState(false);
  return (
    <Father>
      <InputLine>
        <Phone
          country={"br"}
          mask={["(", /[1-9]/, /\d/, ")", " ", /\d/, " ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/,]}
          errors={error && touched}
          touched={touched}
          handleBlur={onBlur}
          width={width}
          type="number"
          name="telephone_number"
          value={value}
          onChange={onChange}
        />
        <Label focus={focus || value == ''} blur={blur || value !== ''}>
          {label}
          {required && <RequiredLabel>*</RequiredLabel>}
        </Label>
      </InputLine> 
      {error && touched && <ErrorMessage visible={error}>{error}</ErrorMessage>}
    </Father>
  );
};

export default PhoneInternational;
