import React from "react";
import InputText from "../../atoms/InputText";
import InputSelect from "../../atoms/InputSelect";
import InputWithLabel from "../../atoms/InputWithLabel";
import HeaderPayments from "../../molecules/HeaderPayments";
import Footer from "../Footer";
import Shelf from "./shelf";
import { Container, ContainerListing, ContainerSearch } from "./style";
import { Status } from "../../pages/Reports/Status";

const Payments = ({
  reports,
  reportsMeta,
  nextPage,
  prevPage,
  sortByName,
  setOrderField,
  search,
  setSearch,
  companies,
  setCompanyParams,
  initialPeriod,
  setInitialPeriod,
  finalPeriod,
  setFinalPeriod,
  setStatusParams,
  uploads,
}) => {
  return (
    <>
      <Container>
        <ContainerSearch>
          <InputText
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            width="17em"
            placeholder="Buscar Profissional"
          />

          <InputSelect
            options={companies}
            onChange={(e) => setCompanyParams(e.target.value)}
            placeHolder="Empresa Pagadora"
            width="100%"
            lineWidth="15em"
          />
          <InputSelect
            options={Status}
            onChange={(e) => setStatusParams(e.target.value)}
            placeHolder="Status"
            width="100%"
            lineWidth="15em"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => setInitialPeriod(e.target.value)}
            label="Período inicial"
            width="100%"
            value={initialPeriod}
            widthContainer="30%"
            handleBlur={() => {}}
            name="initial_period"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => setFinalPeriod(e.target.value)}
            label="Período final"
            width="100%"
            value={finalPeriod}
            widthContainer="30%"
            handleBlur={() => {}}
            name="initial_period"
          />
        </ContainerSearch>
        <ContainerListing>
          <HeaderPayments
            sortByName={sortByName}
            setOrderField={setOrderField}
          />
          {reports?.map((item) => (
            <Shelf data={item} uploads={uploads}/>
          ))}
        </ContainerListing>
        <Footer
          height="3em"
          firstPage={reportsMeta.first_page}
          lastPage={reportsMeta.last_page}
          nextPage={() => nextPage()}
          previousPage={() => prevPage()}
          currentPage={reportsMeta.current_page}
        />
      </Container>
    </>
  );
};

export default Payments;
