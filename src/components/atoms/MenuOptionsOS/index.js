import React, { forwardRef } from "react";
import { useState } from "react";
import { MenuOptionsContainer, OptionsMenu, OptionsMenuItem } from "./style.js";

const MenuOptionsOS = forwardRef(({
  id,
  firstChosenOption,
  firstOptionDescription,
  secondOptionDescription,
  secondChosenOption,
  positionMenu,
  padding,
  thirdChosenOption,
  thirdOptionDescription,
  height,
  disabled
},ref) => {
  
  console.log('disabled: ', disabled);

  return (
    <MenuOptionsContainer >
      <OptionsMenu positionMenu={positionMenu} height={height} ref={ref}> 
        <OptionsMenuItem 
          padding={padding}
          onClick={() => firstChosenOption(id)}
          disabled={false}
        >
          {firstOptionDescription}
        </OptionsMenuItem>
        <OptionsMenuItem padding={padding} onClick={secondChosenOption} disabled={disabled}>
          {secondOptionDescription}
        </OptionsMenuItem>

        {thirdOptionDescription && (
          <OptionsMenuItem padding={padding} onClick={thirdChosenOption} disabled={disabled}>
            {thirdOptionDescription}
          </OptionsMenuItem>
        )}
      </OptionsMenu>
    </MenuOptionsContainer>
  );
}) 

export default MenuOptionsOS;
