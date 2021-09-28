import React from 'react'
import Header from '../../organisms/Header'
import SectionTitle from '../../atoms/SectionTitle/style.js'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
import SectionTitleContainer from '../../atoms/SectionTitleContainer/style.js'
import SectionTitleIcon from '../../atoms/SectionTitleIcon/style.js'
import { ReactComponent as ServiceOrdersIcon } from '../../../assets/icons/serviceOrders.svg'

const ServiceOrders = () => {
    return (
        <PagesContainer>
        <Header/>
        <SectionTitleContainer>
            <SectionTitleIcon>
                <ServiceOrdersIcon/>
            </SectionTitleIcon>
            <SectionTitle>Ordens de serviço</SectionTitle>
        </SectionTitleContainer>
    </PagesContainer>
    )
}

export default ServiceOrders;

