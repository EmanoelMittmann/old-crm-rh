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
  const history = useHistory();

  return data ? (
    data.map((values, index) => (
      <Main key={index}>
        <ContainerUser onClick={() => history.push(`ApprovalIsTechLead/${values.id}`)}>
          <img src={values?.avatar} className='img' />
          <User_name>{values?.user_name}</User_name>
        </ContainerUser>
        <ContainerProject>
          <Text>{values.name_project}</Text>
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
