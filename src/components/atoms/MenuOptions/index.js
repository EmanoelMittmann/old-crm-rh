import React from "react";
import { MenuOptionsContainer, OptionsMenu, OptionsMenuItem } from "./style.js";

const MenuOptions = ({
  id,
  firstChosenOption,
  firstOptionDescription,
  secondOptionDescription,
  secondChosenOption,
  positionMenu,
  padding,
  thirdChosenOption,
  thirdOptionDescription,
  height
}) => {
  return (
    <MenuOptionsContainer>
      <OptionsMenu positionMenu={positionMenu} height={height}> 
        <OptionsMenuItem
          padding={padding}
          onClick={() => firstChosenOption(id)}
        >
          {firstOptionDescription}
        </OptionsMenuItem>
        <OptionsMenuItem padding={padding} onClick={secondChosenOption}>
          {secondOptionDescription}
        </OptionsMenuItem>
        {thirdOptionDescription && (
          <OptionsMenuItem padding={padding} onClick={thirdChosenOption}>
            {thirdOptionDescription}
          </OptionsMenuItem>
        )}
      </OptionsMenu>
    </MenuOptionsContainer>
  );
};

export default MenuOptions;
