import React from 'react'
import InputSearch from '../../atoms/InputSearch'
import useDebounce from '../../../hooks/debounce'
import { Main } from './style.js'

export function SearchSection({ fnSearch, width, children, placeholder,inputWidth }) {
  const debouncedChange = useDebounce(fnSearch, 400)

  return ( 
    <Main width={width || '840px'}>
      <InputSearch 
        setSearchResult={debouncedChange} 
        lineWidth={inputWidth} 
        inputWidth="230px"
        placeholder={placeholder}
      />
      { children }
    </Main>
  )
}