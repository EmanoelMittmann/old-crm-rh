import React, { useState } from 'react'
import { formatDate } from '../../utils/formatDate'
import { ReactComponent as OptionsIcon } from '../../../assets/icons/options.svg'
import { 
  Main, 
  HoursListOptions,
  StatusHoursExtra, 
  ContainerCodigo, 
  ContainerDataIntial, 
  ContainerDataFinal, 
  ContainerDataLancament, 
  ContainerProject, 
  ContainerIconOptions 
} from './style'
import MenuOptionsEditProject from '../../atoms/MenuOptionsEditProject';

export function OvertimeListItem({ data }) {
  const [optionClicked, setOptionClicked] = useState();
  const [menuOptionsisClicked, setMenuOptionsisClicked] = useState(false);
  const transformColor = (status) => {
    const colorBg = status === 1 ? "#fff3d9"
      : status === 2 ? "#fff3d9"
        : status === 4 ? "#ddf7e5"
          : status === 5 ? "#1ECB4F" :
            "#FFE1E3"
    const colortext = status === 1 ? "#FFAE00"
      : status === 2 ? "#FFAE00"
        : status === 4 ? "#1ECB4F"
          : status === 5 ? "#FFFFFF"
            : " #FF3541"
return [colorBg, colortext]
}

  const menuOptionsClicked = (extra_hours_status_id
) => {
    setMenuOptionsisClicked(!menuOptionsisClicked);
    setOptionClicked(extra_hours_status_id
);
  };


console.log("Dados", data);
  return (
    data ? data.map((item, index) =>
      <Main key={index}>
        <ContainerCodigo>
          {item.id}
        </ContainerCodigo>
        <ContainerDataIntial>
          {item.type === 'BY_DATE'
            ? formatDate(new Date(item.launch_date), { timeZone: 'UTC' })
            : `${formatDate(new Date(item.launch_date), { timeZone: 'UTC' })}`
          }
        </ContainerDataIntial>
        <ContainerDataFinal>
          {item.type === 'BY_DATE'
            ? formatDate(new Date(item.end_date), { timeZone: 'UTC' })
            : `${formatDate(new Date(item.end_date), { timeZone: 'UTC' })}`
          }
        </ContainerDataFinal>

        <ContainerDataLancament>
          {item.type === 'BY_DATE'
            ? formatDate(new Date(item.launch_date), { timeZone: 'UTC' })
            : `${formatDate(new Date(item.launch_date), { timeZone: 'UTC' })}`
          }
        </ContainerDataLancament>
        <ContainerProject>
          {item.project.name}
        </ContainerProject>
        <StatusHoursExtra bg={transformColor(item.status.id)[0]} text={transformColor(item.status.id)[1]}>
          {item.status.name}
        </StatusHoursExtra>
        <HoursListOptions
          optionsColor={
            item.id === optionClicked && menuOptionsisClicked
              ? '#407BFF'
              : '#B7BDC2'
          }
        >
          <ContainerIconOptions
            onClick={() => menuOptionsClicked(item.id)}>

          </ContainerIconOptions>
          <OptionsIcon/>
        </HoursListOptions>
        {menuOptionsisClicked && item.id === optionClicked && (
          <MenuOptionsEditProject
            positionMenu="13px"
            firstOptionDescription="Detalhes"
            padding="0.3em 0.5em 0.3em 1.7em"
            id={optionClicked}
          />
        )}
      </Main >
    ) : <Main>Loading...</Main>
  )
}
