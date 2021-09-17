import React from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login'
import axios from 'axios'

import DarkButton from '../../atoms/DarkButton/style'
import teamLogin from '../../../assets/teamLogin.svg'
import {ContainerLogin, Column1, Column2, ContainerLogo, ImgTeam, TitleLogin} from './style'
import LogoUbistart from '../../../components/atoms/LogoUbistart'
import { loggingIn } from "../../../redux/actions"


export const Login = () => {
    const dispatch = useDispatch()
    let history = useHistory();

    const Login = async (googleData) => {
        //Sending the data
        // const responseAuth = await axios.post('localhost:3333/auth', {
        //      tokenId: googleData.tokenId,
        //      accessToken: googleData.accessToken,
        //      googleId: googleData.googleId,
        //      googleEmail: googleData.profileObj.email,
        // });

        const responseAuth = true;
        const authData ={
            googleData: googleData.tokenId,
            responseAuth: responseAuth,
        }
        
        if(responseAuth){
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
                        <DarkButton width="350px" onClick={renderProps.onClick
                        } disabled={renderProps.disabled} >Entrar</DarkButton>
                    )}
                    buttonText="Logar"
                    onSuccess={(googleData) => Login(googleData)}
                    onFailure={(googleData) => Login(googleData)}
                    />
            </Column2>
            
        </ContainerLogin>
    )
}

export default Login