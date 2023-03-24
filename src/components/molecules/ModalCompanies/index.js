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
  setOrdemServicesData,
  OrdemServicesData,
  ModalProfessional
}) => {
  const [companies, setCompanies] = useState([]);
  const [id, setId] = useState();
  const [onlyError, setOnlyError] = useState('')
  const history = useHistory();


  const getCompanies = async () => {
    try {
      const { data } = await api({
        method: "GET",
        url: "/companies",
        razao_social: companies
      });
      setCompanies(data.data);
    } catch (error) {
      console.error(error)
    }
  };

  const handleSubmit = async () => {
    try {
      await api({
        method: 'POST',
        url: `/generationOrderOfService`,
        data: OrdemServicesData
      }).then(() => {
        toast.success(<DefaultToast text='Ordem de serviço gerada com sucesso!' />, {
          toastId: "post",
        })
        history.push('/serviceOrders')
      }).catch(() => {
        toast.error(<DefaultToast text='Erro Interno, Error:500' />)
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddCompany = () => {
    if (id) {
      handleSubmit()
    } else {
      setOnlyError("Selecione uma empresa")
    }
  }

  useEffect(() => {
    getCompanies(); 
  }, []);

  useEffect(() => {
    setOrdemServicesData({
      company_id: Number(id),
      professional_id: ModalProfessional.map(id => id.professional_id),
    });
  }, [id]);

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
            placeholder="Empresas"
            value={id}
            onChange={(e) => setId(e.target.value)}
            options={companies}
            error={onlyError}
            touched={onlyError}
            width="100%"
          />
        </ContainerSelect>
        <ContainerFooter>
          <CancelButton color="#fff" onClick={CancelEvent}>
            Cancelar
          </CancelButton>
          <BlueButton width="108px" height="40px" onClick={() => handleAddCompany()}>
            Gerar Os
          </BlueButton>
        </ContainerFooter>
      </ModalContainer>
      <ModalOverlay />
    </div>
  );
};

export default ModalCompanies;
