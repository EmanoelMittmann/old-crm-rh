import React from 'react'
import { ListHeaderTitle } from '../../atoms/ListHeader/style'
import { 
    HeaderContainer, 
    ListHeadeProjeto, 
    ListHeadeQntHours, 
    ListHeaderDataFinal, 
    ListHeaderDataInicio, 
    ListHeaderItem,
    ListHeaderStatus, 
} from './style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'


const ListHeaderHoursExtra = ({ sortById }) => {
  return (
      <HeaderContainer>
          <ListHeaderItem>
              <ListHeaderTitle margin='3em'>Código</ListHeaderTitle>
              <Arrows onClick={() => sortById("id")} />
          </ListHeaderItem>
          <ListHeaderDataInicio>
              <ListHeaderTitle margin='3em'>Periodo Inicial</ListHeaderTitle>
              <Arrows onClick={() => sortById("launch_date")} />
          </ListHeaderDataInicio>
          <ListHeaderDataFinal>
              <ListHeaderTitle margin='3em'>Periodo Final</ListHeaderTitle>
          </ListHeaderDataFinal>
          <ListHeadeQntHours>
              <ListHeaderTitle margin='3em'>Quantidade de Horas </ListHeaderTitle>
          </ListHeadeQntHours>
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