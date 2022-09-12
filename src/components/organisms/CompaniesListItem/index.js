import React from "react";
import {
  Badge,
  ContainerIconOptions,
} from "../../molecules/ProfessionalsListItem/style";
import {
  ComapaniesListOptions,
  CompanyCity,
  CompanyCNPJ,
  CompanyDate,
  CompanyRazaoSocial,
  CompanySituation,
  CompanyUF,
  ContainerCompaniesListItem,
} from "./style";
import { ReactComponent as OptionsIcon } from "../../../assets/icons/options.svg";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import MenuOptions from "../../atoms/MenuOptions";

const CompaniesListItem = ({ corporation }) => {
  const history = useHistory();
  const [optionClicked, setOptionClicked] = useState();
  const [menuOptionsisClicked, setMenuOptionsisClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [Message, setMessage] = useState("");


  const menuOptionsClicked = (companyId) => {
    setMenuOptionsisClicked(!menuOptionsisClicked);
    setOptionClicked(companyId);
  };

  const editCompany = () => {
    history.push(`/companies/${corporation.id}`);
  };


  return (
    <ContainerCompaniesListItem>
      <CompanyRazaoSocial>{corporation.razao_social}</CompanyRazaoSocial>
      <CompanyCNPJ>{corporation.cnpj}</CompanyCNPJ>
      <CompanyDate>{corporation.opening_date}</CompanyDate>
      <CompanyCity>{corporation.city_name}</CompanyCity>
      <CompanyUF>{corporation.uf}</CompanyUF>
      <CompanySituation>
        {corporation.is_active === true ? (
          <Badge bg="#E4F8DD" color="#229A16">
            Ativo
          </Badge>
        ) : (
          <Badge bg="#FFE2E1" color="#BB2B3F">
            Inativo
          </Badge>
        )}
      </CompanySituation>
      <ComapaniesListOptions
        optionsColor={
          corporation.id == optionClicked && menuOptionsisClicked
            ? "#407BFF"
            : "#B7BDC2"
        }
      >
        <ContainerIconOptions
          onClick={() => menuOptionsClicked(corporation.id)}
        >
          <OptionsIcon />
        </ContainerIconOptions>
      </ComapaniesListOptions>
      {menuOptionsisClicked && corporation.id == optionClicked && (
        <MenuOptions
          positionMenu="13px"
          firstOptionDescription="Editar"
          secondOptionDescription={
            corporation.is_active ? "Inativar" : "Ativar"
          }
          firstChosenOption={editCompany}
          padding="0.3em 0.5em 0.3em 1.7em"
          id={optionClicked}
        />
      )}
      {/* {openModal && (
        <ModalRed
          CloseButtonClickHandler={() => setOpenModal(false)}
          redButtonClickHandler={() => disableProfessional()}
          title={corporation.is_active === 1 ? "Inativar" : "Ativar"}
          message={modalMessage}
        />
      )} */}
    </ContainerCompaniesListItem>
  );
};

export default CompaniesListItem;
