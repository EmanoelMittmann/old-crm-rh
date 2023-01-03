import React from 'react'
import ListHeaderHoursExtra from '../../molecules/ListHeaderHoursExtra'
import { OvertimeListItem } from '../../molecules/OvertimeListItem'
import Footer from '../Footer'
import { Height } from '../../pages/OvertimeListIstechLead/style'


export function OvertimeList({ data, meta, nextPage, previousPage, sortById, status }) {
  return (
    <>
      <ListHeaderHoursExtra />
      <Height>
        <OvertimeListItem data={data} status={status} />
      </Height>
      <Footer
        height="5em"
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={meta?.current_page}
        firstPage={meta?.first_page}
        lastPage={meta?.last_page}
      />
    </>
  )
}
