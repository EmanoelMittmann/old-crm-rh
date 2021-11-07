import React from 'react'
import LogoUbistart from '../../atoms/LogoUbistart'
import {HeaderHome, ContainerNav} from './style'
import MainNav from '../../molecules/MainNav'
import ProfileInfo from '../../molecules/ProfileInfo'

const Header = () => {
    return (
        <HeaderHome>
            <LogoUbistart width="120px" margin="0 0 0 4em"/>
            <ContainerNav>
                <MainNav/>
            </ContainerNav>
            <ProfileInfo/>
        </HeaderHome>
    )
}

export default Header;
