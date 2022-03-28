import React from 'react'
import InputSearch from '../../atoms/InputSearch'
import InputDate from '../../atoms/InputDate'
import useDebounce from '../../../hooks/debounce'
import { Main } from './style.js'

export function SearchSection({fnSearch, width, children}) {
  const debouncedChange = useDebounce(fnSearch, 400)

  return ( 
    <Main width={width || '840px'}>
      <InputSearch 
        setSearchResult={debouncedChange} 
        lineWidth="280px" 
        inputWidth="230px"
      />
      { children }
    </Main>
  )
}