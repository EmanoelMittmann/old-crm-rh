import React, { useEffect } from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { toast } from 'react-toastify'
import { LocalStorageKeys } from '../../../settings/LocalStorageKeys'
import { userTypes } from '../../../models/userTypes'
import { loggingIn } from "../../../redux/actions"

import DarkButton from '../../atoms/Buttons/DarkButton/style.js'
import ExpiresToast from '../../atoms/Toast/ExpiresToast.js'
import LogoUbistart from '../../../components/atoms/LogoUbistart'
import teamLogin from '../../../assets/teamLogin.svg'

import {ContainerLogin, Column1, Column2, ContainerLogo, ImgTeam, TitleLogin} from './style'

export const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

     const accessLogin = async (googleData) => {
        const api = axios.create({
            baseURL: 'http://localhost:3333',
            headers:{ 
                "Content-Type":"application/json",
                }
        })

        api.interceptors.response.use((config) => {
            return config
        }, (error) => toast.error(error.message))

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
                
                const expires = new Date(responseAuth.data.token.expires_at).toLocaleString({ timeZone: 'UTC' })
                toast.warn(<ExpiresToast date={expires} />)

                const user_type = responseAuth.data.data[0].user_type_id
                history.push(user_type === userTypes.ADMIN ? "/home" : "/timeSending")

        } catch(error) {
        
        }
    } 

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem(LocalStorageKeys.TOKEN))

        function isAdmin() {
            const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER))
            history.push(user.user_type_id === userTypes.ADMIN ? "/home" : "/timeSending")
        }

        if(token) return isAdmin() 
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
                        <DarkButton 
                            fontSize="16px" 
                            width="350px" 
                            height="55px" 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                        >Entrar</DarkButton>
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