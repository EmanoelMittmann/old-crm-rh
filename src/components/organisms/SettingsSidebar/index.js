import React from 'react'
import { useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


import { Sidebar, SettingsOption, LinkSettingsMenu } from './style.js'
import { resetFilterStatus, setFilterOrder, setFilterStatus, setSearchName} from '../../../redux/actions'
import Title from '../../atoms/SettingsMenuTitle/style.js'

const SettingsSidebar = () => {
    const dispatch = useDispatch()
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

            <LinkSettingsMenu
                    to="/job"
                    onClick={() => resetFilters()}
                >
                    <SettingsOption 
                        clicked={location.pathname === "/job" ? true : false}
                    >
                       Cargos
                    </SettingsOption>
            </LinkSettingsMenu>

            <LinkSettingsMenu
                    to="/projectStatus"
                    onClick={() => resetFilters()}
                >
                    <SettingsOption
                        clicked={location.pathname === "/projectStatus" ? true : false}
                    >
                        Status do projeto
                    </SettingsOption>
            </LinkSettingsMenu>

            <LinkSettingsMenu
                    to="/projectType"
                    onClick={() => resetFilters()}
                >
                    <SettingsOption
                        clicked={location.pathname === "/projectType" ? true : false}
                    >
                        Tipo de projeto
                    </SettingsOption>
            </LinkSettingsMenu>

        </Sidebar>
    )
}

export default SettingsSidebar

