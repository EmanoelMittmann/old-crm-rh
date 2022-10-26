import React from 'react'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg';
import { ListHeaderTitle } from '../../atoms/ListHeader/style';
import { ListHeaderCNPJ, ListHeaderProfessional, ListHeaderValueOs,ListHeaderContainer } from './style';

const HeaderOS = ({sortByName, setOrderBy}) => {
  return (
    <ListHeaderContainer>
       <ListHeaderProfessional>
        <ListHeaderTitle margin="0" right="1em">Professional</ListHeaderTitle>
        <Arrows className="arrow" onClick={() => {
          sortByName()
          setOrderBy('name')
          }}/>
      </ListHeaderProfessional>

      <ListHeaderCNPJ>
        <ListHeaderTitle margin="0" right="2em">CNPJ</ListHeaderTitle>
      </ListHeaderCNPJ>

      <ListHeaderValueOs>
        <ListHeaderTitle margin="0" right="1em">Valor da Os</ListHeaderTitle>
        <Arrows className="arrow" onClick={() => {
          sortByName()
          setOrderBy('total')
          }} />
      </ListHeaderValueOs>
    </ListHeaderContainer>
  )
}

export default HeaderOS