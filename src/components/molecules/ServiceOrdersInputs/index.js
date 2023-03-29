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
                    onChange={e => setstatusSelected(e.target.value)}
                    options={StatusOS}
                    placeHolder="Status"
                    width="280px"
                />
                <InputDate
                    value={initialDate}
                    width="280px"
                    placeholder="Período inicial"
                    onChange={(e) => setInitialDate(e.target.value)}         
                />
                <InputDate
                    value={finalDate}
                    width="280px"
                    placeholder="Período final"
                    onChange={(e) => setFinalDate(e.target.value)}   
                />
                <InputDate
                    value={referencesDate}
                    width="280px"
                    placeholder='Referência'
                    onChange={(e) => setReferenceDate(e.target.value)}
                />
            </ContainerInput>

    )
}

export default ServiceOrdersInput

