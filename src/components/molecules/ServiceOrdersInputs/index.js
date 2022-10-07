import React from 'react'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'
import { ContainerInput, ContainerStyleOS } from './style'
import InputWidthLabel from '../../atoms/InputWithLabel'
import InputDate from '../../atoms/InputDate'



const ServiceOrdersInput = () => {

    return (
        <ContainerStyleOS>
            <ContainerInput>
                <InputSearch
                    lineWidth="280px"
                    inputWidth="230px" />
                <InputSelect
                    value=""
                    onChange=""
                    placeHolder="Status"
                    width="230px"
                />
                <InputDate
                    value=""
                    width="230px"
                    placeholder="Período inicial"
                    name=""
                />
                <InputDate
                    value=""
                    width="230px"
                    placeholder="Período final"
                    name=""
                />
                <InputDate
                    value=""
                    width="230px"
                    placeholder='Referência'
                    name=""
                />
            </ContainerInput>
        </ContainerStyleOS >

    )
}

export default ServiceOrdersInput

