/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import api from '../../../api/api'
import { useLocation } from 'react-router';
import ServiseOrdersListHeader from '../../molecules/ServiceOrdersListHeader'
import ServiceOrderListItens from '../../molecules/ServicesOrderListItens'
import { ContainerHeight } from './style';
import ServiceOrdersInput from '../../molecules/ServiceOrdersInputs';


const ServiceOrderSection = () => {
  const [order, setOrder] = useState('');
  const [osProfessionalMeta, setOsProfessionalMeta] = useState('');
  const [professionals, setProfessionals] = useState([]);
  const [searchResult, setSearchResult] = useState('')
  const [statusSelected, setstatusSelected] = useState('')
  const location = useLocation();

  let params = {};

  const handleFilterOsRequest = (pagesFilter) => {
    if (pagesFilter === 'previous')
      params.page = `${osProfessionalMeta.current_page - 1}`;

    if (pagesFilter === 'next')
      params.page = `${osProfessionalMeta.current_page + 1}`;

    if (pagesFilter === undefined) params.page = osProfessionalMeta.current_page;

    if (searchResult !== '') {
      params.search = searchResult;
      params.page = osProfessionalMeta.first_page
    }
    if(searchResult === Number){
      params.os_number = searchResult;
      params.page = osProfessionalMeta.first_page
    }

    if (order !== '') params.order = order;

  }


  const sortByName = () => {
    order === '' && setOrder('desc');
    order === 'asc' && setOrder('desc');
    order === 'desc' && setOrder('asc');
  };

  const getOsProfessionals = async (searchResult) => {
    const { data } = await api({
      method: 'get',
      url: `/orderOfService?limit=10&search=${searchResult}&cnpj=${searchResult}&os_number=${searchResult}`,
      params: params,
    });

    setProfessionals(data.data);
    setOsProfessionalMeta(data.meta);
  };

  const nextPage = () => {
    handleFilterOsRequest('next');
    getOsProfessionals();
  };

  const previousPage = () => {
    handleFilterOsRequest('previous');
    getOsProfessionals();
  };

  useEffect(() => {
    getOsProfessionals(searchResult)
    location.state && setProfessionals(location.state.professionals.data);
  }, [order, searchResult]);


  console.log("professionals: ", professionals);

  console.log("searchResult: ", typeof(searchResult));



  return (
    <>
    <ServiceOrdersInput
        setSearchResult={setSearchResult}
        searchResult={searchResult}
        statusSelected={statusSelected}
        setstatusSelected={setstatusSelected}
        />
      <ServiseOrdersListHeader sortByName={sortByName}/>
      <ContainerHeight >
        {professionals.map((professional) =>
          <ServiceOrderListItens
            key={professional.id}
            professional={professional} />)}
      </ContainerHeight>
      <Footer
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={osProfessionalMeta.current_page}
        firstPage={osProfessionalMeta.first_page}
        lastPage={osProfessionalMeta.last_page}
      />

    </>
  )
}

export default ServiceOrderSection