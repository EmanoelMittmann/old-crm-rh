import React, { useEffect, useState } from 'react'
import api from '../../../api/api.js'
import { Container } from '../../atoms/Container/index.js'
import InputDate from '../../atoms/InputDate/index.js'
import { DefaultToast } from '../../atoms/Toast/DefaultToast.js'
import { SearchSection } from '../../molecules/SearchSection/index.js'
import InvoiceList from '../../organisms/InvoiceList/index.js'
import { toast } from 'react-toastify'
import { saveAs } from 'file-saver'
import InputWithLabel from '../../atoms/InputWithLabel/index.js'

const Invoice = () => {
  const [data, setData] = useState([])
  const [initialDate, setInitialDate] = useState('')
  const [finalDate, setFinalDate] = useState('')
  const [search, setSearch] = useState('')
  const [meta, setMeta] = useState('')
  const [order, setOrder] = useState({order: "", field: ""})

  const params = {}

  const handleFilterRequest = (pagesFilter) => {
    if(search !== "") {
      params.search = search
      params.page = meta.first_page
    }

    if(initialDate !== "") {     
      params.date_start = initialDate
      params.page = meta.first_page
    }

    if(finalDate !== "" && finalDate > '1000-01-01') {
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

  const getInvoices = async () => {
      handleFilterRequest()
      const {data} = await api({
          method:'get',     
          url:`/fiscalNotes`,
          params: params
      })

      setData(data.data)
      setMeta(data.meta)
  }

  useEffect(() => {
    getInvoices()
  }, [search, initialDate, finalDate, order])

  const nextPage = () => {
      handleFilterRequest("next")
      getInvoices()
  }

  const previousPage = () => {
      handleFilterRequest("previous")
      getInvoices()
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

  async function downloadFile(id, name) {
    await api({
      method:'get',     
      url:`fiscalNotes/downloadFiles/${id}`,
      responseType: 'blob'
    })
    .then(response => {
      const file = response.data
      saveAs(file, name)
    })
  }

  return (
    <Container>
      <SearchSection fnSearch={setSearch}>
        <InputWithLabel
          placeholder="Período inicial" 
          onChange={(e) => setInitialDate(e.target.value)} 
          value={initialDate}
        />
        <InputDate 
          placeholder="Período final" 
          onChange={(e) => setFinalDate(e.target.value)} 
          date={finalDate}
        />
      </SearchSection>
      <InvoiceList
        data={data}
        meta={meta}
        nextPage={nextPage}  
        previousPage={previousPage}
        sortById={sortByField}
        fnDownload={downloadFile}
      />
    </Container>
  )
}

export default Invoice


