import React from 'react'
import { Main, Container, Text } from "./style"

import { ReactComponent as Icon } from '../../../assets/icons/icon-info.svg'

function AlertInvoice({text}) {
  return (  
    <Main>
      <Container>
        <Icon />
        <Text>{text}</Text>
      </Container>
    </Main>
  )
}

export default AlertInvoice