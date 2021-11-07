import React from 'react'

import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import Header from '../../organisms/Header'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import { ReactComponent as OvertimeIcon } from '../../../assets/icons/overtime.svg'

const Overtime = () => {

    return (
        <PagesContainer>
            <Header/>
            <SectionTitleContainer>
                <SectionTitleIcon>
                    <OvertimeIcon/>
                </SectionTitleIcon>
                <SectionTitle>Horas extras</SectionTitle>
            </SectionTitleContainer>
        </PagesContainer>
    )
}

export default Overtime;
