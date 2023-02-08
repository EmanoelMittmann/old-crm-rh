import React from "react";
import InputSelect from "../../atoms/InputSelect";
import InputWithLabel from "../../atoms/InputWithLabel";
import HeaderOvertimeRh from "../../molecules/HeaderOvertimeRh";
import { SearchSection } from "../../molecules/SearchSection";
import Footer from "../Footer";
import Shelf from "./shelf";
import { Container, ContainerListing, ContainerSearch } from "./style";

const OvertimeRh = ({
  projects,
  status,
  sortByName,
  data,
  dataMeta,
  next,
  prev,
  finalDate,
  setOrderField,
  setProjectParams,
  setInitialDate,
  setFinalDate,
  initialDate,
  setSearch,
  setStatusParams,
  getHoursPending,
}) => {

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
            placeHolder="Projetos"
            width="100%"
            lineWidth="15em"
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
        <HeaderOvertimeRh
          sortByName={sortByName}
          setOrderField={setOrderField}
        />
        <div className="height">
          {data.map((item, index) => (
            <Shelf values={item} index={index} getHoursPending={getHoursPending}/>
          ))}
        </div>
      </ContainerListing>
      <Footer
        currentPage={dataMeta.current_page}
        firstPage={dataMeta.first_page}
        lastPage={dataMeta.last_page}
        nextPage={() => next()}
        previousPage={() => prev()}
        height='5em'
      />
    </Container>
  );
};

export default OvertimeRh;
