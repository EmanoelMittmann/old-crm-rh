import React from 'react'
import { 
    ContainerSettingsSectionFooter,
    PagesBackAndForth,
    ArrowContainer,
    RightArrowContainer,
    LeftArrowContainer
    }
from './style.js'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg'

const SettingsSectionFooter = () => {
    return (
        <ContainerSettingsSectionFooter>
            <PagesBackAndForth>6-10 de 30</PagesBackAndForth>
            <ArrowContainer>
                <RightArrowContainer>
                    <Arrow/>
                </RightArrowContainer>
                <LeftArrowContainer>
                    <Arrow/>
                </LeftArrowContainer>
            </ArrowContainer>
        </ContainerSettingsSectionFooter>
    )
}

export default SettingsSectionFooter;