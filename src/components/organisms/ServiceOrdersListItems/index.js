/* eslint-disable react/jsx-pascal-case */
import React from 'react' 
import { ContainerListItemServ, ContainerListItemO_S } from './style'


const ServiceOrdersListItems= ({data, statusOptions}) => {

  if (!data) {
    return (
      <ContainerListItemServ>
        <ContainerListItemO_S>
          Loading...
        </ContainerListItemO_S>
      </ContainerListItemServ>
    )
  }

  if (!data.length) {
    return (
      <ContainerListItemServ>
        <ContainerListItemO_S>
          Nenhumo OS encontrada...
        </ContainerListItemO_S>
      </ContainerListItemServ>
    )
  }

  return (
  
        <ContainerListItemServ>

        </ContainerListItemServ>


  )
}

export default ServiceOrdersListItems