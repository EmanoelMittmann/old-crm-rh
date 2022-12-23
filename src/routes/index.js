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
import {ListCompany} from '../components/pages/ListCompany';
import { RegisterCompanies } from '../components/pages/RegisterCompanies';
import OrdemService from '../components/pages/OrdemServices';
import GenerateOS from '../components/organisms/GenerateOrdemService';
import DetailsRelease from '../components/organisms/DetailsRelease';
import OvertimeListIsTechLead from '../components/pages/OvertimeListIstechLead';
import OvertimeLounchScreen from '../components/molecules/ModalApprovalIsTechLead';


const Routes = () => {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute exact path="/professionals" component={Professionals} />
        <PrivateRoute exact path="/projects" component={Projects} />
        <PrivateRoute path="/overtime" component={Overtime} />
        <PrivateRoute path="/invoice" component={Invoice} />
        <PrivateRoute path="/reports" component={Reports} />
        <PrivateRoute path="/serviceOrders" component={ServiceOrders} />
        <PrivateRoute path="/job" component={Settings} />
        <PrivateRoute path="/projectStatus" component={Status} />
        <PrivateRoute path="/projectType" component={ProjectType} />
        <PrivateRoute exact path="/project" component={RegisterProject} />
        <PrivateRoute path="/project/:id" component={RegisterProject} />
        <PrivateRoute
          exact
          path="/professional"
          component={RegisterProfessional}
        />
        <PrivateRoute
          path="/professional/:id"
          component={RegisterProfessional}
        />
        <PrivateRoute path="/Company" component={ListCompany} />
        <PrivateRoute exact path="/Companies" component={RegisterCompanies} />
        <PrivateRoute path="/Companies/:id" component={RegisterCompanies} />
        <PrivateRoute path="/NewOs" component={OrdemService} />
        <PrivateRoute path="/GenerateOs" component={GenerateOS} />
        

        <PrivateRoute path="/timeSending"component={OvertimeListProfessional}/>
        <PrivateRoute path="/timeIstechLead" component={OvertimeListIsTechLead}/>
        <PrivateRoute path="/invoiceSending" component={InvoiceSending} />
        <PrivateRoute path="/invoiceUpload" component={InvoiceUpload} />
        <PrivateRoute path="/releaseHours" component={ReleaseHours} />
        <PrivateRoute path="/DetailsRelease/:id" component={DetailsRelease} />
        <PrivateRoute path="/ApprovalIsTechLead/:id" component={OvertimeLounchScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
