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
  const [version, setVersion] = useState('')

  const handleSign = (user) => {
    accessLogin(user);
  };
  const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const getVersion = async() => {
    const { data } = await api({
      method:'GET',
      url:'/version'
    })
    setVersion(data.version)
  }

  const accessLogin = async (googleData) => {
    const decodeJwt = jwt_decode(googleData.credential);

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
        client_id:process.env.REACT_APP_CLIENT_ID,
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

  useEffect(() => {
    getVersion()
  },[])
  
  return (
    <ContainerLogin>
      <Column1>
        <ContainerLogo>
          <LogoUbistart width="200px" margin="0 0 3em 0" />
        </ContainerLogo>
        <ImgTeam src={teamLogin} alt="Comunicação entre o time" />
        <h4 className='version'>Version: {version}</h4>
      </Column1>
      <Column2>
        <TitleLogin>Faça seu login</TitleLogin>

        {!user && <div ref={buttonref}></div>}
      </Column2>
    </ContainerLogin>
  );
};

export default Login;
