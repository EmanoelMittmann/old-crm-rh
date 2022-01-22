import React from 'react'

import { SectionTitle } from '../../atoms/PageTitle/style.js'
import SettingsSidebar from '../../organisms/SettingsSidebar'
import { SettingsSection } from '../../organisms/SettingsSection'
import { SettingsTemplateContainer } from './style.js'

const SettingsTemplate = () => {
    
    return (
        <>
            <SectionTitle/>
            <SettingsTemplateContainer>
                <SettingsSidebar/>
                <SettingsSection/>
            </SettingsTemplateContainer>
        </>
    )            
}

export default SettingsTemplate

