import React from 'react'

import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import Header from '../../organisms/Header'
import { ReactComponent as SettingsIcon } from '../../../assets/icons/settings.svg'
import SettingsSidebar from '../../organisms/SettingsSidebar'
import { SettingsSection } from '../../organisms/SettingsSection'
import { SettingsTemplateContainer } from './style.js'
import PagesContainer from '../../organisms/PagesContainer/styled.js'


const SettingsTemplate = () => {
    
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
                <SettingsTemplateContainer>
                    <SettingsSidebar/>
                    <SettingsSection/>
                </SettingsTemplateContainer>
        </PagesContainer>
    )
}

export default SettingsTemplate;

