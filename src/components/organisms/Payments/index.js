import React from "react";
import InputSearch from "../../atoms/InputSearch";
import InputSelect from "../../atoms/InputSelect";
import InputWithLabel from "../../atoms/InputWithLabel";
import MenuOptions from "../../atoms/MenuOptions";
import HeaderPayments from "../../molecules/HeaderPayments";
import Footer from "../Footer";
import { data } from "./mock";
import Shelf from "./shelf";
import { Container, ContainerListing, ContainerSearch } from "./style";

const Payments = ({ projects }) => {
  return (
    <>
      <Container>
        <ContainerSearch>
          <InputSearch lineWidth={"29em"} placeholder="Buscar..." />

          <InputSelect
            options={projects}
            onChange={(e) => {}}
            placeHolder="Projeto"
            width="100%"
            lineWidth="30%"
          />
          <InputSelect
            options={[]}
            onChange={(e) => {}}
            placeHolder="Status"
            width="100%"
            lineWidth="30%"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => {}}
            label="Período inicial"
            width="100%"
            widthContainer="30%"
            handleBlur={() => {}}
            name="initial_period"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => {}}
            label="Período final"
            width="100%"
            widthContainer="30%"
            handleBlur={() => {}}
            name="initial_period"
          />
        </ContainerSearch>
        <ContainerListing>
          <HeaderPayments />
          {data.map((item) => (
            <Shelf data={item}/>
          ))}
         
        </ContainerListing>
        <Footer height="3em" border="1px solid #ccc" />
      </Container>
    </>
  );
};

export default Payments;
