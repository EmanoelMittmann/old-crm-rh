import React, { useEffect, useRef, useState } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import api from '../../../api/api'
import { cleanMask } from '../../utils/cleanMask.js'
import SecondaryText from '../../atoms/SecondaryText/style.js'
import InputDate from '../../atoms/InputDate';
import InputText from '../../atoms/InputText';
import InputSelect from '../../atoms/InputSelect/index.js'
import InputSelectWithLabel from '../../atoms/InputSelectWithLabel';
import { DefaultInput, InputLine } from '../../atoms/DefaultInput/style';
import { ContainerEmploymentContract, EmploymentContractInputs } from './style'

const EmploymentContract = ({setInicialDate, inicialDate , setJob, job, setType, type, setHoursWeek, hoursWeek, setHoursMonth, hoursMonth, setFixedSalary, fixedSalary}) => {
    console.log(fixedSalary);

    const [jobOptions, setJobOptions] = useState([])

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

                <InputText
                setTextValue={setHoursWeek}
                value={hoursWeek}
                widthLine="20%"
                placeholder="Horas/semana"
                margin="0 2em 0 2em"
                />

                <InputText
                setTextValue={setHoursMonth}
                value={hoursMonth}
                widthLine="20%"
                placeholder="Horas/mês"
                margin="0 2em 0 0"
                />

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