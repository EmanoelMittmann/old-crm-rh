import React from 'react'
import { Container } from '../../atoms/Container'
import ServiseOrdersListHeader from '../../atoms/ServiceOrdersListHeader'
import ServiceOrdersListItems from '../../organisms/ServiceOrdersListItems'
import Footer from '../../organisms/Footer'
import ServiceOrdersInput from '../../molecules/ServiceOrdersInputs'


const ServiceOrders = ({ data, meta, nextPage, previousPage, sortById, fnDownload }) => {

    return (
        <Container>
            <ServiceOrdersInput/>
            <ServiseOrdersListHeader/>
            <ServiceOrdersListItems/>

            <Footer
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={meta?.current_page}
                firstPage={meta?.first_page}
                lastPage={meta?.last_page}
            />
       
        </Container>
    )
}

export default ServiceOrders

