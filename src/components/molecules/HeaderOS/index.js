import React from 'react'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg';
import { ListHeaderTitle } from '../../atoms/ListHeader/style';
import { ListHeaderCNPJ, ListHeaderProfessional, ListHeaderValueOs,ListHeaderContainer } from './style';

const HeaderOS = ({sortByName}) => {
  return (
    <ListHeaderContainer>
       <ListHeaderProfessional>
        <ListHeaderTitle margin="0" right="1em">professional</ListHeaderTitle>
        <Arrows onClick={() => sortByName} />
      </ListHeaderProfessional>

      <ListHeaderCNPJ>
        <ListHeaderTitle margin="0" right="1em">CNPJ</ListHeaderTitle>
        <Arrows onClick={() => sortByName} />
      </ListHeaderCNPJ>

      <ListHeaderValueOs>
        <ListHeaderTitle margin="0" right="1em">Valor da Os</ListHeaderTitle>
        <Arrows onClick={() => sortByName} />
      </ListHeaderValueOs>
    </ListHeaderContainer>
  )
}

export default HeaderOS