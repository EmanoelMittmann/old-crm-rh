import React, { useState } from "react";
import {
  Main,
  ContainerLaunch_date,
  ContainerProject,
  Text,
  ContainerUser,
  ContainerStatus,
  ListOptions,
} from "./style";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { Status } from "../../organisms/DetailsRelease/status";
import { ContainerIconOptions } from "../ProfessionalsListItem/style";
import { ReactComponent as OptionsIcon } from "../../../assets/icons/options.svg";
import MenuOptionsEditProject from "../../atoms/MenuOptionsEditProject";

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

  const menuOptionsClicked = () => {
    setMenuOptionsisClicked(!menuOptionsisClicked);
    
  };

  return data ? (
    data.map((values, index) => (
      <Main key={index}>
        <ContainerUser to="ApprovalIsTechLead/:id">
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
        <ListOptions
          optionsColor={
            values === optionClicked && menuOptionsisClicked
              ? "#407BFF"
              : "#B7BDC2"
          }
        >
          <ContainerIconOptions
            onClick={() => menuOptionsClicked(values)}>
            <OptionsIcon />
          </ContainerIconOptions>
        </ListOptions>
        {menuOptionsisClicked && values === optionClicked && (
          <MenuOptionsEditProject
            positionMenu="13px"
            firstOptionDescription="Aprovação"
            firstChosenOption={() => history.push(`ApprovalIsTechLead/:id${values}`)}
            padding="10px"
            id={optionClicked}
          />
        )}
      </Main>
    ))
  ) : (
    <Main>Loading...</Main>
  );
}
