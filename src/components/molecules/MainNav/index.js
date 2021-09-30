import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'


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

    const MenuItemClickHandler = (id) => {
        dispatch(menuItemClicked(id));

        const routingHandler = route => history.push(route)

        id === 1 && routingHandler("/home");
        id === 2 && routingHandler("/job");
        id === 3 && routingHandler("/projects");
        id === 4 && routingHandler("/overtime");
        id === 5 && routingHandler("/invoice");
        id === 6 && routingHandler("/reports");
        id === 7 && routingHandler("/serviceOrders");
        id === 8 && routingHandler("/settings/job");
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


