import React, { useEffect, useRef, useState } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { TextRequired } from '../../atoms/TextRequired'
import api from '../../../api/api'
import { cleanMask } from '../../utils/cleanMask.js'
import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputDate from '../../atoms/InputDate';
import InputText from '../../atoms/InputText';
import InputSelect from '../../atoms/InputSelect/index.js'
import InputSelectWithLabel from '../../atoms/InputSelectWithLabel';
import { DefaultInput, InputLine } from '../../atoms/DefaultInput/style';
import { ContainerEmploymentContract, EmploymentContractInputs, ContainerTextRequiredWeek, ContainerTextRequiredMonth } from './style'

const EmploymentContract = ({setInicialDate, inicialDate , setJob, job, setType, type, setHoursWeek, hoursWeek, setHoursMonth, hoursMonth, setFixedSalary, fixedSalary}) => {

    const [jobOptions, setJobOptions] = useState([])
    const [invalidHoursWeek, setInvalidHoursWeek] = useState(false)
    const [invalidHoursMonth, setInvalidHoursMonth] = useState(false)

    const inputRef = useRef(null);

    const fixedSalaryAmount = createNumberMask({
        prefix: 'R$',
        suffix: ',00' ,
        thousandsSeparatorSymbol: '.'
    })

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const typeOptions = [
        {
            id: "FULLTIME",
            name: "Full Time"
        },
        {
            id: "PARTTIME",
            name: "Part Time"
        },
        {
            id: "FREELANCER",
            name: "Horista"
        }
    ]

    const optionsJob = async () => {
        const {data} = await api({
            method:'get',     
            url:`/job`,
        })

        setJobOptions(data.data);
    }

    useEffect(() => {

        optionsJob()

    }, [])

    useEffect(() => {

        setInvalidHoursWeek(hoursWeek > 44);

    }, [hoursWeek])

    useEffect(() => {

        setInvalidHoursMonth(hoursMonth > 176);

    }, [hoursMonth])


    return (
        <ContainerEmploymentContract>
            <SecondaryText margin="0 0 2.5em 0">Contrato de trabalho</SecondaryText>
            <EmploymentContractInputs>
                <InputDate
                setDate={setInicialDate}
                date={inicialDate}
                placeholder="Data Início"
                margin="0 2em 0 0"
                />
                <InputSelect
                setSelectedOption={setJob}
                value={job}
                options={jobOptions}
                placeholder="Cargo"
                width="100%"
                lineWidth="100%"
                />
            </EmploymentContractInputs>

            <EmploymentContractInputs>
                <InputSelectWithLabel
                setSelectedOption={setType}
                label="Tipo"
                width="100%"
                options={typeOptions}
                padding="0 2em 0 0"
                lineWidth="30%"
                />

                <ContainerTextRequiredWeek>
                    <InputText
                    invalid={invalidHoursWeek}
                    setTextValue={setHoursWeek}
                    value={hoursWeek}
                    widthLine="100%"
                    placeholder="Horas/semana"
                    />

                    {invalidHoursWeek && <TextRequired>Horas/semana excedida</TextRequired>}
                </ContainerTextRequiredWeek>

                <ContainerTextRequiredMonth>
                <InputText
                invalid={invalidHoursMonth}
                setTextValue={setHoursMonth}
                value={hoursMonth}
                widthLine="100%"
                placeholder="Horas/mês"
                />
                   {invalidHoursMonth && <TextRequired>Horas/mês excedida</TextRequired>}
                </ContainerTextRequiredMonth>

                <MaskedInput
                mask={fixedSalaryAmount}
                placeholder="Valor pagamento fixo"
                onChange={(e) => {
                    const value = cleanMask(e.target.value)
                    const newValue = value.slice(0, -2)
                    setFixedSalary(newValue)
                }}
                guide={false}
                keepCharPositions={true}
                render={(maskRef, maskProps) => (
                    <InputLine width="30%">
                        <DefaultInput
                        padding="0.3em 1.2em 0 1.2em"
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
                
            </EmploymentContractInputs>
        </ContainerEmploymentContract>
    )
}

export default EmploymentContract;