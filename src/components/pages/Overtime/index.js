import React from 'react'
import Header from '../../organisms/Header'
import SectionTitle from '../../atoms/SectionTitle/style.js'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import SectionTitleContainer from '../../atoms/SectionTitleContainer/style.js'
import SectionTitleIcon from '../../atoms/SectionTitleIcon/style.js'
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
