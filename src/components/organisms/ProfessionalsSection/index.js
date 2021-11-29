import React, { useEffect, useState } from 'react'

import api from '../../../api/api'
import Footer from '../Footer'
import ProfessionalsInputs from '../../molecules/ProfessionalsInputs'
import { ProfessionalsSectionContainer } from './style'
import ProfessionalsListHeader from '../../atoms/ProfessionalsListHeader'
import ProfessionalsListItem from '../../molecules/ProfessionalsListItem'

const ProfessionalsSection = () => {

    const [professionals, setProfessionals] = useState([])

    const getProfessionals = async () => {
        const {data} = await api({
            method:'get',     
            url:`/professionals`,
        })

        console.log(data)
        setProfessionals(data);
    }

    useEffect(() => {
        getProfessionals()
    },[])


    return (
        <ProfessionalsSectionContainer>
            <ProfessionalsInputs/>
            <ProfessionalsListHeader/>
            {professionals.map((professional) => {
                return <ProfessionalsListItem key={professional.id} professional={professional}/>
            })}
            <Footer/>
        </ProfessionalsSectionContainer>
    )
}

export default ProfessionalsSection;