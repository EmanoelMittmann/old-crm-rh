import React from 'react'
import { 
    ContainerOSListItem ,
    ProfessionalName,
    ProfessionalCNPJ,
    DateGerationOS,
    NumberOS,
    ReferenceOS,
    ProfessionalStatusOS,

} from './style'

import StatusLabel from '../../atoms/StatusLabel';


const ServiceOrderListItens = ({professional}) => {
 


    return (
        <ContainerOSListItem key={professional.id}>
            <ProfessionalName>{professional.name}</ProfessionalName>
            <ProfessionalCNPJ>{professional.cnpj}</ProfessionalCNPJ>
            <NumberOS>{professional.os_number}</NumberOS>
            <DateGerationOS>{professional.os_generation}</DateGerationOS>
            <ReferenceOS>{professional.reference}</ReferenceOS>
            <ProfessionalStatusOS>
                <StatusLabel
                    name={professional.status}
                    textColor={professional?.status?.color?.text_color}
                    buttonColor={professional?.status?.color?.button_color}
                />
            </ProfessionalStatusOS>
        </ContainerOSListItem>
    )
}

export default ServiceOrderListItens