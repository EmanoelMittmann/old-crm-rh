import React from 'react';
import {
  ContainerIconOptions,
} from '../../molecules/ProfessionalsListItem/style';
import {
  ComapaniesListOptions,
  CompanyCity,
  CompanyCNPJ,
  CompanyDate,
  CompanyRazaoSocial,
  CompanySituation,
  CompanyUF,
  ContainerCompaniesListItem,
  CompanyTextStatus,
} from './style';
import { ReactComponent as OptionsIcon } from '../../../assets/icons/options.svg';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import MenuOptions from '../../atoms/MenuOptions';
import { useDispatch } from 'react-redux';
import { showEnableDisable } from '../../../redux/actions';

const CompaniesListItem = ({ corporation }) => {
  const history = useHistory();
  const [optionClicked, setOptionClicked] = useState();
  const [menuOptionsisClicked, setMenuOptionsisClicked] = useState(false);
  const dispatch = useDispatch();
  const tranformStatusCompany = 
    corporation.registration_status === 'ACTIVE' ? 'Ativa' : 
      corporation.registration_status === 'SUSPENDED' ? 'Suspensa' : 
        corporation.registration_status === 'NULL' ? 'Nula': 'Baixada'
  const colorBg = 
    corporation.registration_status === 'ACTIVE' ? '#ddf7e5' : 
      corporation.registration_status === 'SUSPENDED' ? '#fff3d9' : 
        corporation.registration_status === 'NULL' ? '#F5F5F5' : '#FFE1E3'
  const colorText = 
    corporation.registration_status === 'ACTIVE' ? '#1ECB4F' : 
      corporation.registration_status === 'SUSPENDED' ? '#FFAE00' :  
        corporation.registration_status === 'NULL' ? '#000000' : '#FF3541'


  const menuOptionsClicked = (companyId) => {
    setMenuOptionsisClicked(!menuOptionsisClicked);
    setOptionClicked(companyId);
  };

  const editCompany = () => {
    dispatch(showEnableDisable(false));
    history.push(`/companies/${corporation.id}`);
  };

  const viewDetails = () => {
    dispatch(showEnableDisable(true));
    history.push(`/companies/${corporation.id}`);
  };

  return (
    <ContainerCompaniesListItem>
      <CompanyRazaoSocial>{corporation.razao_social}</CompanyRazaoSocial>
      <CompanyCNPJ>{corporation.cnpj}</CompanyCNPJ>
      <CompanyDate>{formatDate(corporation.opening_date)}</CompanyDate>
      <CompanyCity>{corporation.city_name}</CompanyCity>
      <CompanyUF>{corporation.uf}</CompanyUF>
      <CompanySituation>
        <CompanyTextStatus bg={colorBg} text={colorText}>
          {tranformStatusCompany}
        </CompanyTextStatus>
      </CompanySituation>
      <ComapaniesListOptions
        optionsColor={
          corporation.id === optionClicked && menuOptionsisClicked
            ? '#407BFF'
            : '#B7BDC2'
        }
      >
        <ContainerIconOptions
          onClick={() => menuOptionsClicked(corporation.id)}
        >
          <OptionsIcon />
        </ContainerIconOptions>
      </ComapaniesListOptions>
      {menuOptionsisClicked && corporation.id === optionClicked && (
        <MenuOptions
          positionMenu="13px"
          firstOptionDescription="Editar"
          secondOptionDescription="Detalhes"
          firstChosenOption={editCompany}
          secondChosenOption={viewDetails}
          padding="0.3em 0.5em 0.3em 1.7em"
          id={optionClicked}
        />
      )}
    </ContainerCompaniesListItem>
  );
};

export default CompaniesListItem;
