import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import Login from "../components/pages/Login";
import Home from "../components/pages/Home";
import Professionals from "../components/pages/Professionals";
import Projects from "../components/pages/Projects"
import Overtime from '../components/pages/Overtime'
import Invoice from '../components/pages/Invoice'
import Reports from '../components/pages/Reports'
import ServiceOrders from '../components/pages/ServiceOrders'
import Settings from '../../src/components/pages/Settings';
import Status from '../components/pages/Status';
import ProjectType from '../components/pages/ProjectType';
import RegisterProject from '../components/pages/RegisterProject'
import RegisterProfessional from '../components/pages/RegisterProfessional';

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
                <Route exact path="/professionals" component={Professionals}/>
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
                <Route path="/job" component={Settings}/>
            </Switch>
            <Switch>
                <Route path="/projectStatus" component={Status}/>
            </Switch>
            <Switch>
                <Route path="/projectType" component={ProjectType}/>
            </Switch>
            <Switch>
                <Route exact path="/project" component={RegisterProject}/>
            </Switch>
            <Switch>
                <Route path="/project/:id" component={RegisterProject}/>
            </Switch>
            <Switch>
                <Route path="/professional" component={RegisterProfessional}/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes;