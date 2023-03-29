import React from 'react'
import ListHeaderHoursExtra from '../../molecules/ListHeaderHoursExtra'
import { OvertimeListItem } from '../../molecules/OvertimeListItem'
import Footer from '../Footer'
import { ContainerAbsolute } from '../../atoms/Container/style'
import { Container } from '../../atoms/Container'


export function OvertimeList({ data, meta, nextPage, previousPage, sortById, status }) {
  return (
    <>
      <ListHeaderHoursExtra sortById={sortById}/>
      <ContainerAbsolute>
        {data?.map(item => <OvertimeListItem item={item} status={status} />)}
      </ContainerAbsolute>
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
