import React from "react";
import {Phone, Father} from './style'
import { ErrorMessage } from "../InputWithLabel/style";

const PhoneInternational = ({error,touched,onBlur,value,width,onChange}) => {
  return (
    <Father>
      <Phone
        country={"br"}
        mask={["(",/[1-9]/,/\d/,")"," ",/\d/," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,]}
        errors={error && touched}
        touched={touched}
        handleBlur={onBlur}
        width={width}
        type="number"
        name="telephone_number"
        value={value}
        onChange={onChange}
      />
      {error && touched && <ErrorMessage visible={error}>{error}</ErrorMessage>}
    </Father>
  );
};

export default PhoneInternational;
