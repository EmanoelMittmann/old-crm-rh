import React from "react";
import { Container } from "../../atoms/Container";
import { ContainerAbsolute } from "../../atoms/Container/style";
import InputSelect from "../../atoms/InputSelect";
import InputWithLabel from "../../atoms/InputWithLabel";
import HeaderOvertimeRh from "../../molecules/HeaderOvertimeRh";
import { SearchSection } from "../../molecules/SearchSection";
import Footer from "../Footer";
import Shelf from "./shelf";
import { ContainerListing, ContainerSearch } from "./style";

const OvertimeRh = ({
  allOptionsProjects,
  allOptionsStatus,
  sortByName,
  data,
  dataMeta,
  next,
  prev,
  statusParams,
  projectParams,
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
            options={allOptionsProjects}
            onChange={(e) => setProjectParams(e.target.value)}
            textColor={projectParams}
            placeholder="Projetos"
            width="30%"
            lineWidth="100%"
          />
          <InputSelect
            options={allOptionsStatus}
            onChange={(e) => setStatusParams(e.target.value)}
            placeholder="Status"
            textColor={statusParams}
            width="30%"
            lineWidth="100%"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => setInitialDate(e.target.value)}
            value={initialDate}
            width="100%"
            widthContainer="30%"
            handleBlur={() => { }}
            name="initial_period"
            placeholder="Período inicial"

          />
          <InputWithLabel
            type="date"
            onChange={(e) => setFinalDate(e.target.value)}
            value={finalDate}
            width="100%"
            widthContainer="30%"
            handleBlur={() => { }}
            name="initial_period"
            placeholder="Período Final"
          />
        </SearchSection>
      </ContainerSearch>
      <HeaderOvertimeRh
        sortByName={sortByName}
        setOrderField={setOrderField}
      />
      <ContainerAbsolute>
        {data?.map((item) => (
          <Shelf values={item} key={item.id} getHoursPending={getHoursPending} />
        ))}
      </ContainerAbsolute>
      <Footer
        currentPage={dataMeta?.current_page}
        firstPage={dataMeta?.first_page}
        lastPage={dataMeta?.last_page}
        nextPage={() => next()}
        previousPage={() => prev()}
      />
    </Container>
  );
};

export default OvertimeRh;
