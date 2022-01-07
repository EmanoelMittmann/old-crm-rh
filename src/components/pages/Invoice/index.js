import React from 'react'

import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import Header from '../../organisms/Header'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import { ReactComponent as InvoiceIcon } from '../../../assets/icons/invoice.svg'
import { ContainerInvoice } from './style'
import InvoiceSection from '../../organisms/InvoiceSection/index.js'

const Invoice = () => {
    
    return (
    <PagesContainer>
        <Header/>
        <SectionTitleContainer>
            <SectionTitleIcon>
                <InvoiceIcon/>
            </SectionTitleIcon>
            <SectionTitle>Notas fiscais</SectionTitle>
        </SectionTitleContainer>
        <ContainerInvoice>
            <InvoiceSection/>
        </ContainerInvoice>
    </PagesContainer>
    )
}

export default Invoice;


