import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import Login from "../components/pages/Login";
import Home from "../components/pages/Home";
import Job from "../components/pages/Job";
import Projects from "../components/pages/Projects"
import Overtime from '../components/pages/Overtime'
import Invoice from '../components/pages/Invoice'
import Reports from '../components/pages/Reports'
import ServiceOrders from '../components/pages/ServiceOrders'
import Settings from '../../src/components/pages/Settings';
import LoremUm from '../components/pages/LoremUm';
import LoremDois from '../components/pages/LoremDois';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
            </Switch>
            <Switch>
                <PrivateRoute path="/home" component={Home}/>
            </Switch>
            <Switch>
                <Route exact path="/job" component={Job}/>
            </Switch>
            <Switch>
                <Route exact path="/projects" component={Projects}/>
            </Switch>
            <Switch>
                <Route path="/overtime" component={Overtime}/>
            </Switch>
            <Switch>
                <Route path="/invoice" component={Invoice}/>
            </Switch>
            <Switch>
                <Route path="/reports" component={Reports}/>
            </Switch> 
             <Switch>
                <Route path="/serviceOrders" component={ServiceOrders}/>
            </Switch>
            <Switch>
                <Route path="/settings/job" component={Settings}/>
            </Switch>
            <Switch>
                <Route path="/settings/loremUm" component={LoremUm}/>
            </Switch>
            <Switch>
                <Route path="/settings/loremDois" component={LoremDois}/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes;