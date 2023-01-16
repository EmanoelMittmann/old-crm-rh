import React from "react";
import { useState } from "react";
import InputSelect from "../../atoms/InputSelect";
import InputWithLabel from "../../atoms/InputWithLabel";
import HeaderOvertimeRh from "../../molecules/HeaderOvertimeRh";
import { SearchSection } from "../../molecules/SearchSection";
import Shelf from "./shelf";
import { Container, ContainerListing, ContainerSearch } from "./style";

const OvertimeRh = ({ projects, status, sortByName}) => {
  const [search, setSearch] = useState("");
  const [projectParams, setProjectParams] = useState("");
  const [statusParams, setStatusParams] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  return (
    <Container>
      <ContainerSearch>
        <SearchSection
          fnSearch={setSearch}
          placeholder="Buscar por profissional"
          width="100%"
        >
          <InputSelect
            options={projects}
            onChange={(e) => setProjectParams(e.target.value)}
            placeHolder="Projeto"
            width="100%"
            lineWidth="30%"
          />
          <InputSelect
            options={status}
            onChange={(e) => setStatusParams(e.target.value)}
            placeHolder="Status"
            width="100%"
            lineWidth="30%"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => setInitialDate(e.target.value)}
            label="Período inicial"
            value={initialDate}
            width="100%"
            widthContainer="30%"
            handleBlur={() => {}}
            name="initial_period"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => setFinalDate(e.target.value)}
            label="Período final"
            value={finalDate}
            width="100%"
            widthContainer="30%"
            handleBlur={() => {}}
            name="initial_period"
          />
        </SearchSection>
      </ContainerSearch>
      <ContainerListing>
        <HeaderOvertimeRh sortByName={sortByName}/>
        {/* <Shelf values={data}/> */}
      </ContainerListing>
    </Container>
  );
};

export default OvertimeRh;
