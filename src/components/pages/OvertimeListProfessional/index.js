import React, { useEffect, useState } from 'react'
import api from '../../../api/api'
import { toast } from 'react-toastify'
import { Container } from '../../atoms/Container'
import InputSelect from '../../atoms/InputSelect'
import { DefaultToast } from '../../atoms/Toast/DefaultToast'
import { SearchSection } from '../../molecules/SearchSection'
import { OvertimeList } from '../../organisms/OvertimeList'
import { SearchContainer, StyleIsTechLead} from './style'
import InputDate from '../../atoms/InputDate'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ArrowRegister from '../../atoms/ArrowRegister'



const OvertimeListProfessional = () => {
  const [data, setData] = useState()
  const [meta, setMeta] = useState({})
  const [status, setStatus] = useState([])
  const [statusParams, setStatusParams] = useState('')
  const [projects, setProjects] = useState([])
  const [projectParams, setProjectParams] = useState('')
  const [search, setSearch] = useState("")
  const [order, setOrder] = useState({order: "desc", field: ""})
  const [initialDate, setInitialDate] = useState("")
  const [finalDate, setFinalDate] = useState("")
  const isTechLead = useSelector((state) => state.validTechLead)
  let params = {}
  const history = useHistory()
  
  const getOvertimes = async () => {
    await api({
         method:'get',     
         url:'/extraHoursReleases',
         params: params
     })
     .then((response) => {
       setData(response.data.data)
       setMeta(response.data.meta)
     })
     .catch((error) => toast.error(error.message))
  }

  const getStatus = async () => {
    await api({
      method:'get',     
      url:'/extraHoursStatus',
  })
  .then((response) => {
    setStatus(response.data.data)
  })
  .catch((error) => toast.error(error.message))
  }

  const getProjects = async () => {
    await api({
      method:'get',     
      url:'/userProjects/user',
  })
  .then((response) => {
    setProjects(response.data)
  })
  .catch((error) => toast.error(error.message))
  }


  const handleFilterRequest = (pagesFilter) => {
    if(pagesFilter === undefined) params.page = meta.current_page

    if(search !== "") {
      params.search = search
      params.page = meta.first_page
    }

    if(statusParams !== "") {
      params.status_id = statusParams
      params.page = meta.first_page
    }

    if(projectParams !== "") {
      params.project_id = projectParams
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

  const nextPage = () => {
    handleFilterRequest("next")
    return getOvertimes()
  }

  const previousPage = () => {
    handleFilterRequest("previous")
    return getOvertimes()
  }

  const sortByField = (field) => {
    order.order === "desc" ? 
      setOrder({
        order: "asc", 
        orderField: field
      }) 
    : setOrder({
      order: "desc", 
      orderField: field
    })
  }
  const getIstechLead = () => {
    history.push("/timeSending");
  };

  useEffect(() => {
    getProjects()
    getStatus()
    handleFilterRequest()
    getOvertimes() 
  },[search, order, statusParams, projectParams, initialDate, finalDate])
  
  console.log(isTechLead)

  return (
    <Container>
      <ArrowRegister clickHandler={getIstechLead} />
      {isTechLead === true ?
        <StyleIsTechLead>
          <ArrowRegister clickHandler={getIstechLead} />
        </StyleIsTechLead>
        : ""}
      <SearchSection 
      fnSearch={setSearch} 
      width="100%"
      >
        <SearchContainer>
          <InputSelect 
            options={projects}
            onChange={e => setProjectParams(e.target.value)}
            placeHolder="Projeto"
            lineWidth="30%"
          />
          <InputSelect 
            options={status}
            onChange={ e => setStatusParams(e.target.value)}
            placeHolder="Status"
            lineWidth="30%"
          />
          <InputDate
            onChange={e => setInitialDate(e.target.value)}
            placeholder="Período inicial"
            date={initialDate}
            width="30%"
            type="date"
            handleBlur={() => {}}
            name="initial_period"
          />
           <InputDate
            onChange={e => setFinalDate(e.target.value)}
            placeholder="Período final"
            date={finalDate}
            width="30%"
            type="date"
            handleBlur={() => {}}
            name="initial_period"
          />
        </SearchContainer>
      </SearchSection>
      <OvertimeList 
        data={data} 
        meta={meta}
        status={status}
        nextPage={nextPage}  
        previousPage={previousPage}
        sortById={sortByField}
      />
    </Container>
  )
}

export default OvertimeListProfessional