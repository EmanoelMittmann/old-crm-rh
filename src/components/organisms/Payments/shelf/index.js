import React, { useEffect, useRef } from "react";
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
import { formatDate } from "../../../utils/formatDate";
import { formatCnpj } from "../../../utils/formatCnpj";
import DetailsReports from "../../DetailsReports";

const Shelf = ({ data, uploads }) => {
  const [menuOptions, setMenuOptions] = useState(false);
  const [detailVisibled, setdetaisVisibled] = useState(false);
  const modalRef = useRef();
  const buttonRef = useRef();

  const viewDetails = () => {
    setdetaisVisibled(true);
    setMenuOptions(false);
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

  function handleOutside(e) {
    if (
      modalRef.current &&
      !modalRef.current?.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setMenuOptions(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  return (
    <>
      {detailVisibled && (
        <DetailsReports
          id={data.id}
          data={data}
          setdetaisVisibled={setdetaisVisibled}
        />
      )}
      <Container key={data.id}>
        <ContainerCompany>
          {data?.order?.companies?.razao_social?.toUpperCase()}
        </ContainerCompany>
        <ContainerProfessional>{data.user.name}</ContainerProfessional>
        <ContainerCnpj>{formatCnpj(data.order.companies?.cnpj)}</ContainerCnpj>
        <ContainerNFe>
          {data.fiscal_note
            ? Number(data.fiscal_note.file_xml.value_nf).toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )
            : Number("0").toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
        </ContainerNFe>
        <ContainerDatePayment>
          {formatDate(data.date_payment)}
        </ContainerDatePayment>
        <ContainerStatus>
          <Badge color={colors} bg={bg} width="80%">
            {data.status_payment}
          </Badge>
          <ContainerIconOptions
            padding="0em"
            optionsColor={menuOptions ? "#0066ff" : "#B7BDC2"}
          >
            <OptionsIcon
              onClick={() => setMenuOptions(!menuOptions)}
              ref={buttonRef}
            />
          </ContainerIconOptions>
          {menuOptions && (
            <MenuOptions
              ref={modalRef}
              positionMenu="-10px"
              height="8.5em"
              padding="1em 0 0.5em 1.5em"
              firstOptionDescription="Detalhes"
              firstChosenOption={() => viewDetails()}
              secondOptionDescription="Baixar PDF"
              secondChosenOption={() =>
                uploads(data.user_id, "PDF", data.user.name)
              }
              thirdOptionDescription="Baixar XML"
              thirdChosenOption={() =>
                uploads(data.user_id, "XML", data.user.name)
              }
              id={data.id}
            />
          )}
        </ContainerStatus>
      </Container>
    </>
  );
};

export default Shelf;
