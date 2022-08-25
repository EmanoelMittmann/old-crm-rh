import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';

import { templates, noTemplate } from './PagesConfig';
import { PagesTemplate } from '../components/templates/PagesTemplate/PagesTemplate';
import { LocalStorageKeys } from '../settings/LocalStorageKeys';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [template, setTemplate] = useState({});
  const token = JSON.parse(localStorage.getItem(LocalStorageKeys.TOKEN));
  const path = rest.path;

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
        token ? (
          <PagesTemplate template={template}>
            <Component {...props} />
          </PagesTemplate>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
