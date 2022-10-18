import React from 'react'
import InputSearch from '../../atoms/InputSearch'
import InputSelect from '../../atoms/InputSelect'
import { ContainerInput, ContainerStyleOS } from './style'
import InputDate from '../../atoms/InputDate'
import { StatusOS } from '../OptionsFolders/statusOS'

const ServiceOrdersInput = ({ searchResult, setSearchResult, statusSelected, setstatusSelected }) => {

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
                    name=""
                />
                <InputDate
                    value=""
                    width="230px"
                    placeholder="Período final"
                    name=""
                />
                <InputDate
                    value=""
                    width="230px"
                    placeholder='Referência'
                    name=""
                />
            </ContainerInput>
        </ContainerStyleOS >

    )
}

export default ServiceOrdersInput

