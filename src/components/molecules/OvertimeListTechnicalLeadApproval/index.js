import React, { useState } from "react";
import {
  Main,
  ContainerLaunch_date,
  ContainerProject,
  Text,
  ContainerUser,
  ContainerStatus,
  User_name,
  ContainerQntHours,
} from "./style";
import { formatDate } from "../../utils/formatDate";
import { Badge } from "../../molecules/ProfessionalsListItem/style";
import ApprovalIsTechLead from "../ModalApprovalIsTechLead";

export function OvertimeListTechnicalLeadApproval({ data, }) {
  const [modalIsVisibleTechLead, setModalIsVisibleTechLead] = useState(false)

  const ClickHandlerTechLead = () => {
    setModalIsVisibleTechLead(true)
  }

  return data ? (
    data.map((values, index) => (
      <Main key={index} margin='1.5em 0 0 0em' padding='0em 0 0 2em'>
        {modalIsVisibleTechLead && (
          <ApprovalIsTechLead
            id={values.id}
            setModalIsVisibleTechLead={setModalIsVisibleTechLead} />
        )}
        {values.status_name === "Pendente - Líder Técnico" ? (
          <ContainerUser
            onClick={() => ClickHandlerTechLead()}
          >
            <img src={values.avatar} className="img" />
            <User_name>{values?.user_name}</User_name>
          </ContainerUser>
        ) : (
          <ContainerUser>
            <img src={values.avatar} className="img" />
            <User_name>{values?.user_name}</User_name>
          </ContainerUser>
        )}
        <ContainerQntHours>
          <Text>{values.hour_quantity}hr</Text>
        </ContainerQntHours>
        <ContainerProject>
          <Text>{values.project_name}</Text>
        </ContainerProject>
        <ContainerLaunch_date>
          {formatDate(values.launch_date)}
        </ContainerLaunch_date>
        <ContainerStatus>
          {(values.status_id === 1) ? (
            <Badge bg="#FFAE0026" color="#FFAE00" width="200px">
              {values.status_name}
            </Badge>
          ) : (values.status_id === 2) ? (
            <Badge bg="#FFAE0026" color="#FFAE00" width="200px">
              {values.status_name}
            </Badge>
          ) : (values.status_id === 3) ? (
            <Badge bg="#0066FF26" color="#0066FF" width="200px">
              {values.status_name}
            </Badge>
          ) : (values.status_id === 4) ? (
            <Badge bg="#1ECB4F26" color="#1ECB4F" width="200px">
              {values.status_name}
            </Badge>
          ) : (values.status_id === 5) ? (
            <Badge bg="#1ECB4F" color="#FFF" width="200px">
              {values.status_name}
            </Badge>
          ) : (values.status_id === 6) ? (
            <Badge bg="#FF354126" color="#FF3541" width="200px">
              {values.status_name}
            </Badge>
          ) : (
            ""
          )}
        </ContainerStatus>
      </Main>
    ))
  ) : (
    <Main>Loading...</Main>
  );
}
