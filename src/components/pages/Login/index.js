import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
      const { data } = await api({
        method: 'post',
        url: '/auth',
        data: {
          google_email: decodeJwt.email,
          google_id: decodeJwt.sub,
          access_token: googleData.credential,
        },
      });
      console.log(data);

      dispatch(
        loggingIn({
          googleData: { decodeJwt: decodeJwt, data: data.data[0] },
          token: data.token.token,
          responseValidToken: true,
        })
      );

      history.push('/home');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePushCredentialInGoogle = () => {
    try {
      window.google.accounts.id.initialize({
        client_id:'201717717152-vdd0fl673bflolmondn87qsk286l2fa1.apps.googleusercontent.com',
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
      </Column2>
    </ContainerLogin>
  );
};

export default Login;
