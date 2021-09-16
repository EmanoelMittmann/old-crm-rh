import React from 'react'
import DarkButton from '../../atoms/DarkButton/style'
import teamLogin from '../../../assets/teamLogin.svg'
import {ContainerLogin, Column1, Column2, ContainerLogo, ImgTeam, TitleLogin} from './style'
import LogoUbistart from '../../../components/atoms/LogoUbistart'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { loggingIn } from "../../../redux/actions"


export const Login = () => {
    const dispatch = useDispatch()
    let history = useHistory();

    const Login = async (googleData) => {
        //Sending the data
        // const token = await axios.post('', { token: googleData.tokenId});
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        
        if(token){
            dispatch(loggingIn(token));
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
                    onSuccess={(googleData) => Login()}
                    onFailure={(googleData) => Login()}
                    />
            </Column2>
            
        </ContainerLogin>
    )
}

export default Login