import React from 'react'
import Header from '../../organisms/Header'
import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg'

const Home = () => {

    return (
        <PagesContainer>
            <Header/>
            <SectionTitleContainer>
                <SectionTitleIcon>
                    <HomeIcon/>
                </SectionTitleIcon>
                <SectionTitle>Início</SectionTitle>
            </SectionTitleContainer>
        </PagesContainer>
    )
}

export default Home
