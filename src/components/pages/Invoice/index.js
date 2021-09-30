import React from 'react'
import Header from '../../organisms/Header'
import SectionTitle from '../../atoms/SectionTitle/style.js'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import SectionTitleContainer from '../../atoms/SectionTitleContainer/style.js'
import SectionTitleIcon from '../../atoms/SectionTitleIcon/style.js'
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


