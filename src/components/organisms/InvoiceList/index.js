import React from 'react'
import ListHeaderInvoice from '../../molecules/ListHeaderInvoice'
import ListItem from '../../molecules/ListItem'
import Footer from '../../organisms/Footer'
import { ContainerAbsolute } from '../../pages/Invoice/style'

function InvoiceList({ data, meta, nextPage, previousPage, fnDownload }) {

  return ( 
    <>
    <ListHeaderInvoice/>
    <ContainerAbsolute>
        <ListItem
          data={data}
          downloadFile={fnDownload}
        />
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

export default InvoiceList