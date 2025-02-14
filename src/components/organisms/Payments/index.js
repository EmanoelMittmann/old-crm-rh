import React from "react";
import InputText from "../../atoms/InputText";
import InputSelect from "../../atoms/InputSelect";
import InputWithLabel from "../../atoms/InputWithLabel";
import HeaderPayments from "../../molecules/HeaderPayments";
import Footer from "../Footer";
import Shelf from "./shelf";
import { ContainerButtonExcel, ContainerSearch } from "./style";
import { Status } from "../../pages/Reports/Status";
import DownloadExcel from "../Download/DownloadExcel";
import DarkButton from "../../atoms/Buttons/DarkButton/style";
import { useState } from "react";
import { Container } from "../../atoms/Container";
import { ContainerAbsolute } from "../../atoms/Container/style";


const Payments = ({
  reports,
  reportsMeta,
  nextPage,
  prevPage,
  sortByName,
  setOrderField,
  search,
  statusParams,
  companyParams,
  setSearch,
  companies,
  setCompanyParams,
  initialPeriod,
  setInitialPeriod,
  finalPeriod,
  setFinalPeriod,
  setStatusParams,
  uploads,
  payingCompany,
  download,
}) => {
  const [modalIsVisibleExcel, setModalIsVisibleExcel] = useState(false)

  const handleDownload = () => {
    setModalIsVisibleExcel(prev => !prev)
  }
  return (
    <Container>
      {modalIsVisibleExcel &&
        <DownloadExcel
          payingCompany={payingCompany}
          setModalIsVisibleExcel={setModalIsVisibleExcel}
          download={download}
        />}
      <ContainerButtonExcel>
        <DarkButton
          onClick={() => handleDownload()}
          width="143px"
          height="44px"
          margin="0 5% 0 0"
        >
          Exportar Excel
        </DarkButton>
      </ContainerButtonExcel>
      <ContainerSearch>
        <InputText
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          width="17em"
          placeholder="Buscar"
        />
        <InputSelect
          options={companies}
          onChange={(e) => setCompanyParams(e.target.value)}
          textColor={companyParams}
          placeholder="Empresa Pagadora"
          width="25%"
          lineWidth="100%"
        />
        <InputSelect
          options={Status}
          textColor={statusParams}
          onChange={(e) => setStatusParams(e.target.value)}
          placeholder="Status"
          width="30%"
          lineWidth="100%"
        />
        <InputWithLabel
          type="date"
          onChange={(e) => setInitialPeriod(e.target.value)}
          width="100%"
          value={initialPeriod}
          widthContainer="30%"
          handleBlur={() => { }}
          name="initial_period"
          placeholder="Período inicial"
        />
        <InputWithLabel
          type="date"
          onChange={(e) => setFinalPeriod(e.target.value)}
          width="100%"
          value={finalPeriod}
          widthContainer="30%"
          handleBlur={() => { }}
          name="initial_period"
          placeholder="Período Final"
        />
      </ContainerSearch>
      <HeaderPayments
        sortByName={sortByName}
        setOrderField={setOrderField}
      />
      <ContainerAbsolute>
        {reports?.map((item) => (
          <Shelf data={item} uploads={uploads} key={item.id} />
        ))}
      </ContainerAbsolute>
      <Footer
        firstPage={reportsMeta.first_page}
        lastPage={reportsMeta.last_page}
        nextPage={() => nextPage()}
        previousPage={() => prevPage()}
        currentPage={reportsMeta.current_page}
      />
      </Container>

  );
};

export default Payments;
