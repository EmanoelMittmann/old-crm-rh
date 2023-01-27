import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../../api/api";
import Payments from "../../organisms/Payments";

const Reports = () => {
  const [projects, setProjects] = useState([])
  const [reports, setReports] = useState([])
  const [reportsMeta, setReportsMeta] = useState({})
  const [menuOptions, setMenuOptions] = useState(false)
  
  console.log("reports: ", reports);

  const params = new URLSearchParams()

  const getProjects = async () => {
    const { data } = await api.get('/project')
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
    if (pagesFilter === 'next') {
      params.append('page', reportsMeta.current_page + 1)
    }
    if (pagesFilter === 'previous') {
      params.append('page', reportsMeta.current_page - 1)
    }
  }

  useEffect(() => {
    getProjects()
    getReports()
  }, [])

  return (
    <>
      <Payments
        projects={projects}
        reports={reports}
        reportsMeta={reportsMeta}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
};

export default Reports;
