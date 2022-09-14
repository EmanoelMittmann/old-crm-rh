import React, { useState, useEffect } from 'react'

import api from '../../../api/api'
import { ProfessionalsInputsContainer } from './style.js'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'

const ProfessionalsInputs = ({ jobSelected, setJobSelected, setSearchResult }) => {
    const [jobs, setJobs] = useState([])

    const getJobs = async () => {

        const { data } = await api({
            method: 'get',
            url: `/job/?limit=undefined`,
        })
        data.data.push({ name: "Todos" })
        setJobs(data.data)
    }

    useEffect(() => {
        getJobs()
    }, [])



    return (
        <ProfessionalsInputsContainer>
            <InputSearch setSearchResult={setSearchResult} lineWidth="280px" inputWidth="230px" />
            <InputSelect
                value={jobSelected}
                onChange={(e) => setJobSelected(e.target.value)}
                options={jobs}
                placeHolder="Cargo"
                width="220px"
            />
        </ProfessionalsInputsContainer>
    )
}

export default ProfessionalsInputs;