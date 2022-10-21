import React from 'react'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg';
import { ListHeaderTitle } from '../../atoms/ListHeader/style';
import { ListHeaderCNPJ, ListHeaderProfessional, ListHeaderValueOs,ListHeaderContainer } from './style';

const HeaderOS = ({sortByName, setOrderBy}) => {
  return (
    <ListHeaderContainer>
       <ListHeaderProfessional>
        <ListHeaderTitle margin="0" right="1em" onClick={() => setOrderBy('name')}>Professional</ListHeaderTitle>
        <Arrows onClick={sortByName}/>
      </ListHeaderProfessional>

      <ListHeaderCNPJ>
        <ListHeaderTitle margin="0" right="1em">CNPJ</ListHeaderTitle>
        <Arrows  />
      </ListHeaderCNPJ>

      <ListHeaderValueOs>
        <ListHeaderTitle margin="0" right="1em" onClick={() => setOrderBy('total')}>Valor da Os</ListHeaderTitle>
        <Arrows onClick={sortByName} />
      </ListHeaderValueOs>
    </ListHeaderContainer>
  )
}

export default HeaderOS