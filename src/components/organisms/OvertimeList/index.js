import React from 'react'
import ListHeaderHoursExtra from '../../molecules/ListHeaderHoursExtra'
import { OvertimeListItem } from '../../molecules/OvertimeListItem'
import Footer from '../Footer'


export function OvertimeList({ data, meta, nextPage, previousPage, sortById, status }) {
  return (
    <>
    <ListHeaderHoursExtra/>
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
