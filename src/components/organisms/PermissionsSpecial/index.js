import React from "react";
import SecondaryText from "../../atoms/SecondaryText/style";
import Shelf from "./Shelf";
import {
  ContainerAbsolute,
  ContainerCheckBox,
  ContainerCheckBoxDuo,
  ContainerGeneral,
} from "./style";
import { SelectsItens } from "./style";

export const PermissionsSpecial = ({ permissions }) => {
  const general = permissions.filter((prop) => prop.group_name === "GENERAL");
  const special = permissions.filter((prop) => prop.group_name === "SPECIAL").slice(0,5);
  const special2 = permissions.filter((prop) => prop.group_name === "SPECIAL").slice(5,9)
  return (
    <ContainerGeneral>
        <ContainerCheckBox direction='row' gap='55em'>
          <h4>Especiais</h4>
          <h4>Gerais</h4>
        </ContainerCheckBox>
      <ContainerAbsolute>
        <ContainerCheckBox>
          {special?.map((item) => (
            <Shelf key={item.id} data={item} />
          ))}
        </ContainerCheckBox>
        <ContainerCheckBox >
          {special2?.map((item) => (
            <Shelf key={item.id} data={item} />
          ))}
        </ContainerCheckBox>
        <ContainerCheckBox >
          {general?.map((item) => (
            <Shelf key={item.id} data={item} />
          ))}
        </ContainerCheckBox>
      </ContainerAbsolute>
    </ContainerGeneral>
  );
};
