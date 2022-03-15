import React from 'react'
import { Main, Container, Title, LastContainer } from './style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

function ListHeader({data, fnOrder}) {

  return (  
    <Main>
      {data.map((item, index) => 
        item.endContainer 
          ? <LastContainer>
              <Title>
                {item.name}
              </Title>
            </LastContainer>
          : <Container key={index}>
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