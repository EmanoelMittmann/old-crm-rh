import React, { forwardRef } from "react";
import { MenuOptionsContainer, OptionsMenu, OptionsMenuItem } from "./style.js";

const MenuOptionsEditProject = forwardRef(
  ({
    id,
    firstChosenOption,
    firstOptionDescription,
    secondOptionDescription,
    secondChosenOption,
    positionMenu,
    padding,
  },ref) => {
    return (
      <MenuOptionsContainer ref={ref}>
        <OptionsMenu positionMenu={positionMenu}>
          <OptionsMenuItem
            padding={padding}
            onClick={() => firstChosenOption(id)}
          >
            {firstOptionDescription}
          </OptionsMenuItem>
          <OptionsMenuItem padding={padding} onClick={secondChosenOption}>
            {secondOptionDescription}
          </OptionsMenuItem>
        </OptionsMenu>
      </MenuOptionsContainer>
    );
  }
);

export default MenuOptionsEditProject;
