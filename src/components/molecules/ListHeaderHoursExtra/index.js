import React from 'react'
import { ListHeaderTitle } from '../../atoms/ListHeader/style'
import { 
    HeaderContainer, 
    ListHeadeProjeto, 
    ListHeaderDataFinal, 
    ListHeaderDataInicio, 
    ListHeaderItem,
    ListHeaderStatus, 
} from './style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'


const ListHeaderHoursExtra = ({ sortByName }) => {
  return (
      <HeaderContainer>
          <ListHeaderItem>
              <ListHeaderTitle margin='3em'>Código</ListHeaderTitle>
              <Arrows onClick={sortByName} />
          </ListHeaderItem>
          <ListHeaderDataInicio>
              <ListHeaderTitle margin='3em'>Periodo Inicial</ListHeaderTitle>
              <Arrows onClick={sortByName} />
          </ListHeaderDataInicio>
          <ListHeaderDataFinal>
              <ListHeaderTitle margin='3em'>Periodo Final</ListHeaderTitle>
          </ListHeaderDataFinal>
          <ListHeadeProjeto>
              <ListHeaderTitle margin='3em'>Projeto</ListHeaderTitle>
          </ListHeadeProjeto>
          <ListHeaderStatus>
              <ListHeaderTitle margin='3em'>Status</ListHeaderTitle>
          </ListHeaderStatus>
      </HeaderContainer>
  )
};

export default ListHeaderHoursExtra;