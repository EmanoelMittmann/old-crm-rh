import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';

import {
    HomeIcon,
    JobIcon,
    ProjectsIcon,
    OvertimeIcon,
    InvoiceIcon,
    ReportsIcon,
    ServiceOrdersIcon,
    SettingsIcon
} from '../../atoms/icons/NavIcons/index'
import {
    Nav,
    ActiveIconContainer,
    ActiveIcon
} from './style.js'
import {
    menuItemClicked,
    showItemDescription,
    hideItemDescription
} from "../../../redux/actions/index"

const NavHome = () => {

    const state = useSelector(state => state);
    let history = useHistory();
    const dispatch = useDispatch();
    let location = useLocation();

    const MenuItemClickHandler = (id) => {
        dispatch(menuItemClicked(id));

        id === 1 && history.push("/home");
        id === 2 && history.push("/job");
        id === 3 && history.push("/projects");
        id === 4 && history.push("/overtime");
        id === 5 && history.push("/invoice");
        id === 6 && history.push("/reports");
        id === 7 && history.push("/serviceOrders");
        id === 8 && history.push("/settings/job");
    }

    const MenuItemOnMouseOverHandler = (id) => {
        dispatch(showItemDescription(id));
    }

    const MenuItemOnMouseOutHandler = (id) => {
        dispatch(hideItemDescription(id));
    }

    return(
        <Nav>
            { state.headerMenu.map((menuItem) => (
                    <ActiveIconContainer 
                    onClick={() => MenuItemClickHandler(menuItem.id)}
                    onMouseOver={() => MenuItemOnMouseOverHandler(menuItem.id)}
                    onMouseOut={() => MenuItemOnMouseOutHandler(menuItem.id)}
                    >
                        {menuItem.id === 1 && <HomeIcon/>}
                        {menuItem.id === 2 && <JobIcon/>}
                        {menuItem.id === 3 && <ProjectsIcon/>}
                        {menuItem.id === 4 && <OvertimeIcon/>}
                        {menuItem.id === 5 && <InvoiceIcon/>}
                        {menuItem.id === 6 && <ReportsIcon/>}
                        {menuItem.id === 7 && <ServiceOrdersIcon/>}
                        {menuItem.id === 8 && <SettingsIcon/>}

                        {menuItem.status === true && <ActiveIcon/>}      
                    </ActiveIconContainer>
            ))
            }
        </Nav>
    )


}

export default NavHome;


