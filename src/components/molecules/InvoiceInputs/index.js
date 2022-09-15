import React, { useState, useEffect } from 'react'

import api from '../../../api/api'
import InputSearch from '../../atoms/InputSearch'
import InputDate from '../../atoms/InputDate'
import { InvoiceInputsContainer, InputsDateContainer } from './style'

const InvoiceInputs = ({getInvoices, inicialDate, setFinalDate, finalDate, setInicialDate, search, setSearch}) => {

    useEffect(() => {
        getInvoices()
    }, [inicialDate, search, finalDate])


    return (
        <InvoiceInputsContainer>
            <InputSearch
            lineWidth="280px"
            inputWidth="230px"
            setSearchResult={setSearch}
            />
            <InputsDateContainer>
                <InputDate 
                date={inicialDate}
                setDate={setInicialDate}
                placeholder="Período inicial"
                margin="0 2em 0 2em"
                width="200px"
                />
                <InputDate 
                date={finalDate}
                setDate={setFinalDate}
                placeholder="Período final"
                width="188px"
                />
            </InputsDateContainer>
        </InvoiceInputsContainer>
    )
}

export default InvoiceInputs;