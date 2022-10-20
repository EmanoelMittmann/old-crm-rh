import React from 'react'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'
import { ContainerInput, ContainerStyleOS } from './style'
import InputDate from '../../atoms/InputDate'
import { StatusOS } from '../OptionsFolders/statusOS'


const ServiceOrdersInput = ({searchResult, setSearchResult, statusSelected, setstatusSelected, setFinalDate, setInitialDate, setReferenceDate }) => {

    return (
        <ContainerStyleOS>
            <ContainerInput>
                <InputSearch
                    value={searchResult}
                    lineWidth="310px"
                    inputWidth="230px"
                    setSearchResult={setSearchResult}
                     />
                <InputSelect
                    value={statusSelected}
                    onChange={e => setstatusSelected(e.target.value)}
                    options={StatusOS}
                    placeHolder="Status"
                    width="230px"
                />
                <InputDate
                    value=""
                    width="230px"
                    placeholder="Período inicial"
                    onChange={(e) => setInitialDate(e.target.value)} 
                   
                />
                <InputDate
                    value=""
                    width="230px"
                    placeholder={"Período final"}
                    onChange={(e) => setFinalDate(e.target.value)}
                    
                    
                />
                <InputDate
                    value=""
                    width="230px"
                    placeholder='Referência'
                    onChange={(e) => setReferenceDate(e.target.value)}
                   
                />
            </ContainerInput>
        </ContainerStyleOS >

    )
}

export default ServiceOrdersInput

