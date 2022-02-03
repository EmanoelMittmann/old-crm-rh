import React from 'react'
import InputSearch from '../../atoms/InputSearch'
import InputDate from '../../atoms/InputDate'
import useDebounce from '../../../hooks/debounce'
import { Main } from './style.js'

function SearchSection({fnSearch, fnDateStart, fnDateEnd, start, end}) {
  const debouncedChange = useDebounce(fnSearch, 400)

  return ( 
    <Main>
      <InputSearch 
        setSearchResult={debouncedChange} 
        lineWidth="280px" 
        inputWidth="230px"
      />
      <InputDate 
        placeholder="Período inicial" 
        setDate={fnDateStart} 
        date={start}
      />
      <InputDate 
        placeholder="Período final" 
        setDate={fnDateEnd} 
        date={end}
      /> 
    </Main>
  )
}

export default SearchSection