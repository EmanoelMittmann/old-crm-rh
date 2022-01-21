import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import PrivateRoute from './PrivateRoute'
import Login from "../components/pages/Login"
import Home from "../components/pages/Home"
import Professionals from "../components/pages/Professionals"
import Projects from "../components/pages/Projects"
import Overtime from '../components/pages/Overtime'
import Invoice from '../components/pages/Invoice'
import Reports from '../components/pages/Reports'
import ServiceOrders from '../components/pages/ServiceOrders'
import Settings from '../../src/components/pages/Settings'
import Status from '../components/pages/Status'
import ProjectType from '../components/pages/ProjectType'
import RegisterProject from '../components/pages/RegisterProject'
import RegisterProfessional from '../components/pages/RegisterProfessional'
import TimeSending from '../components/pages/TimeSending'
import InvoiceSending from '../components/pages/InvoiceSending/InvoiceSending'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <PrivateRoute path="/home" component={Home} pageTitle="Início"/>
                <PrivateRoute 
                    exact path="/professionals" 
                    component={Professionals} 
                    pageTitle="Profissionais"
                    button="Cadastrar novo"
                    buttonPath="/professional"
                 />
                <PrivateRoute 
                    exact path="/projects" 
                    component={Projects} 
                    pageTitle="Projetos"
                    button="Cadastrar novo"
                    buttonPath="/project"
                />
                <PrivateRoute path="/overtime" component={Overtime} pageTitle="Horas extras" />
                <PrivateRoute path="/invoice" component={Invoice} pageTitle="Notas fiscais" />
                <PrivateRoute path="/reports" component={Reports} pageTitle="Relatórios" />
                <PrivateRoute path="/serviceOrders" component={ServiceOrders} pageTitle="Ordens de serviço" />
                <PrivateRoute path="/job" component={Settings} pageTitle="Configurações" />
                <PrivateRoute path="/projectStatus" component={Status} pageTitle="Configurações" />
                <PrivateRoute path="/projectType" component={ProjectType} pageTitle="Configurações" />
                <PrivateRoute exact path="/project" component={RegisterProject} registerPage />
                <PrivateRoute path="/project/:id" component={RegisterProject} registerPage />
                <PrivateRoute exact path="/professional" component={RegisterProfessional} registerPage />
                <PrivateRoute path="/professional/:id" component={RegisterProfessional} registerPage />

                {/* Profissional */}
                <PrivateRoute 
                    path="/timeSending" 
                    component={TimeSending} 
                    pageTitle="Lançamento de horas"
                    button="Novo lançamento"
                    buttonPath="/"
                />
                <PrivateRoute 
                    path="/InvoiceSending" 
                    component={InvoiceSending} 
                    pageTitle="Notas fiscais"
                    button="Enviar NF"
                    buttonPath="/"
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes