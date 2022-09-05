import React, { useEffect, useState } from 'react'
import api from '../../../api/api'
import InputSelect from '../../atoms/InputSelect'
import ProjectsListHeader from '../../atoms/ProjectsListHeader'
import { Container } from '../../atoms/Container'
import { SearchSection } from '../../molecules/SearchSection'
import ProjectsListItem from '../../organisms/ProjectsListItem'
import Footer from '../../organisms/Footer'

const Projects = () => {
  const [data, setData] = useState([])
  const [meta, setMeta] = useState({})
  const [typesOptions, setTypesOptions] = useState([])
  const [statusOptions, setStatusOptions] = useState([])
  const [selectedTypesOptions, setSelectedTypesOptions] = useState('')
  const [selectedStatusOptions, setSelectedStatusOptions] = useState('')
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState({order: "", field: ""})
  const params = {}

  const handleFilterRequest = (pagesFilter) => {
    if(search !== "") {
      params.search = search
      params.page = meta.first_page
    }

    if(selectedTypesOptions !== '') {
      params.type_id = selectedTypesOptions
    }

    if(selectedStatusOptions !== '') {
      params.status_id = selectedStatusOptions
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

  const getProjects = async () => {
      handleFilterRequest()
      const {data} = await api({
          method:'get',     
          url:`/project`,
          params: params
      })
      setData(data.data)
      setMeta(data.meta)
  }

  useEffect(() => {
    getProjects()
  },[data])

  const nextPage = () => {
    handleFilterRequest("next")
    getProjects()
  }

  const previousPage = () => {
    handleFilterRequest("previous")
    getProjects()
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

  const getTypesOptions = async () => {
    const { data } = await api({
      method: 'get',
      url: `/projectType`,
    })
    data.data.push({ name: "Todos" })
    setTypesOptions(data.data)
  }

  const getStatusOptions = async () => {
    const { data } = await api({
      method: 'get',
      url: `/projectStatus`
    })

    setStatusOptions(data.data)
  }
  const allOptions = [...statusOptions, {name: "Todos"}]
  

  useEffect(() => {
    getProjects()
    if(!typesOptions.length) getTypesOptions()
    if(!statusOptions.length) getStatusOptions()
  },[search, selectedTypesOptions, selectedStatusOptions, order])

  return (
    <Container>
      <SearchSection fnSearch={setSearch}>
        <InputSelect
          options={typesOptions}
          onChange={e => setSelectedTypesOptions(e.target.value)}
          placeHolder="Tipo"
          width="220px"
        />
        <InputSelect
          options={allOptions}
          onChange={e => setSelectedStatusOptions(e.target.value)}
          placeHolder="Status"
          width="230px"
        />
      </SearchSection>
      <ProjectsListHeader fnOrder={sortByField} />
      <ProjectsListItem data={data} statusOptions={statusOptions}/>
      <Footer
        previousPage={previousPage}
        nextPage={nextPage}
        lastPage={meta?.last_page}
        currentPage={meta?.current_page}
        firstPage={meta?.first_page}
      />
    </Container>
  )
}

export default Projects
