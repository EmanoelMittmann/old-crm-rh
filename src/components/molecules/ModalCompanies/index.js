import React from "react";
import { ModalOverlay } from "../Modal/style";
import { ReactComponent as CloseButtonCircleIcon } from "../../../assets/icons/closeCircle.svg";
import {
  ContainerFooter,
  ContainerSelect,
  ModalContainer,
  ModalTitle,
} from "./style";
import InputSelect from "../../atoms/InputSelect";
import { BlueButton } from "../../atoms/Buttons/BlueButton/style";
import CancelButton from "../../atoms/Buttons/CancelButton/style";
import { useState } from "react";
import api from "../../../api/api";
import { useEffect } from "react";

//obj exemple
// {
//   company_id: 1,
//   professionals: [1,2,3,4,5]
// }

const ModalCompanies = ({ CancelEvent, ConfirmEvent,OrdemServicesData, setOrdemServicesData,ModalProfessional }) => {
  const [Companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    const { data } = await api({
      method: "GET",
      url: "/companies",
    });
    setCompanies(data.data)
  };

  const handleSelectCompany = () => {
    setOrdemServicesData({
      company_id: Companies.id,
      professionals:ModalProfessional
    })
  }
    console.log("OrdemServicesData: ", OrdemServicesData);

  useEffect(() => {
    getCompanies()
  },[Companies])

  return (
    <div>
      <ModalContainer>
        <div className="header">
          <ModalTitle padding="1.6em 1.6em 0.7em 0em">
            Selecione a empresa
          </ModalTitle>
          <div className="close">
            <CloseButtonCircleIcon onClick={CancelEvent} />
          </div>
        </div>
        <ContainerSelect>
          <InputSelect
            lineWidth="24em"
            placeHolder="Empresas"
            onChange={() => handleSelectCompany()}
            options={Companies}
            width="100%"
          />
        </ContainerSelect>
        <ContainerFooter>
          <CancelButton color="#fff" onClick={CancelEvent}>
            Cancelar
          </CancelButton>
          <BlueButton width="108px" height="40px" onClick={ConfirmEvent}>
            Gerar Os
          </BlueButton>
        </ContainerFooter>
      </ModalContainer>
      <ModalOverlay />
    </div>
  );
};

export default ModalCompanies;
