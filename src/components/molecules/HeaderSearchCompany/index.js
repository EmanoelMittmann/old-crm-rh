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
        lineWidth="280px"
        inputWidth="230px"
      />
      <InputSelect
        value={selectedStatusCompany}
        width="280px"
        margin="10px"
        options={optionsRegistions}
        onChange={(e) => setSelectedStatusCompany(e.target.value)}
        placeHolder="Situação Cadastral"
      />
      <InputSelect
        value={uf}
        onChange={(e) => setUf(e.target.value)}
        options={optionsUF}
        placeHolder="UF"
        margin="10px"
        width="220px"
      />
      <InputSelect
        value={typeCompany}
        onChange={(e) => setTypeCompany(e.target.value)}
        options={types}
        placeHolder="Tipos de empresas"
        margin="10px"
        width="220px"
      />
    </CompanyHeaderContainer>
  );
};

export default HeaderSearchCompany;
