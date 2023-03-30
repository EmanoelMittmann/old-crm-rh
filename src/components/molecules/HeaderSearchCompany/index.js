import React from "react";
import InputSearch from "../../atoms/InputSearch";
import { CompanyHeaderContainer } from "./style";
import { optionsUF } from "../../organisms/RegisterProfessionalsData";
import InputSelect from "../../atoms/InputSelect";
import { optionsRegistions } from "../../organisms/RegisterCompany/status";
import { types } from "../../organisms/CompaniesList/typeCompanies";

const HeaderSearchCompany = ({
  setSearchResult,
  setUf,
  uf,
  selectedStatusCompany,
  setSelectedStatusCompany,
  setTypeCompany,
  typeCompany,
}) => {
  return (
    <CompanyHeaderContainer>
      <InputSearch
        setSearchResult={setSearchResult}
        lineWidth="18%"
        inputWidth="100%"
      />
      <InputSelect
        textColor={selectedStatusCompany} 
        value={selectedStatusCompany}
        width="15%"
        options={optionsRegistions}
        onChange={(e) => setSelectedStatusCompany(e.target.value)}
        placeholder="Situação Cadastral"
      />
      <InputSelect
      textColor={uf}
        value={uf}
        onChange={(e) => setUf(e.target.value)}
        options={optionsUF}
        placeholder="UF"
        width="15%"
      />
      <InputSelect
      textColor={typeCompany}
        value={typeCompany}
        onChange={(e) => setTypeCompany(e.target.value)}
        options={types}
        placeholder="Tipos de empresas"
        width="15%"
      />
    </CompanyHeaderContainer>
  );
};

export default HeaderSearchCompany;
