import React from 'react'
import { formatDate } from '../../utils/formatDate'
import { Main, Container } from './style'

function ListItem({data}) {

  return ( 
    data ? data.map((item, index) => 
      <Main key={index}>
        <Container>
          {item.id}
        </Container>
        <Container>
          {formatDate(new Date(item.created_at), {timeZone: 'UTC'})}
        </Container>
        <Container>
          {item.file.name}
        </Container>
      </Main >
    ) : <Main>Loading...</Main>
  ) 
}

export default ListItem