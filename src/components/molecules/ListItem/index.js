import React from 'react'
import { formatDate } from '../../utils/formatDate'
import { Main, Container, Button } from './style'

function ListItem({ data, downloadFile}) {

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
          <Button onClick={() => downloadFile(item.file_id, item.file.name) }>
            {item.file.name}
          </Button>
        </Container>
      </Main >
    ) : <Main>Loading...</Main>
  ) 
}

export default ListItem