import React from "react";
import { Badge } from "../../../molecules/ProfessionalsListItem/style";
import {
  Container,
  ContainerCnpj,
  ContainerCompany,
  ContainerDatePayment,
  ContainerNFe,
  ContainerProfessional,
  ContainerProject,
  ContainerStatus,
} from "./style";
import { ReactComponent as OptionsIcon } from "../../../../assets/icons/options.svg";
import { ContainerIconOptions } from "../../ProjectsListItem/style";
import MenuOptions from "../../../atoms/MenuOptions";
import { useState } from "react";

const Shelf = ({ data }) => {
  const { id } = data;
  const [menuOptions, setMenuOptions] = useState(false);

  const colors =
    data.status === "Pago"
      ? "#1ECB4F"
      : data.status === "Pendente"
      ? "#FFAE00"
      : data.status === "Negado"
      ? "#FF3541"
      : "#0066FF";

  const bg =
    data.status === "Pago"
      ? "#1ECB4F26"
      : data.status === "Pendente"
      ? "#FFAE0026"
      : data.status === "Negado"
      ? "#FF354126"
      : "#0066FF26";

  return (
    <>
      <Container key={id}>
        <ContainerCompany>{data.company.toUpperCase()}</ContainerCompany>
        <ContainerProfessional>{data.professional}</ContainerProfessional>
        <ContainerProject>{data.project}</ContainerProject>
        <ContainerCnpj>{data.cnpj}</ContainerCnpj>
        <ContainerNFe>
          {Number(data.valorNf).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ContainerNFe>
        <ContainerDatePayment>{data.paymentDate}</ContainerDatePayment>
        <ContainerStatus>
          <Badge color={colors} bg={bg} width="80%">
            {data.status}
          </Badge>
          <ContainerIconOptions
            padding="0em"
            onClick={() => setMenuOptions((prev) => !prev)}
            optionsColor={menuOptions ? "#0066ff" : "#B7BDC2"}
          >
            <OptionsIcon />
          </ContainerIconOptions>
          {menuOptions && (
            <MenuOptions
              positionMenu="-10px"
              height="8.5em"
              padding="1em 0 0.5em 1.5em"
              firstChosenOption={() => {}}
              firstOptionDescription="Detalhes"
              secondOptionDescription="Baixar PDF"
              thirdOptionDescription="Baixar XML"
            />
          )}
        </ContainerStatus>
      </Container>
    </>
  );
};

export default Shelf;
