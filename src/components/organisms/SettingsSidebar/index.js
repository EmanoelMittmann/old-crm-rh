import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

import './style.css'
import { Sidebar, SettingsOption } from './style.js'
import { resetFilterStatus, setFilterOrder, setFilterStatus, setSearchName} from '../../../redux/actions'
import Title from '../../atoms/SettingsMenuTitle/style.js'

const SettingsSidebar = () => {
    const dispatch = useDispatch();
    const location = useLocation() 

    const resetFilters = () => {
        dispatch(resetFilterStatus())
        dispatch(setFilterOrder(''))
        dispatch(setFilterStatus('all'))
        dispatch(setSearchName(''))
    }


    return (
        <Sidebar>
                <Title>Cadastros</Title>

                <Link
                to="/job"
                className="settings-menu-link"
                onClick={() => resetFilters()}
                >
                    <SettingsOption 
                    clicked={location.pathname === "/job" ? true : false}
                    >
                       Cargos
                    </SettingsOption>
                </Link>

                <Link
                to="/projectStatus"
                className="settings-menu-link"
                onClick={() => resetFilters()}
                >
                    <SettingsOption
                    clicked={location.pathname === "/projectStatus" ? true : false}
                    >
                        Status do projeto
                    </SettingsOption>
                </Link>

                <Link
                to="/projectType"
                className="settings-menu-link"
                onClick={() => resetFilters()}
                >
                    <SettingsOption
                    clicked={location.pathname === "/projectType" ? true : false}
                    >
                        Tipo de projeto
                    </SettingsOption>
                </Link>

                <Title>Cadastros</Title>

                <Link
                to=""
                className="settings-menu-link"
                onClick={() => resetFilters()}
                >
                    <SettingsOption 
                    clicked={location.pathname === "" ? true : false}
                    >
                       Lorem um
                    </SettingsOption>
                </Link>

                <Link
                to=""
                className="settings-menu-link"
                onClick={() => resetFilters()}
                >
                    <SettingsOption
                    clicked={location.pathname === "" ? true : false}
                    >
                        Lorem dois
                    </SettingsOption>
                </Link>

                <Link
                to=""
                className="settings-menu-link"
                onClick={() => resetFilters()}
                >
                    <SettingsOption
                    clicked={location.pathname === "" ? true : false}
                    >
                        Lorem três
                    </SettingsOption>
                </Link>
        
        </Sidebar>
    )
}

export default SettingsSidebar;

