import React from "react";
import { useState } from "react";
import api from "../../../api/api";
import { useLocation } from "react-router-dom";
import { CompaniesListHeader } from "../../molecules/CompaniesListHeader";
import CompaniesListItem from "../CompaniesListItem";
import { useEffect } from "react";
import Footer from "../Footer";
import HeaderSearchCompany from "../../molecules/HeaderSearchCompany";
import { Container } from "../../atoms/Container";

const CompaniesList = () => {
  const location = useLocation();
  const [companyMeta, setCompanyMeta] = useState([]);
  const [typeCompany, setTypeCompany] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [uf, setUf] = useState("");
  const [companies, setCompanies] = useState([]);
  const [order, setOrder] = useState("");
  const [selectedStatusCompany, setSelectedStatusCompany] = useState("");

  let params = {};

  const getCompany = async () => {
    const { data } = await api({
      method: "GET",
      url: `/companies/?limit=5`,
      params: params,
    });
    setCompanies(data.data);
    setCompanyMeta(data.meta);
  };

  const handleFilterCompanies = async () => {
    const { data } = await api({
      method: "GET",
      url: `/findCompanies?razao_social=${searchResult}&uf=${uf}&cnpj=${searchResult}&city_name=${searchResult}&status=${selectedStatusCompany}&type_company=${typeCompany}`,
      params: params,
    });
    setCompanies(data.data);
    setCompanyMeta(data.meta);
  };

  const nextPage = () => {
    handleFilterRequest("next");
    getCompany();
  };

  const previousPage = () => {
    handleFilterRequest("previous");
    getCompany();
  };

  const OrderForList = () => {
    order === "" && setOrder("asc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  const handleFilterRequest = (pagesFilter) => {
    if (pagesFilter === "previous")
      params.page = `${companyMeta.current_page - 1}`;

    if (pagesFilter === "next") params.page = `${companyMeta.current_page + 1}`;

    if (pagesFilter === undefined) params.page = companyMeta.current_page;

    if (searchResult !== "") {
      params.search = searchResult;
      params.page = companyMeta.first_page;
    }

    if (order !== "") params.order = order;
  };

  useEffect(() => {
    handleFilterRequest();

    searchResult || uf || selectedStatusCompany || typeCompany
      ? handleFilterCompanies(searchResult, uf, selectedStatusCompany,typeCompany)
      : getCompany();
    location.state && setCompanies(location.state.companies.data);
  }, [order, searchResult, uf, selectedStatusCompany,typeCompany]);

  return (
    <Container>
      <HeaderSearchCompany
        setSearchResult={setSearchResult}
        setTypeCompany={setTypeCompany}
        typeCompany={typeCompany}
        setUf={setUf}
        uf={uf}
        setSelectedStatusCompany={setSelectedStatusCompany}
      />
      <CompaniesListHeader OrderForList={OrderForList} />
      {companies?.map((corporation) => (
        <CompaniesListItem key={corporation.id} corporation={corporation} />
      ))}
      <Footer
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={companyMeta.current_page}
        firstPage={companyMeta.first_page}
        lastPage={companyMeta.last_page}
      />
    </Container>
  );
};

export default CompaniesList;
