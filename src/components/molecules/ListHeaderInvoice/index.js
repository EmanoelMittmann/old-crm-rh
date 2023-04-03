import React from 'react'
import { ListHeaderTitle } from '../../atoms/ListHeader/style'
import { 
    ArquivoNF, 
    HeaderContainer, 
    ListHeadeNumberNF, 
    ListHeaderData, 
    ListHeaderDataEmission, 
    ListHeaderItem, 
    ListHeaderValueNF 
} from './style'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'


const ListHeaderInvoice = ({ sortByName }) => {
  return (
      <HeaderContainer>
          <ListHeaderItem>
              <ListHeaderTitle margin='2.5em'>Item</ListHeaderTitle>
              <Arrows onClick={sortByName} />
          </ListHeaderItem>

          <ListHeaderData>
              <ListHeaderTitle margin='2.6em'>Data de Lançamento</ListHeaderTitle>
              <Arrows onClick={sortByName} />
          </ListHeaderData>

          <ListHeaderDataEmission>
              <ListHeaderTitle margin='3em'>Data de Emissão da NF</ListHeaderTitle>
 
          </ListHeaderDataEmission>

          <ListHeadeNumberNF>
              <ListHeaderTitle margin='4.3em'>Numero da NF</ListHeaderTitle>

          </ListHeadeNumberNF>
          <ListHeaderValueNF>
              <ListHeaderTitle margin='5.5em'>Valor da NF</ListHeaderTitle>
  
          </ListHeaderValueNF>
          <ArquivoNF>
              <ListHeaderTitle margin='4.3em'>Arquivo</ListHeaderTitle>

          </ArquivoNF>

      </HeaderContainer>
  )
};

export default ListHeaderInvoice;