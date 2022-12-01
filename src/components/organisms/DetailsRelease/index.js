import React from 'react'
import { Badge } from '../../molecules/ProfessionalsListItem/style'
import TitleContainer from '../../molecules/TitleContainer'
import { Container, Flex, Text } from './style'

const DetailsRelease = () => {
  return (
    <>
      <TitleContainer backToPath="/timeSending" title="Detalhes" />
      <Container>
        <Flex>
          <Text>Lançamento #2681421</Text>
          <Badge bg='#0066FF26' color='#0066FF' width='200px'> Aguardando Ass O.s </Badge> 
        </Flex>
        <Flex mt='10px'>
          <p1 className='text'>Easy Delivery</p1>
          <p2>Lançado 24/03/2020</p2>
        </Flex>
      </Container>
    </>
  )
}

export default DetailsRelease