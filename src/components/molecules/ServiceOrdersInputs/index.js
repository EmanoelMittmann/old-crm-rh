import React from 'react'
import InputDate from '../../atoms/InputDate'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'
import { ContainerInput, ContainerSelectDate, ContainerStyleOS } from './style'



const ServiceOrdersInput = () => {

    return (
<ContainerStyleOS>
        <ContainerInput>
            <InputSearch lineWidth="230px" inputWidth="210px" />
            <InputSelect
                value=""
                onChange=""
                placeHolder="Status"
                width="230px"
            />
</ContainerInput>
            <ContainerSelectDate >
            <InputDate
                width="210px"
                padding="0 1em 0 0"
                placeholder="Período inicial"
            />
            <InputDate
                width="210px"
                padding="0 1em 0 0"
                placeholder="Período final"
            />
            </ContainerSelectDate>
       </ContainerStyleOS > 

    )
}

export default ServiceOrdersInput

