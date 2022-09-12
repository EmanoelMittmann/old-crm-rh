import React from 'react'
import InputDate from '../../atoms/InputDate'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'
import { ContainerInput } from './style'



const ServiceOrdersInput = () => {

    return (

        <ContainerInput>
            <InputSearch lineWidth="280px" inputWidth="230px" />
            <InputSelect
                value=""
                onChange=""
                placeHolder="Status"
                width="280px"
            />
            <InputDate
                width="20%"
                padding="0 1em 0 0"
                placeholder="Período inicial"
            />
            <InputDate
                width="20%"
                padding="0 1em 0 0"
                placeholder="Período final"
            />
   
            

        </ContainerInput>

    )
}

export default ServiceOrdersInput

