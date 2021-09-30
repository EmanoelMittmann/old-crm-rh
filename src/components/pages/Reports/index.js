import React from 'react'
import Header from '../../organisms/Header'
import SectionTitle from '../../atoms/SectionTitle/style.js'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import SectionTitleContainer from '../../atoms/SectionTitleContainer/style.js'
import SectionTitleIcon from '../../atoms/SectionTitleIcon/style.js'
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
