import React from 'react'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'
import InputDate from '../../atoms/InputDate'
import { StatusOS } from '../OptionsFolders/statusOS'
import { ContainerInput, ContainerStyleOS } from './style'
const ServiceOrdersInput = ({searchResult, setSearchResult, statusSelected, setstatusSelected, finalDate , setFinalDate, initialDate , setInitialDate , referencesDate , setReferenceDate }) => {

    return (
            <ContainerInput>
                <InputSearch
                    value={searchResult}
                    inputWidth="280px"
                    setSearchResult={setSearchResult}
                 />
                <InputSelect
                    value={statusSelected}
                    textColor={statusSelected}
                    onChange={e => setstatusSelected(e.target.value)}
                    options={StatusOS}
                    placeholder="Status"
                    width="20%"
                    lineWidth="100%"
                />
                <InputDate
                    value={initialDate}
                    width="20%"
                    placeholder="Período inicial"
                    onChange={(e) => setInitialDate(e.target.value)}         
                />
                <InputDate
                    value={finalDate}
                    width="20%"
                    placeholder="Período final"
                    onChange={(e) => setFinalDate(e.target.value)}   
                />
                <InputDate
                    value={referencesDate}
                    width="20%"
                    placeholder='Referência'
                    onChange={(e) => setReferenceDate(e.target.value)}
                />
            </ContainerInput>

    )
}

export default ServiceOrdersInput

