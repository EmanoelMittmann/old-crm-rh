import React from 'react'

import {
    SectionTitle,
    SectionTitleIcon,
    SectionTitleContainer
} from '../../atoms/PageTitle/style.js'
import Header from '../../organisms/Header'
import PagesContainer from '../../organisms/PagesContainer/styled.js'
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

