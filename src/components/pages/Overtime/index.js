import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import api from '../../../api/api'
import OvertimeRh from '../../organisms/OvertimeRh'

const Overtime = () => {
  const [projects,setProjects] = useState([])
  const [status, setStatus] = useState([])
  const [order, setOrder] = useState('asc')
  const [data, setData] = useState([])

  const getProject = async() => {
    try {
      const {data} = await api.get('/project')
      setProjects(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const getStatus = async() => {
    try {
      const {data} = await api.get('/extraHoursStatus') 
      setStatus(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  const getHoursPending = async() => {
    try {
      const {data} = await api.get('/extrasHoursReleases/pending')
      console.log("data: ", data.data);
      setData(data.data)
    } catch (error) {
      console.error(error);
    }
  }
  
  const sortByName = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  useEffect(() => {
    getProject()
    getStatus()
    getHoursPending()
  }, [])

  return (
    <>
      <OvertimeRh projects={projects} status={status} sortByName={sortByName}/>
    </>
  )
}
export default Overtime