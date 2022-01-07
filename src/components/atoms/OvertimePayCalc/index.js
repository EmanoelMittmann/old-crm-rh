import React, { useEffect, useRef, useState } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { cleanMask } from '../../utils/cleanMask'
import InputText from '../InputText'
import { InputRadio, LabelInputRadio } from '../InputRadio/style'
import { OvertimePay, OvertimePayCalcLabel, ContainerOvertimePayInput, ContainerHourlyPayRate, HourlyPayRate, ContainerOvertimePayCalcLabel, LimitOvertime, ContainerLimitOvertimeButton, ContainerLimitOvertimeButtons, ContainerLimitOvertime } from './style'
import { DefaultInput, InputLine } from '../DefaultInput/style';

const OvertimePayCalc = ({setDivider, divider, setFixedValue, fixedValue, setOvertime, overtime, setLimit, limit, setLimitValue, limitValue, componentRendered, editData}) => {
    const [componentJustRendered, setComponentJustRendered] = useState(false);

    const overtimeCalc = fixedValue > 0 && divider > 0 && fixedValue/divider
    const inputRef = useRef(null);

    const formatOvertime = () => {
        const format = overtimeCalc && 'R$' + overtimeCalc.toFixed(2).toString().replace('.', ',')
        setOvertime(format)
    }

    useEffect(() => {
        overtimeCalc && formatOvertime()
    }, [divider]);

    useEffect(() => {
        overtimeCalc && formatOvertime()
    }, [fixedValue]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const fixedValueMask = createNumberMask({
        prefix: 'R$',
        suffix: ',00' ,
        thousandsSeparatorSymbol: '.'
    })

    const hourlyPayRate = createNumberMask({
        prefix: 'R$',
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol : ',',
        decimalLimit: 2
    })

    useEffect(() => {
        setComponentJustRendered(true)
    }, [])

    useEffect(() => {
        
        if(editData && componentRendered){
            setDivider(editData.variable1)
            setFixedValue(editData.fixed_payment_value)
            setLimit(editData.limited_extra_hours)
            setLimitValue(editData.extra_hour_limit) 
        }
    }, [componentRendered])

    const limitAllowed = {
        ...(componentJustRendered && editData?.limited_extra_hours === 1 && {checked: true})
    }

    const limitNotAllowed = {
        ...(componentJustRendered && (editData === undefined || editData?.limited_extra_hours === 0) && {checked: true})
    }

    if(componentJustRendered && editData?.limited_extra_hours === 1){
        setLimit('limitOvertime')
    }

    if(componentJustRendered && (editData === undefined || editData?.limited_extra_hours === 0)){
        setLimit('noLimitOvertime')
    }

    return (
        <ContainerOvertimePayCalcLabel>
            <OvertimePay>
                <ContainerOvertimePayInput>
                    <OvertimePayCalcLabel for="divider">
                        Variável 1 (divisor)
                    </OvertimePayCalcLabel>
                    <InputLine width="90%">
                        <DefaultInput value={divider} id="divider" placeholderPosition="right" 
                        onChange={(e) => setDivider(e.target.value)} placeholder="Horas" padding="0.3em 1.2em 0 1.2em"/>
                    </InputLine>
                </ContainerOvertimePayInput>
                <ContainerOvertimePayInput>
                    <OvertimePayCalcLabel for="hours">
                        Variável 2 (valor fixo)
                    </OvertimePayCalcLabel>
                    <MaskedInput
                    defaultValue={fixedValue}
                    mask={fixedValueMask}
                    placeholder="R$"
                    onChange={(e) => {
                        const value = cleanMask(e.target.value)
                        const newValue = value.slice(0, -2)
                        setFixedValue(newValue)
                    }}
                    keepCharPositions={true}
                    guide={false}
                    render={(maskRef, maskProps) => (
                        <InputLine  widthLine="23%" margin="0 2em 0 0">
                            <DefaultInput
                            padding="0.3em 1.2em 0 1.2em"
                            width="100%"
                            widthLine="23%"
                            margin="0 2em 0 0"
                            ref={
                                node => {
                                if(node){
                                    maskRef(node);
                                    inputRef.current = node;
                                }}
                            }
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
                        defaultValue={overtime}
                        mask={hourlyPayRate}
                        placeholder="R$"
                        onChange={(e) => {
                            const newValue = e.target.value.replace('.', '').replace('R$', '')
                            setOvertime(newValue)
                        }}
                        keepCharPositions={true}
                        guide={false}
                        render={(maskRef, maskProps) => (
                            <InputLine  widthLine="23%" margin="0 2em 0 0">
                                <DefaultInput
                                padding="0.3em 1.2em 0 1.2em"
                                width="100%"
                                widthLine="23%"
                                margin="0 2em 0 0"
                                ref={
                                    node => {
                                    if(node){
                                        maskRef(node);
                                        inputRef.current = node;
                                    }}
                                }
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
                    <ContainerLimitOvertimeButtons onChange={(e) => {
                        setLimit(e.target.value)
                        setComponentJustRendered(false)
                    }}>
                        <ContainerLimitOvertimeButton>
                            <InputRadio
                            {...limitAllowed}
                            type="radio"
                            name="extraHour"
                            value="limitOvertime"
                            id="limitOvertime"/>
                            <LabelInputRadio for="limitOvertime">Sim</LabelInputRadio>
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
                            <LabelInputRadio for="noLimitOvertime">Não</LabelInputRadio>
                        </ContainerLimitOvertimeButton>
                    </ContainerLimitOvertimeButtons>
                        {
                        limit === 'limitOvertime' &&
                        <InputText
                        setTextValue={setLimitValue}
                        editValue={limitValue}
                        widthLine="300px"
                        placeholder="Limite de horas"
                        margin="0 0 0 3em"
                        />
                        }
                </ContainerLimitOvertime>

            </LimitOvertime>
        </ContainerOvertimePayCalcLabel>
    )
}

export default OvertimePayCalc;