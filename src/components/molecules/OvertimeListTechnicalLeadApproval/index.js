import React, { useState } from "react";
import {
  Main,
  ContainerLaunch_date,
  ContainerProject,
  Text,
  ContainerUser,
  ContainerStatus,
  User_name,
} from "./style";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { Status } from "../../organisms/DetailsRelease/status";

  export function OvertimeListTechnicalLeadApproval({data}) {
  const [approvalTechLead, setApprovalTechLead] = useState('')
  const history = useHistory();

const handleApproval =() =>{}
  

  return data ? (
    data.map((values, index) => (
      console.log("values: ", values.status.name),
      <Main key={index}>
        {values.status.name === "Pendente - Líder Técnico" ?
        <ContainerUser onClick={() => history.push(`ApprovalIsTechLead/${values.id}`)}>
          <img src={values.user.avatar} className='img' />
          <User_name>{values?.user.name}</User_name>
        </ContainerUser>
          : <ContainerUser>
            <img src={values.user.avatar} className='img' />
            <User_name>{values?.user.name}</User_name>
          </ContainerUser>
          }
        <ContainerProject>
          <Text>{values.project.name}</Text>
        </ContainerProject>
        <ContainerLaunch_date>
          {formatDate(values.launch_date)}
        </ContainerLaunch_date>
        <ContainerStatus>
          <Status data={values} />
        </ContainerStatus>
      </Main>
    ))
  ) : (
    <Main>Loading...</Main>
  );
}
