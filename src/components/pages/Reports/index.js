import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../../api/api";
import Payments from "../../organisms/Payments";
import { saveAs } from 'file-saver'

const Reports = () => {
  const [reports, setReports] = useState([])
  const [meta, setMeta] = useState({
    page: 1,
    order: 'asc',
    id_company: ''

  })
  const [statusParams, setStatusParams] = useState('')
  const [companies, setCompanies] = useState([])
  const [initialPeriod, setInitialPeriod] = useState('')
  const [finalPeriod, setFinalPeriod] = useState('')
  const [reportsMeta, setReportsMeta] = useState({})
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')
  const [orderField, setOrderField] = useState('')

  const params = new URLSearchParams()

  const sortByName = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  const getCompany = async () => {
    const { data } = await api.get('/companies')
    data.data.push({ id: '', name: 'Todos' })
    setCompanies(data.data)
  }

  const getReports = async () => {
    handleFilterRequest()
    const { data } = await api.get('/reports?limit=5', { params })
    setReports(data.data)
    setReportsMeta(data.meta)
  }

  const uploads = async (id, type, name) => {
    try {
      const { data } = await api.get(`/downloadReportsFiles?user_id=${id}&type_file=${type}`, { responseType: 'blob' })
      saveAs(data, name)
    } catch (error) {
      console.error(error)
    }
  }

  const nextPage = () => {
    handleFilterRequest('next')
    getReports()
  }

  const prevPage = () => {
    handleFilterRequest('previous')
    getReports()
  }

  const handleFilterRequest = (pagesFilter) => {
    if (pagesFilter === 'next') {
      params.append('page', reportsMeta.current_page + 1)
    }
    if (pagesFilter === 'previous') {
      params.append('page', reportsMeta.current_page - 1)
    }
    if (order !== '') {
      params.append('order', order)
    }
    if (orderField !== '') {
      params.append('orderField', orderField)
    }
    if (search !== '') {
      params.append('search', search)
    }
    if (statusParams !== '') {
      params.append('status', statusParams)
    }
    if (initialPeriod !== '' && finalPeriod !== '') {
      params.append('date_start', initialPeriod)
      params.append('date_end', finalPeriod)
    }
  }

  useEffect(() => {
    getReports()
    getCompany()
  }, [order, orderField, search, statusParams, meta.id_company, initialPeriod, finalPeriod])

  return (
    <>
      <Payments
        reports={reports}
        search={search}
        companies={companies}
        statusParams={statusParams}
        setStatusParams={setStatusParams}
        setSearch={setSearch}
        initialPeriod={initialPeriod}
        setInitialPeriod={setInitialPeriod}
        uploads={uploads}
        finalPeriod={finalPeriod}
        setFinalPeriod={setFinalPeriod}
        sortByName={sortByName}
        setOrderField={setOrderField}
        reportsMeta={reportsMeta}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
};

export default Reports;
