import React, { useEffect, useRef, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { ReactComponent as OptionsIcon } from "../../../assets/icons/options.svg";
import {
  Main,
  HoursListOptions,
  StatusHoursExtra,
  ContainerCodigo,
  ContainerDataIntial,
  ContainerDataFinal,
  ContainerProject,
  ContainerIconOptions,
  ContainerQntHours,
} from "./style";
import MenuOptionsEditProject from "../../atoms/MenuOptionsEditProject";
import { useHistory } from "react-router-dom";

export function OvertimeListItem({ item }) {
  const [optionClicked, setOptionClicked] = useState();
  
  const [menuOptionsisClicked, setMenuOptionsisClicked] = useState(false);
  const history = useHistory();

  const modalRef = useRef();
  const buttonRef = useRef();

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
  };

  const handlerOutside = function (e) {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setMenuOptionsisClicked(false)
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown',handlerOutside)
    return() => {
      document.removeEventListener('mousedown',handlerOutside)
    }
  },[])

  return (
    <Main key={item.id}>
      <ContainerCodigo>{item.id}</ContainerCodigo>
      <ContainerDataIntial>
        {item.type === "BY_DATE"
          ? formatDate(new Date(item.launch_date), { timeZone: "UTC" })
          : `${formatDate(new Date(item.launch_date), { timeZone: "UTC" })}`}
      </ContainerDataIntial>
      <ContainerDataFinal>
        {item.end_date
          ? formatDate(new Date(item.end_date), { timeZone: "UTC" })
          : `${formatDate(new Date(item.launch_date), { timeZone: "UTC" })}`}
      </ContainerDataFinal>

      <ContainerQntHours>{item.hour_quantity}hr</ContainerQntHours>

      <ContainerProject>{item.project.name}</ContainerProject>
      <StatusHoursExtra
        bg={transformColor(item.status.id)[0]}
        text={transformColor(item.status.id)[1]}
      >
        {item.status.name}
      </StatusHoursExtra>
      <HoursListOptions
        optionsColor={
          menuOptionsisClicked
            ? "#407BFF"
            : "#B7BDC2"
        }
      >
        <ContainerIconOptions>
          <OptionsIcon
            onClick={() => menuOptionsClicked(item.id)}
            ref={buttonRef}
          />
        </ContainerIconOptions>
      </HoursListOptions>
      {menuOptionsisClicked && (
        <MenuOptionsEditProject
          positionMenu="0"
          ref={modalRef}
          firstOptionDescription="Detalhes"
          firstChosenOption={() => history.push(`DetailsRelease/${item.id}`)}
          padding="10px 0px 0px 10px"
          id={optionClicked}
        />
      )}
    </Main>
  );
}
