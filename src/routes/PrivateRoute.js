import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';


import { templates, noTemplate } from "./PagesConfig"
import { PagesTemplate } from '../components/templates/PagesTemplate/PagesTemplate';
import { LocalStorageKeys } from '../settings/LocalStorageKeys';


const PrivateRoute = ({ component: Component, id, ...rest }) => {
  const [template, setTemplate] = useState({});
  const token = JSON.parse(localStorage.getItem(LocalStorageKeys.TOKEN));
  const path = rest.path;
  const { permissions } = JSON.parse(localStorage.getItem('@UbiRH/USER'))

  if(!permissions.includes(1)){
    permissions.push(1)
  }

  if(!permissions.includes(1)){
    permissions.push(1)
  }
  
  function handleTemplate(path) {
    return templates.find((obj) => {
      return obj.path === path;
    });
  }

  useEffect(() => {
    const result = handleTemplate(path);
    result ? setTemplate(result) : setTemplate(noTemplate);
  }, [path, setTemplate]);

  return (
    <Route
      {...rest}
      render={(props) =>
        token && permissions.includes(id) ? (
          <PagesTemplate template={template}>
            <Component {...props} />
          </PagesTemplate>
        ) : (
          !permissions.includes(id) ? <Redirect to={{ pathname: '/home', state: { from: props.location } }} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;