import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import api from '../../../api/api'
import Footer from '../Footer'
import ProfessionalsInputs from '../../molecules/ProfessionalsInputs'
import { ProfessionalsSectionContainer } from './style'
import ProfessionalsListHeader from '../../atoms/ProfessionalsListHeader'
import ProfessionalsListItem from '../../molecules/ProfessionalsListItem'

const ProfessionalsSection = () => {
    const location = useLocation()
    const [professionals, setProfessionals] = useState([])

    const [jobSelected, setJobSelected] = useState('')
    const [searchResult, setSearchResult] = useState('')
    const [professionalMeta, setProfessionalMeta] = useState('')
    const [order, setOrder] = useState("")

    let params = {};

    const handleFilterRequest = (pagesFilter) => {

        if(pagesFilter === "previous") params.page = `${
            professionalMeta.current_page - 1
        }`

        if(pagesFilter === "next") params.page = `${
            professionalMeta.current_page + 1
        }`

        if(pagesFilter === undefined) params.page = professionalMeta.current_page

        if(searchResult !== "") {
            params.search = searchResult
            params.page = professionalMeta.first_page
        }

        if(jobSelected !== "") {     
            params.job_id = jobSelected
            params.page = professionalMeta.first_page
        }

        if(order !== "") params.order = order

    }

    const sortByName = () => {
        order === "" && setOrder("desc")
        order === "asc" && setOrder("desc")
        order === "desc" && setOrder("asc")
    }

    const getProfessionals = async () => {
        const {data} = await api({
            method:'get',     
            url:`/professionals`,
            params: params
        })
        
        setProfessionals(data.data)
        setProfessionalMeta(data.meta)
    }

    useEffect(() => {
        handleFilterRequest()
        getProfessionals()
        location.state && setProfessionals(location.state.professionals.data) 

    }, [searchResult, jobSelected, order])

    const nextPage = () => {
        handleFilterRequest("next")
        getProfessionals()
    }

    const previousPage = () => {
        handleFilterRequest("previous")
        getProfessionals()
    }
 
    return (
        <ProfessionalsSectionContainer>
            <ProfessionalsInputs setSearchResult={setSearchResult} setJobSelected={setJobSelected}/>
            <ProfessionalsListHeader sortByName={sortByName}/>
            {professionals?.map((professional) => {
                return <ProfessionalsListItem key={professional.id} professional={professional}/>
            })}
            <Footer
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={professionalMeta.current_page}
            firstPage={professionalMeta.first_page}
            lastPage={professionalMeta.last_page}
            />
        </ProfessionalsSectionContainer>
    )
}

export default ProfessionalsSection

