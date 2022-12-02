import React from 'react'
import { LocalStorageKeys } from '../../../settings/LocalStorageKeys'

import ListHeader from '../../molecules/ListHeader'
import ListItem from '../../molecules/ListItem'
import Footer from '../../organisms/Footer'

const admin = [
  {
    name: "Profissional",
    order: true,
    field: "name"
  },
  {
    name: "Envio",
    order: true,
    field: "created_at"
  },
  {
    name: "Prazo envio",
    order: false
  },
  {
    name: "NF",
    order: true,
    field: "file_id"
  }
]

const professional = [
  {
    name: "Item",
    order: true,
    field: "id"
  },
  {
    name: "Data lançamento",
    order: true,
    field: "created_at"
  },
  {
    name: "Data de Emissão da NF",
    order: false
  },
  {
    name: "Número da NF",
    order: false
  },
  {
    name: "Valor da NF",
    order: false
  },
  {
    name: "Arquivo",
    order: false
  }
]

function InvoiceList({ data, meta, nextPage, previousPage, sortById, fnDownload }) {
  const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER))

  return ( 
    <>
      <ListHeader 
        data={user.user_type_id === 1 ? admin : professional}
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