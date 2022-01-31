import React from 'react'
import { Main, Container, Title } from './style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

function ListHeader({data, fnOrder}) {

  return (  
    <Main>
      {data.map((item, index) => 
        <Container key={index}>
          <Title>
            {item.name}
          </Title>
          {item.order ? <Arrows onClick={() => fnOrder(item.field)}/> : <></>}
        </Container>
      )}
    </Main>
  )
} 

export default ListHeader