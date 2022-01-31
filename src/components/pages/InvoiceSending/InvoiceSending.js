import React, { useEffect, useState } from 'react'
import api from '../../../api/api'
import { toast } from 'react-toastify'

import { Container } from '../../atoms/Container'
import { DefaultToast } from '../../atoms/Toast/DefaultToast'
import SearchSection from '../../molecules/SearchSection'
import InvoiceList from '../../organisms/InvoiceList'

const InvoiceSending = (props) => {
  const [data, setData] = useState()
  const [meta, setMeta] = useState({})
  const [search, setSearch] = useState("")
  const [order, setOrder] = useState({order: "", field: ""})
  const [initialDate, setInicialDate] = useState("")
  const [finalDate, setFinalDate] = useState("")
  let params = {}

  const getInvoices = async () => {
   await api({
        method:'get',     
        url:'/fiscalNotesProfissionals',
        params: params
    })
    .then((response) => {
      setData(response.data.data)
      setMeta(response.data.meta)
    })
    .catch((error) => toast.error(error.message))
  }

  const handleFilterRequest = (pagesFilter) => {

    if(pagesFilter === undefined) params.page = meta.current_page

    if(search !== "") {
      params.search = search
      params.page = meta.first_page
    }

    if(initialDate !== "") {     
      params.date_start = initialDate
      params.page = meta.first_page
    }

    if(finalDate !== "") {
      finalDate < initialDate 
        ? toast.warn(<DefaultToast text="Período final precisa ser maior que o período inicial" />,{
          toastId: "finalDate"
          }) 
        : params.date_end = finalDate
        params.page = meta.first_page
    }

    if(pagesFilter === "previous") params.page = `${
      meta.current_page - 1
    }`

    if(pagesFilter === "next") params.page = `${
      meta.current_page + 1
    }`
    
    if(order.order !== "") {
      params.orderField = order.orderField
      params.order = order.order
    }
  }

  const nextPage = () => {
    handleFilterRequest("next")
    return getInvoices()
  }

  const previousPage = () => {
    handleFilterRequest("previous")
    return getInvoices()
  }

  const sortByField = (field) => {
    order.order === "" ? 
      setOrder({
        order: "desc", 
        orderField: field
      }) 
    : order.order === "desc" ? 
      setOrder({
        order: "asc", 
        orderField: field
      }) 
    : setOrder({
      order: "desc", 
      orderField: field
    })
  }
  
  useEffect(() => {
    handleFilterRequest()

    return getInvoices() 
  },[search, initialDate, finalDate, order])

  return (
    <Container>
      <SearchSection 
        fnSearch={setSearch} 
        fnDateStart={setInicialDate} 
        fnDateEnd={setFinalDate}
        start={initialDate}
        end={finalDate}
      />
      <InvoiceList
        data={data}
        meta={meta}
        nextPage={nextPage}  
        previousPage={previousPage}
        sortById={sortByField}
      />
    </Container>
  )
}

export default InvoiceSending
