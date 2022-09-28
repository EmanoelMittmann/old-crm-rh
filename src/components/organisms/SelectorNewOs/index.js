import React from "react";
import { useState } from "react";
import api from "../../../api/api";
import InputSearch from "../../atoms/InputSearch";
import OrdemServiceHeader from "../../molecules/OrdemServiceListHeader";
import OrdemServiceListItem from "../../molecules/OrdemServicesListItem";
import { Container, ScrollContainer, ContainerButtons } from "./style";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BlueButton } from "../../atoms/Buttons/BlueButton/style";
import CancelButton from "../../atoms/Buttons/CancelButton/style";

const NewOrdemService = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const [order, setOrder] = useState("");
  const history = useHistory()

  let params = {};

  const sortByName = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  const getProfessionals = async () => {
    const { data } = await api({
      method: "get",
      url: "/professionals/?limit=undefined",
      params: params,
    });
    setProfessionals(data.data);
  };

  const handleFilterRequest = () => {
    if (searchResult !== "") {
      params.search = searchResult;
    }

    if (order !== "") params.order = order;
  };

  useEffect(() => {
    handleFilterRequest();
    getProfessionals();
  }, [searchResult]);

  return (
    <>
      <ContainerButtons>
        <CancelButton margin="10px" onClick={() => history.push('/serviceOrders')}>Cancelar</CancelButton>
        <BlueButton width="10%" height="40px" onClick={() => {}}>Confirmar</BlueButton>
      </ContainerButtons>
      <Container>
        <InputSearch
          setSearchResult={setSearchResult}
          lineWidth="20%"
          inputWidth="12em"
        />
        <OrdemServiceHeader sortByName={sortByName} />
        <ScrollContainer>
          {professionals?.map((index) => {
            return <OrdemServiceListItem key={index.id} index={index} />;
          })}
        </ScrollContainer>
      </Container>
    </>
  );
};

export default NewOrdemService;
