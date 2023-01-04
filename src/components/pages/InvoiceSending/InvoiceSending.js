import React, { useEffect, useState } from 'react'
import api from '../../../api/api'
import { toast } from 'react-toastify'
import { saveAs } from 'file-saver'
import { Container } from '../../atoms/Container'
import { DefaultToast } from '../../atoms/Toast/DefaultToast'
import { SearchSection } from '../../molecules/SearchSection'
import InvoiceList from '../../organisms/InvoiceList'
import { SearchContainer } from './style'
import InputWithLabel from '../../atoms/InputWithLabel'

const InvoiceSending = (props) => {
  const [data, setData] = useState()
  const [meta, setMeta] = useState({})
  const [search, setSearch] = useState("")
  const [date_emission_nf, setDateEmissionNF] = useState("")
  const [order, setOrder] = useState({ order: "", field: "" })
  const [initialDate, setInitialDate] = useState("")
  const [finalDate, setFinalDate] = useState("")
  let params = {}

  const getInvoices = async () => {
    await api({
      method: 'get',
      url: '/fiscalNotesProfissionals',
      params: params
    })
      .then((response) => {
        setData(response.data.data)
        setMeta(response.data.meta)
      })
      .catch((error) => toast.error("Dado de busca Inválido"))
  }

  const handleFilterRequest = (pagesFilter) => {

    if (pagesFilter === undefined) params.page = meta.current_page

    if (search !== "") {
      params.search = search
      params.page = meta.first_page
    }
    if (date_emission_nf !== "") {
      params.date_emission_nf = date_emission_nf
      params.page = meta.first_page
    }

    if (initialDate !== "") {
      params.date_start = initialDate
      params.page = meta.first_page
    }

    if (finalDate !== "" && finalDate > '1000-01-01') {
      finalDate < initialDate
        ? toast.warn(<DefaultToast text="Período final precisa ser maior que o período inicial" />, {
          toastId: "finalDate"
        })
        : params.date_end = finalDate
      params.page = meta.first_page
    }

    if (pagesFilter === "previous") params.page = `${meta.current_page - 1
      }`

    if (pagesFilter === "next") params.page = `${meta.current_page + 1
      }`

    if (order.order !== "") {
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

  async function downloadFile(id, name) {
    await api({
      method: 'get',
      url: `fiscalNotes/downloadFiles/${id}`,
      responseType: 'blob'
    })
      .then(response => {
        const file = response.data
        saveAs(file, name)
      })
  }

  useEffect(() => {
    handleFilterRequest()

    return getInvoices()
  }, [search, initialDate, finalDate, date_emission_nf, order])

  return (
    <Container>
      <SearchSection
        fnSearch={setSearch}
      >
        <SearchContainer>
          <InputWithLabel
            type="date"
            placeholder="Período inicial"
            label="Período inicial"
            onChange={(e) => setInitialDate(e.target.value)}
            value={initialDate}
            handleBlur={() => { }}
            width="260px"
          />
          <InputWithLabel
            type="date"
            placeholder="Período final"
            label="Periodo final"
            onChange={(e) => setFinalDate(e.target.value)}
            value={finalDate}
            handleBlur={() => { }}
            width="260px"
          />
          <InputWithLabel
            type="date"
            placeholder="Data Emissão da NF"
            label="Data Emissão da NF"
            onChange={(e) => setDateEmissionNF(e.target.value)}
            value={date_emission_nf}
            handleBlur={() => { }}
            width="260px"
          />
        </SearchContainer>
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

export default InvoiceSending
