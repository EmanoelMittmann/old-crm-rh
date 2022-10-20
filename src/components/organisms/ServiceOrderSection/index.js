/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import api from '../../../api/api'
import { useLocation } from 'react-router';
import { toast } from 'react-toastify'
import ServiseOrdersListHeader from '../../molecules/ServiceOrdersListHeader'
import ServiceOrderListItens from '../../molecules/ServicesOrderListItens'
import { ContainerHeight } from './style';
import ServiceOrdersInput from '../../molecules/ServiceOrdersInputs';
import { DefaultToast } from '../../atoms/Toast/DefaultToast';

const ServiceOrderSection = () => {
  const [order, setOrder] = useState('');
  const [osProfessionalMeta, setOsProfessionalMeta] = useState([]);
  const [statusSelected, setstatusSelected] = useState('')
  const [referencesDate, setReferenceDate] = useState('')
  const [professionals, setProfessionals] = useState([]);
  const [searchResult, setSearchResult] = useState('')
  const [initialDate, setInitialDate] = useState('')
  const [finalDate, setFinalDate] = useState('')

  const location = useLocation();

  let params = {};

  const getOsProfessionals = async () => {
    const { data } = await api({
      method: 'get',
      url: `/orderOfService?limit=10&search=${searchResult}&cnpj=${searchResult}&os_number=${searchResult}&status=${statusSelected}&finalDate=${finalDate}&initialDate=${initialDate}&referencesDate=${referencesDate}`,
      params : params
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

  const sortByName = () => {
    order === '' && setOrder('desc');
    order === 'asc' && setOrder('desc');
    order === 'desc' && setOrder('asc');
  };

  const handleFilterOsRequest = (pagesFilter) => {
    if (pagesFilter === 'previous')
      params.page = `${osProfessionalMeta.current_page - 1}`;

    if (pagesFilter === 'next')
      params.page = `${osProfessionalMeta.current_page + 1}`;

    if (pagesFilter === undefined) params.page = osProfessionalMeta.current_page;

    

     if (finalDate !== '' && finalDate < initialDate) {
           toast.warn(<DefaultToast text="Período final precisa ser maior que o período inicial" />  
     )}

    if (order !== '') params.order = order;

  }

  useEffect(() => {
    handleFilterOsRequest()
    getOsProfessionals(searchResult, statusSelected, finalDate, initialDate, referencesDate)
    location.state && setProfessionals(location.state.professionals.data);
  }, [order, searchResult, statusSelected, finalDate, initialDate, referencesDate]);
  
  return (
    <>
    <ServiceOrdersInput
        setSearchResult={setSearchResult}       
        setstatusSelected={setstatusSelected}
        setInitialDate={setInitialDate}
        setFinalDate={setFinalDate}
        setReferenceDate={setReferenceDate}
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
        lastPage={osProfessionalMeta?.last_page}
        currentPage={osProfessionalMeta?.current_page}
        firstPage={osProfessionalMeta?.first_page}  
      />

    </>
  )
}

export default ServiceOrderSection