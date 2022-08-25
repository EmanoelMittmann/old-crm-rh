import React, { useEffect, useRef, useState } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { cleanMask } from '../../utils/cleanMask';
import { InputRadio, LabelInputRadio } from '../InputRadio/style';
import { DefaultInput, InputLine } from '../DefaultInput/style';
import InputWithLabel from '../InputWithLabel';

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
} from './style';

const OvertimePayCalc = ({ data }) => {
  const [componentJustRendered, setComponentJustRendered] = useState(false);
  const inputRef = useRef(null);

  const { values, handleChange, setFieldValue, handleBlur, errors, touched } =
    data;

  const fixedValueMask = createNumberMask({
    prefix: 'R$',
    suffix: ',00',
    thousandsSeparatorSymbol: '.',
  });

  const hourlyPayRate = createNumberMask({
    prefix: 'R$',
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
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
            Variável 1 (divisor)
          </OvertimePayCalcLabel>
          <InputLine width="90%">
            <DefaultInput
              defaultValue={values.hours_month}
              value={values.variable1}
              id="variable1"
              placeholderPosition="left"
              onChange={handleChange('variable1')}
              placeholder="Horas"
              padding="0.3em 1.2em 0 1.2em"
              type="number"
            />
          </InputLine>
        </ContainerOvertimePayInput>

        <ContainerOvertimePayInput>
          <OvertimePayCalcLabel for="variable2">
            Variável 2 (valor fixo)
          </OvertimePayCalcLabel>
          <MaskedInput
            id="variable2"
            defaultValue={values.fixed_payment_value}
            mask={fixedValueMask}
            placeholder="R$"
            onChange={(e) => {
              const value = cleanMask(e.target.value);
              const newValue = value.slice(0, -2);
              setFieldValue('variable2', newValue);
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
              setFieldValue('extra_hour_value', newValue);
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
      <LimitOvertime>
        <OvertimePayCalcLabel>Limitar hora extra?</OvertimePayCalcLabel>

        <ContainerLimitOvertime>
          <ContainerLimitOvertimeButtons
            onChange={(e) => {
              e.target.value === 'limitOvertime'
                ? setFieldValue('limited_extra_hours', 1)
                : setFieldValue('limited_extra_hours', 0);
              setComponentJustRendered(false);
            }}
          >
            <ContainerLimitOvertimeButton>
              <InputRadio
                {...limitAllowed}
                type="radio"
                name="extraHour"
                value="limitOvertime"
                id="limitOvertime"
              />
              <LabelInputRadio for="limitOvertime"> Sim </LabelInputRadio>
            </ContainerLimitOvertimeButton>

            <ContainerLimitOvertimeButton>
              <InputRadio
                {...limitNotAllowed}
                margin="0 0 0 3em"
                type="radio"
                name="extraHour"
                value="noLimitOvertime"
                id="noLimitOvertime"
              />
              <LabelInputRadio for="noLimitOvertime"> Não </LabelInputRadio>
            </ContainerLimitOvertimeButton>
          </ContainerLimitOvertimeButtons>
          {values.limited_extra_hours !== 0 && (
            <InputWithLabel
              name="extra_hour_limit"
              value={values.extra_hour_limit}
              onChange={handleChange('extra_hour_limit')}
              label="Limite de horas"
              widthLine="300px"
              padding="0 0 0 3em"
              type="number"
              handleBlur={data.setFieldTouched}
            />
          )}
        </ContainerLimitOvertime>
      </LimitOvertime>
    </ContainerOvertimePayCalcLabel>
  );
};
