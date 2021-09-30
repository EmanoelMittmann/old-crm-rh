import React from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login'

import api from '../../../api/api';

import DarkButton from '../../atoms/Buttons/DarkButton/style.js'
import teamLogin from '../../../assets/teamLogin.svg'
import {ContainerLogin, Column1, Column2, ContainerLogo, ImgTeam, TitleLogin} from './style'
import LogoUbistart from '../../../components/atoms/LogoUbistart'
import { loggingIn } from "../../../redux/actions"



export const Login = () => {
    const dispatch = useDispatch()
    let history = useHistory();

     const accessLogin = async (googleData) => {

      const responseAuth = await api({
         method:"post",
         url:'/auth',
         data: {
         token_id: googleData.tokenId,
         access_token: googleData.accessToken,
         google_id: googleData.googleId,
         google_email: googleData.profileObj.email,
        }}); 

        const responseBack = true
        
        const authData ={
            googleData: googleData,
            token: responseAuth.data.token,
            responseBack: true,
       }

      
        if(responseBack){
            dispatch(loggingIn(authData));
            history.push("/home");
        }

    } 

    return (
        <ContainerLogin>
            <Column1>
                <ContainerLogo>
                    <LogoUbistart width="200px" margin="0 0 3em 0"/>
                </ContainerLogo>
                <ImgTeam src={teamLogin} alt="Comunicação entre o time" />
            </Column1>
            <Column2>
            <TitleLogin>Faça seu login</TitleLogin>
                <GoogleLogin
                    clientId="315430315500-t5r6lcd2f9ma1ahlbdvuk9v1jf7mus0o.apps.googleusercontent.com"
                    render={renderProps => (
                        <DarkButton width="350px" height="55px" onClick={renderProps.onClick
                        } disabled={renderProps.disabled} >Entrar</DarkButton>
                    )}
                    buttonText="Logar"
                    onSuccess={(googleData) => accessLogin(googleData)}
                    onFailure={(googleData) => accessLogin(googleData)}
                    />
            </Column2>
            
        </ContainerLogin>
    )
}

export default Login