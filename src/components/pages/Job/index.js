import React from 'react'
import Header from '../../organisms/Header'
import SectionTitle from '../../atoms/SectionTitle/style.js'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import SectionTitleContainer from '../../atoms/SectionTitleContainer/style.js'
import SectionTitleIcon from '../../atoms/SectionTitleIcon/style.js'
import { ReactComponent as JobIcon } from '../../../assets/icons/job.svg'

const Job = () => {
    
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

export default Job;

