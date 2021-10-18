import React from 'react'

import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import Header from '../../organisms/Header'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import { ReactComponent as JobIcon } from '../../../assets/icons/job.svg'

const Professionals = () => {
    
    return (
        <PagesContainer>
            <Header/>
            <SectionTitleContainer>
                <SectionTitleIcon>
                    <JobIcon/>
                </SectionTitleIcon>
                <SectionTitle>Profissionais</SectionTitle>
            </SectionTitleContainer>
        </PagesContainer>
    )
}

export default Professionals;

