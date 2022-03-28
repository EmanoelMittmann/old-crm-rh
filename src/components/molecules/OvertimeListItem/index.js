import React from 'react'
import { Badge } from '../../atoms/Badge'
import { formatDate } from '../../utils/formatDate'
import { Main, Container, StatusContainer } from './style'

export function OvertimeListItem({ data, status }) {

  return ( 
    data ? data.map((item, index) => 
      <Main key={index}>
        <Container>
          {item.id}
        </Container>
        <Container>
          { item.type === 'BY_DATE' 
            ? formatDate(new Date(item.launch_date), {timeZone: 'UTC'})
            : `${formatDate(new Date(item.launch_date), {timeZone: 'UTC'})} - ${formatDate(new Date(item.end_date), {timeZone: 'UTC'})}`
          }
        </Container>
        <Container>
          {item.project.name}
        </Container>
        <StatusContainer>
          <Badge status={item.status} /> 
        </StatusContainer>
      </Main >
    ) : <Main>Loading...</Main>
  ) 
}
