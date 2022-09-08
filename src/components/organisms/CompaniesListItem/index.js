import React from "react";
import { ContainerIconOptions } from "../../molecules/ProfessionalsListItem/style";
import { 
  ComapaniesListOptions,
  CompanyCity, 
  CompanyCNPJ, 
  CompanyDate, 
  CompanyRazaoSocial, 
  CompanySituation, 
  CompanyUF, 
  ContainerCompaniesListItem 
} from "./style";
import {ReactComponent as OptionsIcon} from '../../../assets/icons/options.svg'

const CompaniesListItem = (companies) => {
  return (
    <ContainerCompaniesListItem>
      <CompanyRazaoSocial>
        {companies}
      </CompanyRazaoSocial>
      <CompanyCNPJ>
        {companies}
      </CompanyCNPJ>
      <CompanyDate>
        {companies}
      </CompanyDate>
      <CompanyCity>
        {companies}
      </CompanyCity>
      <CompanyUF>
        {companies}
      </CompanyUF>
      <CompanySituation>
        {companies}
      </CompanySituation>
      <ComapaniesListOptions
        // optionsColor={
        //   companies.id == optionClicked && menuOptionsisVisible
        //     ? "#407BFF"
        //     : "#B7BDC2"
        // }
      >
        <ContainerIconOptions
          // onClick={() => menuOptionsClicked(companies.id)}
        >
          <OptionsIcon />
        </ContainerIconOptions>
      </ComapaniesListOptions>
    </ContainerCompaniesListItem>
  );
};

export default CompaniesListItem;
