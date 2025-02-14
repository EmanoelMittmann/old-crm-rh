import React from 'react'
import {
    ContainerOSListItem,
    ProfessionalName,
    ProfessionalCNPJ,
    DateGerationOS,
    NumberOS,
    ReferenceOS,
    ProfessionalStatusOS,
    ProfessionalTextStatus

} from './style'
import { formatDate } from '../../utils/formatDate'

const ServiceOrderListItens = ({ professional }) => {
    const tranformStatus = professional.status === 'PENDING' ? 'Pendente' : professional.status === 'SENT' ? 'Enviada' : 'Cancelada'
    const colorBg = professional.status === 'PENDING' ? '#fff3d9' : professional.status === 'SENT' ? '#ddf7e5' : '#FFE1E3'
    const colortext = professional.status === 'PENDING' ? '#FFAE00' : professional.status === 'SENT' ? '#1ECB4F' : '#FF3541'


    return (
        <ContainerOSListItem key={professional.id}>
            <ProfessionalName>{professional.name}</ProfessionalName>
            <ProfessionalCNPJ>{professional.cnpj}</ProfessionalCNPJ>
            <NumberOS>{professional.id}</NumberOS>
            <DateGerationOS>{formatDate(professional.os_generation)}</DateGerationOS>
            <ReferenceOS>{professional.reference}</ReferenceOS>
            <ProfessionalStatusOS>
                <ProfessionalTextStatus bg={colorBg} text={colortext}>
                    {tranformStatus}
                </ProfessionalTextStatus>
            </ProfessionalStatusOS>
        </ContainerOSListItem>
    )
}

export default ServiceOrderListItens