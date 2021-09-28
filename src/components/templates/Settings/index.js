import React from 'react'
import Header from '../../organisms/Header'
import SectionTitleContainer from '../../atoms/SectionTitleContainer/style.js'
import SectionTitleIcon from '../../atoms/SectionTitleIcon/style.js'
import { ReactComponent as SettingsIcon } from '../../../assets/icons/settings.svg'
import SettingsSidebar from '../../organisms/SettingsSidebar'
import { SettingsSection } from '../../organisms/SettingsSection'
import { Container } from './style.js'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import SectionTitle from '../../atoms/SectionTitle/style.js'


const Settings = () => {
    
    return (
        <PagesContainer>
                <Header/>

                <SectionTitleContainer>
                    <SectionTitleIcon>
                        <SettingsIcon/>
                    </SectionTitleIcon>
                    <SectionTitle>Configurações</SectionTitle>
                </SectionTitleContainer>

            <SectionTitle/>
                <Container>
                    <SettingsSidebar/>
                    <SettingsSection/>
                </Container>
        </PagesContainer>
    )
}

export default Settings;

