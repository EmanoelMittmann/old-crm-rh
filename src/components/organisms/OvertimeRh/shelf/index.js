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
import api from "../../../../api/api";
import ApprovalHoursAdm from "../../../molecules/ModalApprovalHoursAdm";


const Shelf = ({ values, index, getHoursPending }) => {
  const [modalIsVisibleRH, setModalIsVisibleRH] = useState(false)
  const [admApproveData, setAdmApproveData] = useState();


  const handlerModalRH = async () => {
    try {
      const { data } = await api({
        method: "GET",
        url: `/extrasHoursReleases/details/${values.id}`,
      });
      setAdmApproveData(data);
      setModalIsVisibleRH(prev => !prev)
    } catch (error) {
      console.error(error);
    }
    return
  };

  return (
    <>
      {modalIsVisibleRH && (
        <ApprovalHoursAdm
          id={values.id}
          setModalIsVisibleRH={setModalIsVisibleRH}
          getHoursPending={getHoursPending}
          admApproveData={admApproveData} />
      )}
      <Main key={index} padding="2em 0 0 2em">
        {values.status_name === 'Pendente - RH' ? (
          <ContainerUser
            onClick={() => handlerModalRH()}
            w="22.5%"
          >
            <img src={values.avatar} className="img" />
            <User_name>{values?.user_name}</User_name>
          </ContainerUser>
        ) : (
          <ContainerUser w="22.5%">
            <img src={values.avatar} className="img" />
            <User_name>{values?.user_name}</User_name>
          </ContainerUser>
        )}
        <ContainerQntHours>
          {values?.hour_quantity}hr
        </ContainerQntHours>
        <ContainerProject w="19%">
          <Text>{values.project_name}</Text>
        </ContainerProject>
        <ContainerLaunch_date w='17%'>
          {(values.launch_date.substr(0, 10).split('-').reverse().join('/'))}
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
            <Badge bg="#1ECB4F26" color="#1ECB4F" width="200px">
              {values.status_name}
            </Badge>
          ) : values.status_id === 4 ? (
            <Badge bg="#1ECB4F" color="#FFF" width="200px">
              {values.status_name}
            </Badge>
          ) : values.status_id === 5 ? (
            <Badge bg="#FF354126" color="#FF3541" width="200px">
              {values.status_name}
            </Badge>
          ) : ( ""
          )}
        </ContainerStatus>
      </Main>
    </>
  );
};
export default Shelf;
