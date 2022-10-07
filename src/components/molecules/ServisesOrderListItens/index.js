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
import { useSelector, useDispatch } from 'react-redux';
import {setStatusColors} from '../../../redux/actions';
import { useHistory } from 'react-router';
import api from '../../../api/api';
import { useEffect } from 'react';
import StatusLabel from '../../atoms/StatusLabel';


const ServiceOrderListItens = ({professional}) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const getStatusColor = async () => {
        try {
            const { data } = await api({
                method: 'get',
                url: '/color'
            })

            dispatch(setStatusColors(data))

        } catch (err) {
            if (err.request.status === 401) {
                history.push("/");
            }
        }
    }

    //project se relaciona com status
    const professionalStatusColor = state.status.find((status) => {
        return professional.professional === status.id
    })

    // status se relaciona com a cor
    const professionalColor = state.statusColors.find(color => {
        return professionalStatusColor?.colors_id === color.id
    })


    useEffect(()=>{
        getStatusColor()
    },[])

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
                    textColor={professional?.status?.text_color}
                    buttonColor={professional?.status?.button_color}
                />
            </ProfessionalStatusOS>
        </ContainerOSListItem>
    )
}

export default ServiceOrderListItens