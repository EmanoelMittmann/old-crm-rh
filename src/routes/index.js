import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../components/pages/Login"
import Home from "../components/pages/Home"
import PrivateRoute from './PrivateRoute';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
            </Switch>
            <Switch>
                <PrivateRoute path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;