import React from 'react'

import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import Header from '../../organisms/Header'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import { ReactComponent as InvoiceIcon } from '../../../assets/icons/invoice.svg'

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
    </PagesContainer>
    )
}

export default Invoice;


