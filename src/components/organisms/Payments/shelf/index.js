import React from "react";
import { Badge } from "../../../molecules/ProfessionalsListItem/style";
import {
  Container,
  ContainerCnpj,
  ContainerCompany,
  ContainerDatePayment,
  ContainerNFe,
  ContainerProfessional,
  ContainerStatus,
} from "./style";
import { ReactComponent as OptionsIcon } from "../../../../assets/icons/options.svg";
import { ContainerIconOptions } from "../../ProjectsListItem/style";
import MenuOptions from "../../../atoms/MenuOptions";
import { useState } from "react";
import {formatDate } from '../../../utils/formatDate'
import { formatCnpj } from "../../../utils/formatCnpj";
import { useHistory } from "react-router-dom";
import DetailsReports from "../../DetailsReports";

const Shelf = ({ data,uploads }) => {
  const { id } = data;
  const [menuOptions, setMenuOptions] = useState(false);
  const history = useHistory();
  const [optionClicked, setOptionClicked] = useState();
  const [detailVisibled, setdetaisVisibled] = useState(false)

  const viewDetails = () => {
    setdetaisVisibled(true)
    setMenuOptions(prev=>!prev)
  };

  const colors =
    data.status_payment === "Pago"
      ? "#1ECB4F"
      : data.status_payment === "Pendente"
      ? "#FFAE00"
      : data.status_payment === "Negado"
      ? "#FF3541"
      : "#0066FF";

  const bg =
    data.status_payment === "Pago"
      ? "#1ECB4F26"
      : data.status_payment === "Pendente"
      ? "#FFAE0026"
      : data.status_payment === "Negado"
      ? "#FF354126"
      : "#0066FF26";

  return (
    <>
      {detailVisibled && (
        <DetailsReports 
        id={data.id}
        data={data}
        setdetaisVisibled={setdetaisVisibled} />
      )}
      <Container key={id}>
        <ContainerCompany>
          {data?.order?.companies?.razao_social?.toUpperCase()}
        </ContainerCompany>
        <ContainerProfessional>{data.user.name}</ContainerProfessional>
        <ContainerCnpj>{formatCnpj(data.order.companies?.cnpj)}</ContainerCnpj>
        <ContainerNFe>
          {data.fiscal_note
            ? Number(data.fiscal_note.file_xml.value_nf).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            : Number('0').toLocaleString('pt-BR',{
              style: 'currency',
              currency: "BRL"
            })}
        </ContainerNFe>
        <ContainerDatePayment>{formatDate(data.date_payment)}</ContainerDatePayment>
        <ContainerStatus>
          <Badge color={colors} bg={bg} width="80%">
            {data.status_payment}
          </Badge>
          <ContainerIconOptions
            padding="0em"
            onClick={() => setMenuOptions((prev) => !prev)}
            optionsColor={menuOptions ? "#0066ff" : "#B7BDC2"}
          >
            <OptionsIcon />
          </ContainerIconOptions>
          {menuOptions &&(
            <MenuOptions
              positionMenu="-10px"
              height="8.5em"
              padding="1em 0 0.5em 1.5em"
              firstOptionDescription="Detalhes"
              firstChosenOption={() => viewDetails()}
              secondOptionDescription="Baixar PDF"
              secondChosenOption={() => uploads(data.user_id,'PDF',data.user.name)}
              thirdOptionDescription="Baixar XML"
              thirdChosenOption={() => uploads(data.user_id,'XML',data.user.name)}
              id={optionClicked}
            />
          )}    
        </ContainerStatus>
      </Container>
    </>
  );
};

export default Shelf;
