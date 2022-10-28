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
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";

const ModalCompanies = ({
  CancelEvent,
  ConfirmEvent,
  setOrdemServicesData,
  OrdemServicesData,
  checkedProfissional
}) => {
  const [Companies, setCompanies] = useState([]);
  const [id, setId] = useState();
  const getCompanies = async () => {
    const { data } = await api({
      method: "GET",
      url: "/companies",
    });
    setCompanies(data.data);
  };

  const history = useHistory()

  console.log("OrdemServicesData: ", OrdemServicesData);

  useEffect(() => {
    getCompanies();
  }, []);

  useEffect(() => {
    setOrdemServicesData({
      company_id: Number(id),
      professional_id: checkedProfissional,
    });
  }, [id]);

  const handleSubmit = async () => {
    try {
      await api({
        method: 'POST',
        url: `/generationOrderOfService`
      }).then(() => {
        toast.success(<DefaultToast text='Ordem de serviço gerada com sucesso!'/>,{
          toastId: "post",
        })
        history.push('/serviceOrders')
      }).catch(() => {
        toast.error(<DefaultToast text='Erro Interno, Error:500'/>)
      })
    } catch (error) {
      console.error(error)    
    }
  }

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
            value={id}
            onChange={(e) => setId(e.target.value)}
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
