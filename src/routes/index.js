import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import Professionals from '../components/pages/Professionals';
import Projects from '../components/pages/Projects';
import Overtime from '../components/pages/Overtime';
import Invoice from '../components/pages/Invoice';
import Reports from '../components/pages/Reports';
import ServiceOrders from '../components/pages/ServiceOrders';
import Settings from '../../src/components/pages/Settings';
import Status from '../components/pages/Status';
import ProjectType from '../components/pages/ProjectType';
import RegisterProject from '../components/pages/RegisterProject';
import RegisterProfessional from '../components/pages/RegisterProfessional';
import OvertimeListProfessional from '../components/pages/OvertimeListProfessional';
import InvoiceSending from '../components/pages/InvoiceSending/InvoiceSending';
import InvoiceUpload from '../components/pages/InvoiceUpload';
import ReleaseHours from '../components/pages/ReleaseHours';
import { ListCompany } from '../components/pages/ListCompany';
import { RegisterCompanies } from '../components/pages/RegisterCompanies';
import OrdemService from '../components/pages/OrdemServices';
import GenerateOS from '../components/organisms/GenerateOrdemService';
import DetailsRelease from '../components/organisms/DetailsRelease';
import OvertimeListIsTechLead from '../components/pages/OvertimeListIstechLead';
import { useSelector } from 'react-redux';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} id={1} />
        <PrivateRoute exact path="/professionals" component={Professionals} id={2} />
        <PrivateRoute exact path="/projects" component={Projects} id={3} />
        <PrivateRoute path="/overtime" component={Overtime} id={4} />
        <PrivateRoute path="/invoice" component={Invoice} id={5} />
        <PrivateRoute path="/reports" component={Reports} id={6} />
        <PrivateRoute path="/serviceOrders" component={ServiceOrders} id={7} />
        <PrivateRoute path="/job" component={Settings} id={8} />
        <PrivateRoute path="/projectStatus" component={Status} id={8} />
        <PrivateRoute path="/projectType" component={ProjectType} id={8} />
        <PrivateRoute exact path="/project/" component={RegisterProject} id={3} />
        <PrivateRoute path="/project/:id" component={RegisterProject} id={3} />
        <PrivateRoute exact path="/professional" component={RegisterProfessional} id={2} />
        <PrivateRoute path="/professional/:id" component={RegisterProfessional} id={2} />
        <PrivateRoute path="/Company" component={ListCompany} id={9} />
        <PrivateRoute exact path="/Companies" component={RegisterCompanies} id={9} />
        <PrivateRoute path="/Companies/:id" component={RegisterCompanies} id={9} />
        <PrivateRoute path="/NewOs" component={OrdemService} id={7} />
        <PrivateRoute path="/GenerateOs" component={GenerateOS} id={7} />
        <PrivateRoute path="/timeSending" component={OvertimeListProfessional} id={10} />
        <PrivateRoute path="/timeIstechLead" component={OvertimeListIsTechLead} id={10} />
        <PrivateRoute path="/invoiceSending" component={InvoiceSending} id={11} />
        <PrivateRoute path="/invoiceUpload" component={InvoiceUpload} id={11} />
        <PrivateRoute path="/releaseHours" component={ReleaseHours} id={11} />
        <PrivateRoute path="/DetailsRelease/:id" component={DetailsRelease} id={11} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
