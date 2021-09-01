import React from 'react'
import DarkButton from '../../atoms/DarkButton/style'
import teamLogin from '../../../assets/teamLogin.svg'
import {ContainerLogin, Column1, Column2, ContainerLogo, ImgTeam} from './style'
import LogoUbistart from '../../../components/atoms/LogoUbistart'

export const Login = () => {
    return (
        <ContainerLogin>
            <Column1>
                <ContainerLogo>
                    <LogoUbistart width="200px" margin="0 0 3em 0"/>
                </ContainerLogo>
                <ImgTeam src={teamLogin} alt="Comunicação entre o time" />
            </Column1>
            <Column2>
                <DarkButton width="300px">Logar</DarkButton>
            </Column2>
            
        </ContainerLogin>
    )
}

export default Login