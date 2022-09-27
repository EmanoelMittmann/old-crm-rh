import React from 'react'
import { useState } from 'react'
import InputSearch from '../../atoms/InputSearch'
import OrdemServiceHeader from '../../molecules/OrdemServiceListHeader'
import OrdemServiceListItem from '../../molecules/OrdemServicesListItem'
import { Container } from './style'

const NewOrdemService= () => {
    const [searchResult, setSearchResult] = useState([])
    const [professional, setProfessional] = useState([])

    const sortByName = {

    }
  return (
    <Container >
        <InputSearch 
            setSearchResult={setSearchResult}
            lineWidth="20%"
            inputWidth="12em"
        />
        <OrdemServiceHeader sortByName={sortByName}/>
        {professional.map(index => <OrdemServiceListItem key={index.id} index={index}/>)}
    </Container>
  )
}

export default NewOrdemService