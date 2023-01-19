import React from "react";
import {
  ContainerLaunch_date,
  ContainerProject,
  ContainerStatus,
  ContainerUser,
  Main,
  Text,
  User_name,
} from "../../../molecules/OvertimeListTechnicalLeadApproval/style";
import { Badge } from "../../../molecules/ProfessionalsListItem/style";
import { formatDate } from "../../../utils/formatDate";
import { ContainerQntHours } from "../style";
import { useState } from "react";
import ApprovalHoursAdm from "../../../molecules/ModalApprovalHoursAdm";

const Shelf = ({ values, index, }) => {
  const [modalIsVisibleRH, setModalIsVisibleRH] = useState(false)

  const handlerModalRH = () => {
    setModalIsVisibleRH(true)
  };


  return (
    <>
      {modalIsVisibleRH && (
        <ApprovalHoursAdm
          id={values.id}
          setModalIsVisibleRH={setModalIsVisibleRH} />
      )}
      <Main key={index} padding="2em 0 0 2em">
        {values.status_name === 'Pendente - RH' ? (
          <ContainerUser
            onClick={() => handlerModalRH()}
            w="22%"
          >
            <img src={values.avatar} className="img" />
            <User_name>{values?.user_name}</User_name>
          </ContainerUser>
        ) : (
          <ContainerUser w="22%">
            <img src={values.avatar} className="img" />
            <User_name>{values?.user_name}</User_name>
          </ContainerUser>
        )}

        <ContainerQntHours>
          {values?.hour_quantity}hr
        </ContainerQntHours>

        <ContainerProject w="18%">
          <Text>{values.project_name}</Text>
        </ContainerProject>

        <ContainerLaunch_date w='17%'>
          {formatDate(values.launch_date)}
        </ContainerLaunch_date>

        <ContainerStatus>
          {values.status_id === 1 ? (
            <Badge bg="#FFAE0026" color="#FFAE00" width="200px">
              {values.status_name}
            </Badge>
          ) : values.status_id === 2 ? (
            <Badge bg="#FFAE0026" color="#FFAE00" width="200px">
              {values.status_name}
            </Badge>
          ) : values.status_id === 3 ? (
            <Badge bg="#0066FF26" color="#0066FF" width="200px">
              {values.status_name}
            </Badge>
          ) : values.status_id === 4 ? (
            <Badge bg="#1ECB4F26" color="#1ECB4F" width="200px">
              {values.status_name}
            </Badge>
          ) : values.status_id === 5 ? (
            <Badge bg="#1ECB4F" color="#FFF" width="200px">
              {values.status_name}
            </Badge>
          ) : values.status_id === 6 ? (
            <Badge bg="#FF354126" color="#FF3541" width="200px">
              {values.status_name}
            </Badge>
          ) : (
            ""
          )}
        </ContainerStatus>
      </Main>
    </>
  );
};

export default Shelf;
