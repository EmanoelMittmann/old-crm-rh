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
        lineWidth="100%"
        inputWidth="100%"
      />
      <InputSelect
        textColor={selectedStatusCompany}
        value={selectedStatusCompany}
        width="100%"
        lineWidth="100%"
        margin="10px"
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
        margin="10px"
        width="100%"
        lineWidth="100%"
      />
      <InputSelect
      textColor={typeCompany}
        value={typeCompany}
        onChange={(e) => setTypeCompany(e.target.value)}
        options={types}
        placeholder="Tipos de empresas"
        margin="10px"
        width="100%"
        lineWidth="100%"
      />
    </CompanyHeaderContainer>
  );
};

export default HeaderSearchCompany;
