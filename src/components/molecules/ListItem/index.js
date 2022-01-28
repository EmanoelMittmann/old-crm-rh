import React from 'react'
import { format } from 'date-fns'
import { Main, Container } from './style'

function ListItem({data}) {

  function formatData(data) {
    const newDate = format(data, 'dd/MM/yyyy')
    return newDate
  }

  return ( 
    data ? data.map((item, index) => 
      <Main key={index}>
        <Container>
          {item.id}
        </Container>
        <Container>
          {formatData(new Date(item.created_at), {timeZone: 'UTC'})}
        </Container>
        <Container>
          {item.file.name}
        </Container>
      </Main >
    ) : <></>
  ) 
}

export default ListItem