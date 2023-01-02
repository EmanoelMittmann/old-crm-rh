import React from 'react'
import { SearchSection } from '../../molecules/SearchSection'
import { SearchContainer } from './style'
import InputSelect from '../../atoms/InputSelect'
import InputDate from '../../atoms/InputDate'

const ListInputs = ({ 
    initialDate, 
    finalDate, 
    statusProject, 
    projects, 
    setSearch,
    setProjectParams, 
    setStatusParams, 
    setInitialDate, 
    setFinalDate }) => {
    return (
        <SearchSection
            fnSearch={setSearch} 
            width="100%"
        >
            <SearchContainer>
                <InputSelect
                    options={projects}
                    onChange={e => setProjectParams(e.target.value)}
                    placeHolder="Projeto"
                    lineWidth="30%"
                />
                <InputSelect
                    options={statusProject}
                    onChange={e => setStatusParams(e.target.value)}
                    placeHolder="Status"
                    lineWidth="30%"
                />
                <InputDate
                    onChange={e => setInitialDate(e.target.value)}
                    placeholder="Período inicial"
                    date={initialDate}
                    width="30%"
                    type="date"
                    handleBlur={() => { }}
                    name="initial_period"
                />
                <InputDate
                    onChange={e => setFinalDate(e.target.value)}
                    placeholder="Período final"
                    date={finalDate}
                    width="30%"
                    type="date"
                    handleBlur={() => { }}
                    name="initial_period"
                />
            </SearchContainer>
        </SearchSection>
    )
}

export default ListInputs