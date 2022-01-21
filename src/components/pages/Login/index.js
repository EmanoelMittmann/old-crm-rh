import React, { useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login'

import DarkButton from '../../atoms/Buttons/DarkButton/style.js'
import teamLogin from '../../../assets/teamLogin.svg'
import {ContainerLogin, Column1, Column2, ContainerLogo, ImgTeam, TitleLogin} from './style'
import LogoUbistart from '../../../components/atoms/LogoUbistart'
import { loggingIn } from "../../../redux/actions"

export const Login = () => {
    const dispatch = useDispatch()
    let history = useHistory()

     const accessLogin = async (googleData) => {
        const api = axios.create({
            baseURL: 'http://localhost:3333',
            headers:{ 
                "Content-Type":"application/json",
                }
        })

        try{
            const responseAuth = await api({
                method:"post",
                url:'/auth',
                data: {
                    google_email: googleData.profileObj.email,
                    google_id: googleData.googleId,
                    access_token: googleData.accessToken,
               }}) 

                dispatch(loggingIn({
                    googleData: googleData,
                    token: responseAuth.data.token,
                    user: responseAuth.data.data[0],
                    responseValidToken: true,
                }))

                const user_type = responseAuth.data.data[0].user_type_id
                user_type === 1 ? history.push("/home") : history.push("/timeSending")


        }catch(error){
            console.log(error.message)
        }
        
    } 

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@UbiRH/token'))

        function isAdmin() {
            const user = JSON.parse(localStorage.getItem('@UbiRH/user'))

            if(user.user_type_id === 1 ) return history.push('/home') 
            if(token && user.user_type_id === 2 ) return history.push('/timeSending') 
        }

        if(token) return isAdmin() 
        return
      
    }, [history])


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
                        <DarkButton fontSize="16px" width="350px" height="55px" onClick={renderProps.onClick
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