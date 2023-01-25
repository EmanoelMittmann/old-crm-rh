import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { LocalStorageKeys } from '../../../settings/LocalStorageKeys';
import { userTypes } from '../../../models/userTypes';

import {
  menuItemClicked,
  showItemDescription,
  hideItemDescription,
} from '../../../redux/actions/index';

import {
  HomeIcon,
  JobIcon,
  ProjectsIcon,
  OvertimeIcon,
  InvoiceIcon,
  ReportsIcon,
  ServiceOrdersIcon,
  SettingsIcon,
  CompanyIcon,
} from '../../atoms/icons/NavIcons/index';

import { Nav, ActiveIconContainer, ActiveIcon } from './style.js';

const NavHome = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const isTechLead = useSelector((state) => state.validTechLead)

  const MenuItemClickHandler = (id) => {
    dispatch(menuItemClicked(id));
  };

  const MenuItemOnMouseOverHandler = (id) => {
    dispatch(showItemDescription(id));
  };

  const MenuItemOnMouseOutHandler = (id) => {
    dispatch(hideItemDescription(id));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
    if (user.user_type_id === userTypes.ADMIN) {
      return setIsAdmin(true);
    }
    return;
  }, [isAdmin]);  

  return (
    <Nav>
      {isAdmin ? (
        <>
          <ActiveIconContainer
            onClick={() => MenuItemClickHandler(1)}
            onMouseOver={() => MenuItemOnMouseOverHandler(1)}
            onMouseOut={() => MenuItemOnMouseOutHandler(1)}
          >
            <Link to="/home">
              <HomeIcon />
            </Link>

            {location.pathname === '/home' && <ActiveIcon />}
          </ActiveIconContainer>
          <ActiveIconContainer
            onClick={() => MenuItemClickHandler(2)}
            onMouseOver={() => MenuItemOnMouseOverHandler(2)}
            onMouseOut={() => MenuItemOnMouseOutHandler(2)}
          >
            <Link to="/professionals">
              <JobIcon />
            </Link>
            {location.pathname === '/professionals' && <ActiveIcon />}
            {location.pathname === '/professional' && <ActiveIcon />}
          </ActiveIconContainer>
          <ActiveIconContainer
            onClick={() => MenuItemClickHandler(3)}
            onMouseOver={() => MenuItemOnMouseOverHandler(3)}
            onMouseOut={() => MenuItemOnMouseOutHandler(3)}
          >
            <Link to="/projects">
              <ProjectsIcon />
            </Link>
            {location.pathname === '/projects' && <ActiveIcon />}
            {location.pathname === '/project' && <ActiveIcon />}
          </ActiveIconContainer>
        </>
      ) : (
        <></>
      )}
      <ActiveIconContainer
        onClick={() => MenuItemClickHandler(4)}
        onMouseOver={() => MenuItemOnMouseOverHandler(4)}
        onMouseOut={() => MenuItemOnMouseOutHandler(4)}
      >
        {isAdmin ? (
          <Link to="/overtime">
            <OvertimeIcon />
          </Link>

        )  : isTechLead === true ?  (
            <Link to="/timeIstechLead">
            <OvertimeIcon />
          </Link>

        )  :  (
              <Link to="/timeSending">
          <OvertimeIcon />
        </Link>

        )}
        {location.pathname === '/overtime' && <ActiveIcon />}
        {location.pathname === '/timeIstechLead' && <ActiveIcon />}
        {location.pathname === '/timeSending' && <ActiveIcon />}

      </ActiveIconContainer>
      <ActiveIconContainer
        onClick={() => MenuItemClickHandler(5)}
        onMouseOver={() => MenuItemOnMouseOverHandler(5)}
        onMouseOut={() => MenuItemOnMouseOutHandler(5)}
      >
        {isAdmin ? (
          <Link to="/invoice">
            <InvoiceIcon />
          </Link>
        ) : (
          <Link to="/invoiceSending">
            <InvoiceIcon />
          </Link>
        )}
        {location.pathname === '/invoice' && <ActiveIcon />}
        {location.pathname === '/invoiceSending' && <ActiveIcon />}
      </ActiveIconContainer>
      {isAdmin ? (
        <>
          <ActiveIconContainer
            onClick={() => MenuItemClickHandler(6)}
            onMouseOver={() => MenuItemOnMouseOverHandler(6)}
            onMouseOut={() => MenuItemOnMouseOutHandler(6)}
          >
            <Link to="/reports">
              <ReportsIcon />
            </Link>
            {location.pathname === '/reports' && <ActiveIcon />}
          </ActiveIconContainer>
          <ActiveIconContainer
            onClick={() => MenuItemClickHandler(7)}
            onMouseOver={() => MenuItemOnMouseOverHandler(7)}
            onMouseOut={() => MenuItemOnMouseOutHandler(7)}
          >
            
            <Link to="/serviceOrders">
              <ServiceOrdersIcon />
            </Link>
            {location.pathname === '/serviceOrders' && <ActiveIcon />}
            {location.pathname === '/NewOs' && <ActiveIcon />}
            {location.pathname === '/GenerateOs' && <ActiveIcon />}
          </ActiveIconContainer>
          <ActiveIconContainer
            onClick={() => MenuItemClickHandler(8)}
            onMouseOver={() => MenuItemOnMouseOverHandler(8)}
            onMouseOut={() => MenuItemOnMouseOutHandler(8)}
          >
            <Link to="/job">
              <SettingsIcon />
            </Link>
            {location.pathname === '/job' && <ActiveIcon />}
            {location.pathname === '/projectStatus' && <ActiveIcon />}
            {location.pathname === '/projectType' && <ActiveIcon />}
          </ActiveIconContainer>
          
          <ActiveIconContainer
            onClick={() => MenuItemClickHandler(9)}
            onMouseOver={() => MenuItemOnMouseOverHandler(9)}
            onMouseOut={() => MenuItemOnMouseOutHandler(9)}
          >
            <Link to="/Company">
              <CompanyIcon />
            </Link>
            {location.pathname === '/Company' && <ActiveIcon />}
            {location.pathname === '/Companies' && <ActiveIcon />}
          </ActiveIconContainer>
        </>

      ) : (
        <></>
      )}
    </Nav>
  );
};

export default NavHome;
