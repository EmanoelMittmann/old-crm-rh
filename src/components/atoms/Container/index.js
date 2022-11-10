import React from 'react'

import { Main, Section } from './style'

export function   Container(props) {
  return (
    <Main>
      <Section>
        {props.children}
      </Section>
    </Main>
  )
}
