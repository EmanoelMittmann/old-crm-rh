import React from 'react'

import ListHeader from '../../molecules/ListHeader'
import ListItem from '../../molecules/ListItem'
import Footer from '../../organisms/Footer'

const headers = [
  {
    name: "#",
    order: true,
    field: "id"
  },
  {
    name: "Data lançamento",
    order: true,
    field: "created_at"
  },
  {
    name: "Arquivo",
    order: false
  }
]

function InvoiceList({data, meta, nextPage, previousPage, sortById, fnDownload}) {
  return ( 
    <>
      <ListHeader 
        data={headers}
        fnOrder={sortById}  
      />
      <ListItem 
        data={data}
        downloadFile={fnDownload}  
      />
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