import React, { useEffect, useRef, useState } from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { cleanMask } from "../../utils/cleanMask";
import { InputRadio, LabelInputRadio } from "../InputRadio/style";
import { DefaultInput, InputLine } from "../DefaultInput/style";
import InputWithLabel from "../InputWithLabel";

import {
  OvertimePay,
  OvertimePayCalcLabel,
  ContainerOvertimePayInput,
  ContainerHourlyPayRate,
  ContainerOvertimePayCalcLabel,
  LimitOvertime,
  ContainerLimitOvertimeButton,
  ContainerLimitOvertimeButtons,
  ContainerLimitOvertime,
} from "./style";
import { ErrorMessage } from "../InputWithLabel/style";

const OvertimePayCalc = ({ data }) => {
  const [componentJustRendered, setComponentJustRendered] = useState(false);
  const inputRef = useRef(null);

  const { values, handleChange, setFieldValue, handleBlur, errors, touched } =
    data;

  const fixedValueMask = createNumberMask({
    prefix: "R$",
    suffix: ",00",
    thousandsSeparatorSymbol: ".",
  });

  const hourlyPayRate = createNumberMask({
    prefix: "R$",
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
    decimalLimit: 2,
  });

  useEffect(() => {
    setComponentJustRendered(true);
  }, []);

  const limitAllowed = {
    ...(componentJustRendered &&
      values.limited_extra_hours === true && { checked: true }),
  };

  const limitNotAllowed = {
    ...(componentJustRendered &&
      (values === undefined || values.limited_extra_hours === false) && {
        checked: true,
      }),
  };

  return (
    <ContainerOvertimePayCalcLabel>
      <OvertimePay>
        <ContainerOvertimePayInput>
          <OvertimePayCalcLabel for="variable1">
            Horas/mês
          </OvertimePayCalcLabel>
          <InputWithLabel
            defaultValue={values.hours_month}
            value={values.variable1}
            id="variable1"
            touched={touched.variable1}
            error={errors.variable1}
            onChange={handleChange("variable1")}
            handleBlur={() => {}}
            label="Horas"
            padding="0em 2em 0em 0em"
            type="number"
            disabled={values.job_type === "FREELANCER"}
            required
          />
        </ContainerOvertimePayInput>

        <ContainerOvertimePayInput>
          <OvertimePayCalcLabel for="variable2">
            Honorário  fixo
          </OvertimePayCalcLabel>
          <MaskedInput
            id="variable2"
            defaultValue={values.fixed_payment_value}
            mask={fixedValueMask}
            placeholder="R$"
            onChange={(e) => {
              const value = cleanMask(e.target.value);
              const newValue = value.slice(0, -2);
              setFieldValue("variable2", newValue);
            }}
            guide={true}
            render={(maskRef, maskProps) => (
              <InputLine
                widthLine="23%"
                margin="0 2em 0 0"
                error={errors.variable2}
              >
                <DefaultInput
                  padding="0.3em 1.2em 0 1.2em"
                  width="100%"
                  widthLine="23%"
                  disabled={values.job_type === "FREELANCER"}
                  margin="0 2em 0 0"
                  ref={(node) => {
                    if (node) {
                      maskRef(node);
                      inputRef.current = node;
                    }
                  }}
                  {...maskProps}
                />
              </InputLine>
            )}
          />
        </ContainerOvertimePayInput>
        <ContainerHourlyPayRate>
          <OvertimePayCalcLabel for="hours">
            Valor hora extra
          </OvertimePayCalcLabel>
          <MaskedInput
            mask={hourlyPayRate}
            value={values.extra_hour_value}
            placeholder="R$"
            onChange={(e) => {
              const newValue = e.target.value;
              setFieldValue("extra_hour_value", newValue);
            }}
            keepCharPositions={true}
            guide={false}
            render={(maskRef, maskProps) => (
              <InputLine widthLine="23%" margin="0 2em 0 0">
                <DefaultInput
                  padding="0.3em 1.2em 0 1.2em"
                  width="100%"
                  widthLine="23%"
                  margin="0 2em 0 0"
                  ref={(node) => {
                    if (node) {
                      maskRef(node);
                      inputRef.current = node;
                    }
                  }}
                  {...maskProps}
                />
              </InputLine>
            )}
          />
        </ContainerHourlyPayRate>
      </OvertimePay>
      <LimitOvertime></LimitOvertime>
    </ContainerOvertimePayCalcLabel>
  );
};

export default OvertimePayCalc;
