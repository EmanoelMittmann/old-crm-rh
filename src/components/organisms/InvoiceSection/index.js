import React, { useState, useEffect } from 'react'

import api from '../../../api/api.js';
import { InvoiceSectionContainer, ContainerMainContent } from './style.js';
import InvoiceInputs from '../../molecules/InvoiceInputs'
import InvoiceListHeader from '../../atoms/InvoiceListHeader'
import InvoiceListItem from '../../molecules/InvoiceListItem/index.js';
import Footer from '../Footer'

const InvoiceSection = () => {
    const [invoices, setInvoices] = useState([]);
    const [inicialDate, setInicialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [search, setSearch] = useState('')
    const [meta, setMeta] = useState('')

    const params = {}

    const handleFilterRequest = (pagesFilter) => {
        if(pagesFilter === "previous") params.page = `${
            meta.current_page - 1
        }`

        if(pagesFilter === "next") params.page = `${
            meta.current_page + 1
        }`

        if(inicialDate !== '') params.date_start = inicialDate

        if(finalDate !== '') params.date_end = finalDate

        if(search !== ''){
            params.search = search
            params.page = meta.first_page
        }
    }

    const getInvoices = async () => {

        handleFilterRequest()

        const {data} = await api({
            method:'get',     
            url:`/fiscalNotes`,
            params: params
        })

        console.log(data.meta);
        
        setInvoices(data.data);
        setMeta(data.meta)
    }

    useEffect(() => {
        getInvoices()
    }, [])

    const nextPage = () => {
        handleFilterRequest("next")
        getInvoices()
    }

    const previousPage = () => {
        handleFilterRequest("previous")
        getInvoices()
    }

    return (
        <InvoiceSectionContainer>
            <ContainerMainContent>
                <InvoiceInputs 
                getInvoices={getInvoices}
                setInicialDate={setInicialDate}
                setFinalDate={setFinalDate}
                setSearch={setSearch}
                inicialDate={inicialDate}
                finalDate={finalDate}
                search={search}
                />
                <InvoiceListHeader/>
                {invoices?.map(invoice => (
                    <InvoiceListItem key={invoice.id} invoice={invoice}/>
                ))}
            </ContainerMainContent>
            <Footer 
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={meta.current_page}
            firstPage={meta.first_page}
            lastPage={meta.last_page}
            />
        </InvoiceSectionContainer>
    )
}

export default InvoiceSection;