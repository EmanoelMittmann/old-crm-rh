import React, { useEffect, useState } from 'react'

import Footer from '../Footer'
import ProfessionalsInputs from '../../molecules/ProfessionalsInputs'
import { ProfessionalsSectionContainer } from './style'
import ProfessionalsListHeader from '../../atoms/ProfessionalsListHeader'
import ProfessionalsListItem from '../../molecules/ProfessionalsListItem'

const ProfessionalsSection = () => {

    const users = [
        {
            id: 1,
            name: "Jeferson Souza",
            job: "Designer UX / UI",
            email: "jeferson.souza@ubistart.com",
            phone_number: "(11) 12342 1234",
            place: "São Paulo, SP",
            avatar: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80"
        },
        {
            id: 2,
            name: "Leonardo Oliveira",
            job: "Tester",
            email: "leonardo.oliveira@ubistart.com",
            phone_number: "(51) 12342 1234",
            place: "Porto Alegre, RS",
            avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
        },
        {
            id: 3,
            name: "Ana Ferreira",
            job: "Desenvolvedor mobile IOS",
            email: "ana.ferreira@ubistart.com",
            phone_number: "(98) 12342 1234",
            place: "São Luís, MA",
            avatar: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80"
        },
        {
            id: 4,
            name: "Manuela Alves",
            job: "DevOps", 
            email: "manuela.alves@ubistart.com",
            phone_number: "(48) 12342 1234",
            place: "Florianópolis, SC",
            avatar: "https://images.unsplash.com/photo-1485290334039-a3c69043e517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },
        {
            id: 5,
            name: "Gabriel Santos",
            job: "Analista de negócios",
            email: "gabriel.santos@ubistart.com",
            phone_number: "(62) 12342 1234",
            place: "Goiânia, GO",
            avatar:  "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
        }
    ]


    return (
        <ProfessionalsSectionContainer>
            <ProfessionalsInputs/>
            <ProfessionalsListHeader/>
            {users.map((professional) => {
                return <ProfessionalsListItem key={professional.id} professional={professional}/>
            })}
            <Footer/>
        </ProfessionalsSectionContainer>
    )
}

export default ProfessionalsSection;