import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../../api/api";
import Payments from "../../organisms/Payments";

const Reports = () => {
  const [projects, setProjects] = useState([])
  const [reports, setReports] = useState([])
  const [reportsMeta, setReportsMeta] = useState({})
  const [order, setOrder] = useState('asc')
  const [orderField, setOrderField] = useState('')

  const params = new URLSearchParams()

  const sortByName = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

    const getProjects = async() => {
        const {data} = await api.get('/project')
        setProjects(data.data)
    }

  const getReports = async () => {
    const { data } = await api.get('/reports?limit=7', { params })
    setReports(data.data)
    setReportsMeta(data.meta)
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
      if(pagesFilter === 'next'){
        params.append('page',reportsMeta.current_page + 1)
      }
      if(pagesFilter === 'previous'){
        params.append('page',reportsMeta.current_page - 1)
      }
      if (order !== '') {
        params.append('order', order)
      }
      if (orderField !== '') {
        params.append('orderField', orderField)
      }
    }

  useEffect(() => {
    getProjects()
    getReports()
    handleFilterRequest()
  }, [order, orderField])

  return (
    <>
      <Payments
        projects={projects}
        reports={reports}
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
