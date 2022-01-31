import React, { useRef } from 'react'
import InputSearch from '../../atoms/InputSearch'
import InputDate from '../../atoms/InputDate'
import { Main } from './style.js'

function SearchSection({fnSearch, fnDateStart, fnDateEnd, start, end}) {
  const timeoutRef = useRef(null)

  function debounce(...args) {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      fnSearch(...args)
    }, 400)
  }

  return ( 
    <Main>
      <InputSearch 
        setSearchResult={debounce} 
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