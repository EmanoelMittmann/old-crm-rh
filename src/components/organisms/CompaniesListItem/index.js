import React from "react";
import { ContainerIconOptions } from "../../molecules/ProfessionalsListItem/style";
import {
  ComapaniesListOptions,
  CompanyCity,
  CompanyCNPJ,
  CompanyDate,
  CompanyRazaoSocial,
  CompanySituation,
  CompanyUF,
  Companytype,
  ContainerCompaniesListItem,
  CompanyTextStatus,
} from "./style";
import { ReactComponent as OptionsIcon } from "../../../assets/icons/options.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import MenuOptions from "../../atoms/MenuOptions";
import { useDispatch } from "react-redux";
import { showEnableDisable } from "../../../redux/actions";
import { useRef } from "react";
import { useEffect } from "react";

const CompaniesListItem = ({ corporation }) => {
  const history = useHistory();
  const [menuOptionsisClicked, setMenuOptionsisClicked] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  const dispatch = useDispatch();

  const tranformStatusCompany =
    corporation.registration_status === "ACTIVE"
      ? "Ativa"
      : corporation.registration_status === "SUSPENDED"
      ? "Suspensa"
      : corporation.registration_status === "NULL"
      ? "Nula"
      : corporation.registration_status === "UNFIT"
      ? "Inapta"
      : "Baixada";
  const colorBg =
    corporation.registration_status === "ACTIVE"
      ? "#ddf7e5"
      : corporation.registration_status === "SUSPENDED"
      ? "#fff3d9"
      : corporation.registration_status === "NULL"
      ? "#F5F5F5"
      : corporation.registration_status === "UNFIT"
      ? "#FFE1E3"
      : "#FFE1E3";
  const colorText =
    corporation.registration_status === "ACTIVE"
      ? "#1ECB4F"
      : corporation.registration_status === "SUSPENDED"
      ? "#FFAE00"
      : corporation.registration_status === "NULL"
      ? "#000000"
      : corporation.registration_status === "UNFIT"
      ? "#FF3541"
      : "#FF3541";
  const textTypeCompany =
    corporation.type_company === "UBISTART"
      ? "Ubistart"
      : corporation.type_company === "CLIENT"
      ? "Cliente"
      : corporation.type_company === "SUPPLIER" && "Fornecedor";

  const editCompany = () => {
    dispatch(showEnableDisable(false));
    history.push(`/companies/${corporation.id}`);
  };

  const viewDetails = () => {
    dispatch(showEnableDisable(true));
    history.push(`/companies/${corporation.id}`);
  };

  function handleOutside(e) {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setMenuOptionsisClicked(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  return (
    <ContainerCompaniesListItem key={corporation.id}>
      <CompanyRazaoSocial>{corporation.razao_social}</CompanyRazaoSocial>
      <CompanyCNPJ>{corporation.cnpj}</CompanyCNPJ>
      <CompanyDate>{formatDate(corporation.opening_date)}</CompanyDate>
      <CompanyCity>{corporation.city_name}</CompanyCity>
      <Companytype>{textTypeCompany}</Companytype>
      <CompanyUF>{corporation.uf}</CompanyUF>
      <CompanySituation>
        <CompanyTextStatus bg={colorBg} text={colorText}>
          {tranformStatusCompany}
        </CompanyTextStatus>
      </CompanySituation>
      <ComapaniesListOptions
        optionsColor={menuOptionsisClicked ? "#407BFF" : "#B7BDC2"}
      >
        <ContainerIconOptions>
          <OptionsIcon
            onClick={() => setMenuOptionsisClicked(!menuOptionsisClicked)}
            ref={buttonRef}
          />
        </ContainerIconOptions>
      </ComapaniesListOptions>
      {menuOptionsisClicked && (
        <MenuOptions
          ref={modalRef}
          positionMenu="13px"
          firstOptionDescription="Editar"
          secondOptionDescription="Detalhes"
          firstChosenOption={editCompany}
          secondChosenOption={viewDetails}
          padding="0.3em 0.5em 0.3em 1.7em"
          id={corporation.id}
        />
      )}
    </ContainerCompaniesListItem>
  );
};

export default CompaniesListItem;
