import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { LocalStorageKeys } from '../settings/LocalStorageKeys';
import jwt_decode from 'jwt-decode';

const RouteVerifLoginToken = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const token =
    JSON.parse(localStorage.getItem(LocalStorageKeys.TOKEN)) || null;
  const path = rest.path;

  useEffect(() => {
    token && history.push('/home');
  }, [path]);

  return <Route {...rest} component={Component} />;
};

export default RouteVerifLoginToken;
