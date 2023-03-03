import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ActiveIcon, ActiveIconContainer } from "../style";
import {
    menuItemClicked,
    showItemDescription,
    hideItemDescription,
  } from '../../../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";

export const Modules = ({id,route,children}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  return (
    <>
      <ActiveIconContainer
        onClick={() => dispatch(menuItemClicked(id))}
        onMouseOver={() => dispatch(showItemDescription(id))}
        onMouseOut={() => dispatch(hideItemDescription(id))}
      >
        <Link to={route}>
            {children}
        </Link>

        {location.pathname === route && <ActiveIcon />}
      </ActiveIconContainer>
    </>
  );
};

