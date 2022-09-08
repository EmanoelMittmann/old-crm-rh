import React from "react";
import { useState } from "react";
import api from "../../../api/api";
import { useLocation } from "react-router-dom";
import { CompaniesListHeader } from "../../molecules/CompaniesListHeader";
import ProfessionalsInputs from "../../molecules/ProfessionalsInputs";
import CompaniesListItem from "../CompaniesListItem";
import { CompaniesSectionContainer } from "./style";
import { useEffect } from "react";

const CompaniesList = () => {
  const location = useLocation()
  const [jobSelected, setJobSelected] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [companies, setCompanies] = useState([]);

  let params = {};

  const GetCompany = async () => {
    const { data } = await api({
      method: "GET",
      url: `/companies`,
      params: params,
    });

    setCompanies(data.data)
  };

  

  useEffect(() => {
    console.log(companies)
  },[])



  return (
    <CompaniesSectionContainer>
      <ProfessionalsInputs
        setSearchResult={setSearchResult}
        setJobSelected={setJobSelected}
      />
      <CompaniesListHeader />
      {companies.map((corporation) => {
        return (
          <CompaniesListItem key={corporation.id} corporation={corporation} />
        );
      })}
    </CompaniesSectionContainer>
  );
};

export default CompaniesList;
