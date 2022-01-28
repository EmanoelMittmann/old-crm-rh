import React from 'react'

import ListHeader from '../../molecules/ListHeader'
import ListItem from '../../molecules/ListItem'
import Footer from '../../organisms/Footer'

const headers = [
  {
    name: "#",
    order: true
  },
  {
    name: "Data lançamento",
    order: true
  },
  {
    name: "Arquivo",
    order: false
  }
]

function InvoiceList({data, meta, nextPage, previousPage}) {
  return ( 
    <>
      <ListHeader data={headers}/>
      <ListItem data={data}/>

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

export default InvoiceList