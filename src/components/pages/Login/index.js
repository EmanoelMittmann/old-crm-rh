import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';

import DarkButton from '../../atoms/Buttons/DarkButton/style.js';
import teamLogin from '../../../assets/teamLogin.svg';
import {
  ContainerLogin,
  Column1,
  Column2,
  ContainerLogo,
  ImgTeam,
  TitleLogin,
} from './style';
import jwt_decode from 'jwt-decode';
import LogoUbistart from '../../../components/atoms/LogoUbistart';
import { loggingIn } from '../../../redux/actions';
import { useEffect } from 'react';

export const Login = () => {
  const buttonref = useRef();
  const dispatch = useDispatch();
  let history = useHistory();
  const state = useSelector((state) => state.authentication);
  const [user, setUser] = useState(false);

  const handleSign = (user) => {
    accessLogin(user);
  };

  const accessLogin = async (googleData) => {
    const decodeJwt = jwt_decode(googleData.credential);
    const api = axios.create({
      baseURL: 'https://ubistart-rh-backend.herokuapp.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    try {
      const responseAuth = await api({
        method: 'post',
        url: '/auth',
        data: {
          google_email: decodeJwt.email,
          google_id: decodeJwt.sub, // -> min code
          access_token: googleData.credential, // -> jwt
        },
      });
      dispatch(
        loggingIn({
          googleData: googleData,
          token: responseAuth.data.token,
          responseValidToken: true,
        })
      );
      history.push('/home');
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(process.env.REACT_APP_URL_API);
  const handlePushCredentialInGoogle = () => {
    try {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID,
        callback: handleSign,
      });
      window.google.accounts.id.renderButton(buttonref.current, {
        size: 'large',
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !window.google || !buttonref.current) {
      return;
    }
    //1018198549743-sqmjjrkih351agf8du7pn3gk3rv04gli.apps.googleusercontent.com
    //43809446729-7f0a2m81rs1haaksbk0a07i2o9hrjgo7.apps.googleusercontent.com
    handlePushCredentialInGoogle();
  }, [handleSign, window.google, buttonref.current]);

  return (
    <ContainerLogin>
      <Column1>
        <ContainerLogo>
          <LogoUbistart width="200px" margin="0 0 3em 0" />
        </ContainerLogo>
        <ImgTeam src={teamLogin} alt="Comunicação entre o time" />
      </Column1>
      <Column2>
        <TitleLogin>Faça seu login</TitleLogin>

        {!user && <div ref={buttonref}></div>}
        {/* <GoogleLogin
          clientId="1018198549743-sqmjjrkih351agf8du7pn3gk3rv04gli.apps.googleusercontent.com"
          render={(renderProps) => (
            <DarkButton
              fontSize="16px"
              width="350px"
              height="55px"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Entrar
            </DarkButton>
          )}
          buttonText="Logar"
          onSuccess={(googleData) => accessLogin(googleData)}
          onFailure={(googleData) => accessLogin(googleData)}
        /> */}
      </Column2>
    </ContainerLogin>
  );
};

export default Login;
