import React from 'react'
import { useHistory } from 'react-router-dom'
import ArrowRegister from '../../atoms/ArrowRegister'
import { SectionTitle } from '../../atoms/PageTitle/style'
import { Main } from './style'

function TitleContainer({backToPath, title}) {
  const history = useHistory()
  return (  
    <Main>
      <ArrowRegister
        clickHandler={() => {history.push(backToPath)}}
      />
      <SectionTitle>
        {title}
      </SectionTitle>
    </Main>
  )
}

export default TitleContainer