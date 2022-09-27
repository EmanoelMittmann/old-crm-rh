import React from 'react'
import { useState } from 'react'
import api from '../../../api/api'
import InputSearch from '../../atoms/InputSearch'
import OrdemServiceHeader from '../../molecules/OrdemServiceListHeader'
import OrdemServiceListItem from '../../molecules/OrdemServicesListItem'
import { Container,ScrollContainer } from './style'
import Footer from '../Footer'
import { useEffect } from 'react'

const NewOrdemService= () => {
    const [searchResult, setSearchResult] = useState([])
    const [professionals, setProfessionals] = useState([])

    let params = {}

    const sortByName = {

    }

    const getProfessionals = async() => {
        const {data} = await api({
            method: 'get',
            url: '/professionals/?limit=undefined',
            params: params
        })
        setProfessionals(data.data)
        console.log(data.data)
    }

    useEffect(() => {
        getProfessionals()
    },[searchResult])

  return (
    <Container >
        <InputSearch 
            setSearchResult={setSearchResult}
            lineWidth="20%"
            inputWidth="12em"
        />
        <OrdemServiceHeader sortByName={sortByName}/>
        <ScrollContainer>
            {professionals?.map((index) => { return <OrdemServiceListItem key={index.id} index={index}/>})}
        </ScrollContainer>
    </Container>
  )
}

export default NewOrdemService