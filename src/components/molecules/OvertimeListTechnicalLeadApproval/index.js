import React, { useState } from "react";
import {
  Main,
  ContainerLaunch_date,
  ContainerProject,
  Text,
  ContainerUser,
  ContainerStatus,
} from "./style";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { Status } from "../../organisms/DetailsRelease/status";

export function OvertimeListTechnicalLeadApproval({ data }) {
  const [optionClicked, setOptionClicked] = useState();
  const [menuOptionsisClicked, setMenuOptionsisClicked] = useState(false);
  const history = useHistory();
  const transformColor = (status) => {
    const colorBg =
      status === 1
        ? "#fff3d9"
        : status === 2
        ? "#fff3d9"
        : status === 4
        ? "#ddf7e5"
        : status === 5
        ? "#1ECB4F"
        : "#FFE1E3";
    const colortext =
      status === 1
        ? "#FFAE00"
        : status === 2
        ? "#FFAE00"
        : status === 4
        ? "#1ECB4F"
        : status === 5
        ? "#FFFFFF"
        : " #FF3541";
    return [colorBg, colortext];
  };

  const menuOptionsClicked = (extra_hours_status_id) => {
    setMenuOptionsisClicked(!menuOptionsisClicked);
    setOptionClicked(extra_hours_status_id);
  };

  return data ? (
    data.map((values, index) => (
      <Main key={index}>
        <ContainerUser>
            <img src={values.avatar} className='img'/>
            <Text>{values.user_name}</Text>
        </ContainerUser>
        <ContainerProject>
          <Text>{values.name_project}</Text>
        </ContainerProject>
        <ContainerLaunch_date>
          {formatDate(values.launch_date)}
        </ContainerLaunch_date>
        <ContainerStatus>
          <Status data={values}/>
        </ContainerStatus>
      </Main>
    ))
  ) : (
    <Main>Loading...</Main>
  );
}
