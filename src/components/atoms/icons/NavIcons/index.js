import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import {
  ReactComponent as Home
} from '../../../../assets/icons/home.svg'
import {
  ReactComponent as Job
} from '../../../../assets/icons/job.svg';
import {
  ReactComponent as Projects
} from '../../../../assets/icons/projects.svg';
import {
  ReactComponent as Overtime
} from '../../../../assets/icons/overtime.svg';
import {
  ReactComponent as Invoice
} from '../../../../assets/icons/invoice.svg';
import {
  ReactComponent as Reports
} from '../../../../assets/icons/reports.svg';
import {
  ReactComponent as ServiceOrders
} from '../../../../assets/icons/serviceOrders.svg';
import {
  ReactComponent as Settings
} from '../../../../assets/icons/settings.svg';


//Home Icon

const HomeIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;

  svg {
    fill: ${(props) => props.location === '/home' ? "black" : "#B7BDC2"};
    cursor: pointer;
    height: 45px;
    transition: 0.4s fill ease-in-out;
  };


  &:hover{
    background-color: ${(props) => props.location === '/home' ? "white" : "#F4F6F8"};
    border-radius: 10px;
   
    svg{
      fill: black;
    }
  }

  &:after{
    content: 'Início';
    display: ${props => props.location === '/home' ? "none" : props.hover};
    width: 70px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 10px 15px -7px rgba(0,0,0,0.2), 5px 25px 14px -13px rgba(0,0,0,0);
    position: absolute;
    border-radius: 8px;
    top: 122%;
    color: black;
    font-size: 0.7rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:before {
    content: "";
    display: ${props => props.location === '/home' ? "none" : props.hover};
    width: 45px;
    height: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    top: 65px;
    background-color: white;
  }
`;

export const HomeIcon = () => {
  const location = useLocation();
  const state = useSelector(state => state.headerMenu[0])

  const displayDescription = state.descriptionIsAppearing ? "flex" : "none";

    return (
        <HomeIconContainer 
        location={location.pathname}
        hover={displayDescription}>
            <Home/>
        </HomeIconContainer>
    )
}

// Professionals Icon

const JobIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;

  svg {
    fill: ${(props) => props.location === '/professionals' ? "black" : "#B7BDC2"};
    cursor: pointer;
    height: 45px;
    transition: 0.4s fill ease-in-out;
  };


  &:hover{
    background-color: ${(props) => props.location === '/professionals' ? "white" : "#F4F6F8"};
    border-radius: 10px;
   
    svg{
      fill: black;
    }
  }

  &:after{
    content: 'Profissionais';
    display: ${props => props.location === '/professionals' ? "none" : props.hover};
    width: 100px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 10px 15px -7px rgba(0,0,0,0.2), 5px 25px 14px -13px rgba(0,0,0,0);
    position: absolute;
    border-radius: 8px;
    top: 122%;
    color: black;
    font-size: 0.7rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:before {
    content: "";
    display: ${props => props.location === '/professionals' ? "none" : props.hover};
    width: 45px;
    height: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    top: 65px;
    background-color: white;
  }
`;

export const JobIcon = () => {
  const location = useLocation();
  const state = useSelector(state => state.headerMenu[1])

  const displayDescription = state.descriptionIsAppearing ? "flex" : "none";

    return (
        <JobIconContainer 
        location={location.pathname}
        hover={displayDescription}>
            <Job/>
        </JobIconContainer>
    )
}

//Projects Icon

const ProjectsIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;

  svg {
    fill: ${(props) => props.location === '/projects' ||
    props.location === '/registerProject' ? "black" : "#B7BDC2"};
    cursor: pointer;
    height: 45px;
    transition: 0.4s fill ease-in-out;
  };


  &:hover{
    background-color: ${(props) => props.location === '/projects' ||
    props.location === '/registerProject' ? "white" : "#F4F6F8"};
    border-radius: 10px;
   
    svg{
      fill: black;
    }
  }

  &:after{
    content: 'Projetos';
    display: ${props => props.location === '/projects' ||
    props.location === '/registerProject' ? "none" : props.hover};
    width: 70px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 10px 15px -7px rgba(0,0,0,0.2), 5px 25px 14px -13px rgba(0,0,0,0);
    position: absolute;
    border-radius: 8px;
    top: 122%;
    color: black;
    font-size: 0.7rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:before {
    content: "";
    display: ${props => props.location === '/projects' ||
    props.location === '/registerProject' ? "none" : props.hover};
    width: 45px;
    height: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    top: 65px;
    background-color: white;
  }
`;

export const ProjectsIcon = () => {
  const location = useLocation();
  const state = useSelector(state => state.headerMenu[2])

  const displayDescription = state.descriptionIsAppearing ? "flex" : "none";

    return (
        <ProjectsIconContainer 
        location={location.pathname}
        hover={displayDescription}>
            <Projects/>
        </ProjectsIconContainer>
    )
}


//Overtime Icon

const OvertimeIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;

  svg {
    fill: ${(props) => props.location === '/overtime' ? "black" : "#B7BDC2"};
    cursor: pointer;
    height: 45px;
    transition: 0.4s fill ease-in-out;
  }

  &:hover{
    background: ${(props) => props.location === '/overtime' ? "white" : "#F4F6F8"};
    border-radius: 10px;
    
    svg{
      fill: black;
    }
  }

  &:after{
    content: 'Horas extras';
    display: ${props => props.location === '/overtime' ? "none" : props.hover};
    width: 100px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 10px 15px -7px rgba(0,0,0,0.2), 5px 25px 14px -13px rgba(0,0,0,0);
    position: absolute;
    border-radius: 8px;
    top: 122%;
    color: black;
    font-size: 0.7rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:before {
    content: "";
    display: ${props => props.location === '/overtime' ? "none" : props.hover};
    width: 45px;
    height: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    top: 65px;
    background-color: white;
  }

`;

export const OvertimeIcon = () => {
  const location = useLocation();
  const state = useSelector(state => state.headerMenu[3])

  const displayDescription = state.descriptionIsAppearing ? "flex" : "none";

    return (
      <OvertimeIconContainer 
      location={location.pathname}
      hover={displayDescription}>
          <Overtime/>
      </OvertimeIconContainer>
    )
};


// Invoice Icon

const InvoiceIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;

  svg {
    fill: ${(props) => props.location === '/invoice' ? "black" : "#B7BDC2"};
    cursor: pointer;
    height: 45px;
    transition: 0.4s fill ease-in-out;
  }

  &:hover{
    background: #F4F6F8;
    border-radius: 10px;

    svg{
      fill: black;
    }
  }

  &:after{
    content: 'Notas fiscais';
    display: ${props => props.location === '/invoice' ? "none" : props.hover};
    width: 100px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 10px 15px -7px rgba(0,0,0,0.2), 5px 25px 14px -13px rgba(0,0,0,0);
    position: absolute;
    border-radius: 8px;
    top: 122%;
    color: black;
    font-size: 0.7rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:before {
    content: "";
    display: ${props => props.location === '/invoice' ? "none" : props.hover};
    width: 45px;
    height: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    top: 65px;
    background-color: white;
  }
`;

export const InvoiceIcon = () => {
  const location = useLocation();
  const state = useSelector(state => state.headerMenu[4])
  const displayDescription = state.descriptionIsAppearing ? "flex" : "none";

    return (
      <InvoiceIconContainer 
      location={location.pathname}
      hover={displayDescription}>
          <Invoice/>
      </InvoiceIconContainer>
    )
};

// Icon Reports

const ReportsIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;

  svg {
    fill: ${(props) => props.location === '/reports' ? "black" : "#B7BDC2"};
    cursor: pointer;
    height: 45px;
    transition: 0.4s fill ease-in-out;
  }

  &:hover{
    background: #F4F6F8;
    border-radius: 10px;

    svg{
      fill: black;
    }
  }

  &:after{
    content: 'Relatórios';
    display: ${props => props.location === '/reports' ? "none" : props.hover};
    width: 100px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 10px 15px -7px rgba(0,0,0,0.2), 5px 25px 14px -13px rgba(0,0,0,0);
    position: absolute;
    border-radius: 8px;
    top: 122%;
    color: black;
    font-size: 0.7rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:before {
    content: "";
    display: ${props => props.location === '/reports' ? "none" : props.hover};
    width: 45px;
    height: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    top: 65px;
    background-color: white;
  }
`;


export const ReportsIcon = () => {
  const location = useLocation();
  const state = useSelector(state => state.headerMenu[5])
  const displayDescription = state.descriptionIsAppearing ? "flex" : "none";

    return (
      <ReportsIconContainer 
      location={location.pathname}
      hover={displayDescription}>
          <Reports/>
      </ReportsIconContainer>
    )
};

// Service Orders

const ServiceOrdersIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;

  svg {
    fill: ${(props) => props.location === '/serviceOrders' ? "black" : "#B7BDC2"};
    cursor: pointer;
    height: 45px;
    transition: 0.4s fill ease-in-out;
  };


  &:hover{
    background-color: ${(props) => props.location === '/serviceOrders' ? "white" : "#F4F6F8"};
    border-radius: 10px;
   
    svg{
      fill: black;
    }
  }

  &:after{
    content: 'Ordens de serviço';
    display: ${props => props.location === '/serviceOrders' ? "none" : props.hover};
    width: 130px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 10px 15px -7px rgba(0,0,0,0.2), 5px 25px 14px -13px rgba(0,0,0,0);
    position: absolute;
    border-radius: 8px;
    top: 122%;
    color: black;
    font-size: 0.7rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:before {
    content: "";
    display: ${props => props.location === '/serviceOrders' ? "none" : props.hover};
    width: 45px;
    height: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    top: 65px;
    background-color: white;
  }
`;

export const ServiceOrdersIcon = () => {
  const location = useLocation();
  const state = useSelector(state => state.headerMenu[6])

  const displayDescription = state.descriptionIsAppearing ? "flex" : "none";

    return (
        <ServiceOrdersIconContainer 
        location={location.pathname}
        hover={displayDescription}>
            <ServiceOrders/>
        </ServiceOrdersIconContainer>
    )
}

//Settings Icon

const SettingsIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;

  svg {
    fill: ${(props) => props.isSettings ?
    "black" : "#B7BDC2"}; 
    cursor: pointer;
    height: 45px;
    transition: 0.3s fill ease-in-out;
    stroke: ${(props) =>  props.isSettings ?
    "black" : "#B7BDC2"};
  }

  &:hover{
    background: ${(props) => props.isSettings ?
    "white" : "#F4F6F8"};
    border-radius: 10px;
    
    svg{
      fill: black;
      stroke: black;
    }
  }

  &:after{
    content: 'Configurações';
    display: ${props => props.isSettings ? "none" : props.hover};
    width: 120px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 10px 15px -7px rgba(0,0,0,0.2), 5px 25px 14px -13px rgba(0,0,0,0);
    position: absolute;
    border-radius: 8px;
    top: 122%;
    color: black;
    font-size: 0.7rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:before {
    content: "";
    display: ${props => props.isSettings ? "none" : props.hover};
    width: 45px;
    height: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    top: 65px;
    background-color: white;
  }
`;

export const SettingsIcon = () => {
  const location = useLocation();
  const state = useSelector(state => state.headerMenu[7]);
  const displayDescription = state.descriptionIsAppearing ? "flex" : "none";
  const url = location.pathname;

 const isSettings = url === '/projectStatus' || url === '/job' ||
 url === '/projectType' ? true : false

    return (
        <SettingsIconContainer 
        isSettings={isSettings}
        hover={displayDescription}>
            <Settings/>
        </SettingsIconContainer>
    )
};

