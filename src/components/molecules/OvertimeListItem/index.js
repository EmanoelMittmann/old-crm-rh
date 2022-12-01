import React from 'react'
import { useState } from 'react'
import { Badge } from '../../atoms/Badge'
import { formatDate } from '../../utils/formatDate'
import { Main, Container, StatusHoursExtra } from './style'

export function OvertimeListItem({ data }) {
  const transformColor = (status) => {
    const colorBg = status === 1 ? "#fff3d9"
      : status === 2 ? "#fff3d9"
        : status === 4 ? "#ddf7e5"
          : status === 5 ? "#1ECB4F" :
            "#FFE1E3"
    const colortext = status === 1 ? "#FFAE00"
      : status === 2 ? "#FFAE00"
        : status === 4 ? "#1ECB4F"
          : status === 5 ? "#FFFFFF"
            : " #FF3541"
return [colorBg, colortext]
}

  return (
    data ? data.map((item, index) =>
      <Main key={index}>
        <Container>
          {item.id}
        </Container>
        <Container>
          {item.type === 'BY_DATE'
            ? formatDate(new Date(item.launch_date), { timeZone: 'UTC' })
            : `${formatDate(new Date(item.launch_date), { timeZone: 'UTC' })} - ${formatDate(new Date(item.end_date), { timeZone: 'UTC' })}`
          }
        </Container>
        <Container>
          {item.project.name}
        </Container>
        <StatusHoursExtra bg={transformColor(item.status.id)[0]} text={transformColor(item.status.id)[1]}>
          {item.status.name}
        </StatusHoursExtra>
      </Main >
    ) : <Main>Loading...</Main>
  )
}
