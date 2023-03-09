import React, { useState } from 'react';
import {
  ListHeaderContainer,
  ListHeaderTitle,
} from '../../atoms/ListHeader/style';
import {
  ListHeaderCity,
  ListHeaderCNPJ,
  ListHeaderDate,
  ListHeaderRazaoSocial,
  ListHeaderSituation,
  ListHeaderType,
  ListHeaderUF,
} from './style';
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg';

export const CompaniesListHeader = ({OrderForList}) => {
  return (
    <ListHeaderContainer>
      <ListHeaderRazaoSocial>
        <ListHeaderTitle margin="0">Razão Social</ListHeaderTitle>
        <Arrows onClick={OrderForList} />
      </ListHeaderRazaoSocial>

      <ListHeaderCNPJ>
        <ListHeaderTitle margin="0">CNPJ</ListHeaderTitle>
        <Arrows onClick={OrderForList} />
      </ListHeaderCNPJ>

      <ListHeaderDate>
        <ListHeaderTitle margin="0">Data de Abertura</ListHeaderTitle>
        <Arrows onClick={OrderForList} />
      </ListHeaderDate>


      <ListHeaderCity>
        <ListHeaderTitle margin="0">Cidade</ListHeaderTitle>
        <Arrows onClick={OrderForList} />
      </ListHeaderCity>
      
      <ListHeaderType>
        <ListHeaderTitle margin="0">Tipos</ListHeaderTitle>
        <Arrows onClick={OrderForList} />
      </ListHeaderType>

      <ListHeaderUF>
        <ListHeaderTitle margin="0">UF</ListHeaderTitle>
        <Arrows onClick={OrderForList} />
      </ListHeaderUF>

      <ListHeaderSituation>
        <ListHeaderTitle margin="0">Situação Cadastral</ListHeaderTitle>
      </ListHeaderSituation>
    </ListHeaderContainer>
  );
};
