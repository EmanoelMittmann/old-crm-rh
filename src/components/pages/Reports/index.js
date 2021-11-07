import React from 'react'

import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import Header from '../../organisms/Header'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import { ReactComponent as ReportsIcon } from '../../../assets/icons/reports.svg'

const Reports = () => {
    
    return (
        <PagesContainer>
            <Header/>
            <SectionTitleContainer>
                <SectionTitleIcon>
                    <ReportsIcon/>
                </SectionTitleIcon>
                <SectionTitle>Relatórios</SectionTitle>
            </SectionTitleContainer>
        </PagesContainer>
    )
}

export default Reports;
