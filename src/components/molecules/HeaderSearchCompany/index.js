import React from 'react'
import InputSearch from '../../atoms/InputSearch'
import { CompanyHeaderContainer } from './style'
import { optionsUF } from '../../organisms/RegisterProfessionalsData'
import InputSelect from '../../atoms/InputSelect'
import { useState } from 'react'

const HeaderSearchCompany = ({setSearchResult, setUf, uf}) => {

  return (
    <CompanyHeaderContainer>
        <InputSearch setSearchResult={setSearchResult} lineWidth="280px" inputWidth="230px"/>
        <InputSelect
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            options={optionsUF}
            placeHolder='UF'
            margin='10px'
            width="220px"
        />
        <InputSelect
            width="220px"
            placeHolder='Situação Cadastral'
        />
    </CompanyHeaderContainer>
  )
}

export default HeaderSearchCompany