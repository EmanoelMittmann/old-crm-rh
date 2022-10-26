import React from 'react'
import ListHeader from '../../molecules/ListHeader'
import { OvertimeListItem } from '../../molecules/OvertimeListItem'
import Footer from '../Footer'

const headers = [
  {
    name: "#",
    order: true,
    field: "id"
  },
  {
    name: "Período",
    order: false,
  },
  {
    name: "Projeto",
    order: false,
  },
  {
    name: "Status",
    order: false,
    endContainer: true
  }
]
export function OvertimeList({ data, meta, nextPage, previousPage, sortById, status }) {
  return (
    <>
      <ListHeader 
        data={headers}
        fnOrder={sortById}  
      />
      <OvertimeListItem data={data} status={status}/>
      <Footer
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={meta?.current_page}
        firstPage={meta?.first_page}
        lastPage={meta?.last_page}
      />  
    </>
  )
}
