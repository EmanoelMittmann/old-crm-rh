import React from 'react'
import { 
    ContainerSettingsSectionFooter,
    PagesBackAndForth,
    ArrowContainer,
    RightArrowContainer,
    LeftArrowContainer
} from './style.js'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg'

const FooterModais = ({ previousPage, nextPage, currentPage = 1, firstPage = 1, lastPage = 1 , position}) => {

    const RightArrowClickHandler = (e) => {
        if(currentPage === lastPage) return
        nextPage()
    }

    const LeftArrowClickHandler = (e) => {
        if(currentPage === firstPage) return
        previousPage()
    }

    return (
        <ContainerSettingsSectionFooter position={position}>
            <PagesBackAndForth>{`${currentPage} de ${lastPage}`}</PagesBackAndForth>
            <ArrowContainer>
                <LeftArrowContainer onClick={(e) => LeftArrowClickHandler(e)}>
                    <Arrow/>
                </LeftArrowContainer>
                <RightArrowContainer onClick={(e) => RightArrowClickHandler(e)}>
                    <Arrow/>
                </RightArrowContainer>
            </ArrowContainer>
        </ContainerSettingsSectionFooter>
    )
}

export default FooterModais

