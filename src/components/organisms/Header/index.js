import React from 'react'
import LogoUbistart from '../../atoms/LogoUbistart'
import {HeaderHome, ContainerNav} from './style'
import MainNav from '../../molecules/MainNav'
import ProfileInfo from '../../molecules/ProfileInfo'

import { LocalStorageKeys } from '../../../settings/LocalStorageKeys'

const Header = () => {
    const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER))
    return (
        <HeaderHome>
            <LogoUbistart width="120px" margin="0 0 0 4em"/>
            <ContainerNav>
                <MainNav/>
            </ContainerNav>
            <ProfileInfo photo={user.avatar}/>  
        </HeaderHome>
    )
}

export default Header;
