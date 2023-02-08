import React from "react";
import InputText from "../../atoms/InputText";
import InputSelect from "../../atoms/InputSelect";
import InputWithLabel from "../../atoms/InputWithLabel";
import HeaderPayments from "../../molecules/HeaderPayments";
import Footer from "../Footer";
import Shelf from "./shelf";
import { Container, ContainerButtonExcel, ContainerListing, ContainerSearch } from "./style";
import { Status } from "../../pages/Reports/Status";
import DownloadExcel from "../Download/DownloadExcel";
import DarkButton from "../../atoms/Buttons/DarkButton/style";
import { useState } from "react";


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
  payingCompany,
  download,
}) => {
  const [modalIsVisibleExcel, setModalIsVisibleExcel] = useState(false)

  const handleDownload = () =>{
    setModalIsVisibleExcel(prev => !prev)
  }
  return (
    <>
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
            width="145px"
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
            handleBlur={() => { }}
            name="initial_period"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => setFinalPeriod(e.target.value)}
            label="Período final"
            width="100%"
            value={finalPeriod}
            widthContainer="30%"
            handleBlur={() => { }}
            name="initial_period"
          />
        </ContainerSearch>
        <ContainerListing>

          <HeaderPayments
            sortByName={sortByName}
            setOrderField={setOrderField}
          />
          {reports?.map((item) => (
            <Shelf data={item} uploads={uploads} />
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
