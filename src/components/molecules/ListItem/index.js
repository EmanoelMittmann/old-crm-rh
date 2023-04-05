import React from "react";
import { LocalStorageKeys } from "../../../settings/LocalStorageKeys";
import { TeamMemberPic } from "../../atoms/TeamMemberPic/style";
import { formatDate } from "../../utils/formatDate";
import {
  Main,
  Container,
  File,
  ContainerId,
  ContainerDateLançamento,
  ContainerNumberNF,
  ContainervalueNF,
  ContainerArquivo,
  ContainerDateEmissaoNF,
} from "./style";

const admin = (data, downloadFile) =>
  data.map((item, index) => {
    console.log('item: ', item);
    return (
      <Main template=".5fr 1fr 2fr 1fr" key={index}>
        <ContainerId>{item.id}</ContainerId>
        <ContainerDateLançamento>
          {formatDate(new Date(item.created_at), { timeZone: "UTC" })}
        </ContainerDateLançamento>
        <ContainerDateEmissaoNF>
          {formatDate(new Date(item.file_xml.date_emission_nf), {
            timeZone: "UTC",
          })}
        </ContainerDateEmissaoNF>
        <ContainerNumberNF>{item.file_xml.number_nf}</ContainerNumberNF>
        <ContainervalueNF>R$ {item.file_xml.value_nf}</ContainervalueNF>
        <ContainerArquivo>
          <File onClick={() => downloadFile(item.file_id, item.file.name)}>
            {item.file.name}
          </File>
        </ContainerArquivo>
      </Main>
    );
  });

const professional = (data, downloadFile) =>
  data.map((item, index) => {
    return (
      <Main template=".5fr 1fr 2fr 1fr" key={index}>
        <ContainerId>{item.id}</ContainerId>
        <ContainerDateLançamento>
          {formatDate(new Date(item.created_at), { timeZone: "UTC" })}
        </ContainerDateLançamento>
        <ContainerDateEmissaoNF>
          {formatDate(new Date(item.file_xml.date_emission_nf), {
            timeZone: "UTC",
          })}
        </ContainerDateEmissaoNF>
        <ContainerNumberNF>{item.file_xml.number_nf}</ContainerNumberNF>
        <ContainervalueNF>R$ {item.file_xml.value_nf}</ContainervalueNF>
        <ContainerArquivo>
          <File onClick={() => downloadFile(item.file_id, item.file.name)}>
            {item.file.name}
          </File>
        </ContainerArquivo>
      </Main>
    );
  });

function ListItem({ data, downloadFile }) {
  const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));

  if (!data)
    return (
      <Main>
        <Container>Loading...</Container>
      </Main>
    );
  if (!data.length)
    return (
      <Main>
        <Container>Nenhum arquivo encontrado...</Container>
      </Main>
    );
  if (user.user_type_id === 1) return admin(data, downloadFile);
  return professional(data, downloadFile);
}

export default ListItem;
