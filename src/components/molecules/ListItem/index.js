import React from 'react'
import { LocalStorageKeys } from '../../../settings/LocalStorageKeys'
import { TeamMemberPic } from '../../atoms/TeamMemberPic/style'
import { formatDate } from '../../utils/formatDate'
import { Main, Container, Button } from './style'

const admin = ((data, downloadFile) => data.map((item, index) =>  {
  return(
    <Main template="1.5fr 1fr 1fr 2fr" key={index}>
      <Container>
        <TeamMemberPic margin="0.2em 2em 0 0" width="40px" height="40px" src={item.user.avatar}/>
        {item.name}
      </Container>
      <Container>
        {formatDate(new Date(item.created_at), {timeZone: 'UTC'})}
      </Container>
      <Container>
        Dia 25 do mês
      </Container>
      <Container>
        <Button onClick={() => downloadFile(item.file_id, item.file.name) }>
          {item.file.name}
        </Button>
      </Container>
    </Main> 
  )
}))

const professional = ((data, downloadFile) => data.map((item, index) =>  {
  return (
    <Main template=".5fr 1fr 2fr 1fr" key={index}>
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
  )
}))

function ListItem({ data, downloadFile}) {
  const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER))

  if(!data) return (
    <Main>
      <Container>
        Loading... 
      </Container>
    </Main>
  )
  if(!data.length) return (
    <Main>
      <Container>
        Vazio...  
      </Container>
    </Main>
  )
  if(user.user_type_id === 1) return(
    admin(data, downloadFile)
  )
  return (
    professional(data, downloadFile)
  ) 
}

export default ListItem