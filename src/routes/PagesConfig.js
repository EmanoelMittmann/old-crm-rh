
import {
  CompanyIcon,
  HomeIcon,
  InvoiceIcon,
  JobIcon,
  OvertimeIcon,
  ReportsIcon,
  ServiceOrdersIcon,
  SettingsIcon,
  ProjectsIcon,
ReleaseInvoiceIcon
} from "../components/atoms/icons/NavIcons";
import { ReactComponent as HoursProfessionals } from "../assets/icons/arrowHours.svg";


export const templates = [

  {
    id: 1,
    name: "Inicio",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <HomeIcon />,
    isRegisterPage: false,
    path: "/home",
  },
  {
    id: 2,
    name: "Profissionais",
    hasButton: true,
    buttonText: "Cadastrar novo",
    buttonPath: "/professional",
    icon: <JobIcon />,
    isRegisterPage: false,
    path: "/professionals",
  },
  {
    id: 3,
    name: "Projetos",
    hasButton: true,
    buttonText: "Cadastrar novo",
    buttonPath: "/project",
    icon: <ProjectsIcon />,
    isRegisterPage: false,
    path: "/projects",
  },
  {
    id: 4,
    name: "Aprovação de Horas Extras - RH",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <OvertimeIcon />,
    isRegisterPage: false,
    path: "/overtime",
  },
  {
    id: 5,
    name: "Notas fiscais",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <InvoiceIcon />,
    isRegisterPage: false,
    path: "/invoice",
  },
  {
    id: 6,
    name: "Pagamentos",
    hasButton: false,
    buttonText: "Exportar Excel",
    buttonPath: "" ,
    icon: <ReportsIcon />,
    isRegisterPage: false,
    path: "/reports",
  },
  {
    id: 7,
    name: "Ordens de serviço",
    hasButton: true,
    buttonText: "Criar nova O.S.",
    buttonPath: "/NewOs",
    secondButton: true,
    secondButtonText: "Gerar O.S.",
    secondButtonPath: "/GenerateOs",
    icon: <ServiceOrdersIcon />,
    isRegisterPage: false,
    path: "/serviceOrders",
  },

  {
    id: 8,
    name: "Configurações",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <SettingsIcon />,
    isRegisterPage: false,
    path: "/job",
  },
  {
    id: 9,
    name: "Configurações",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <SettingsIcon />,
    isRegisterPage: false,
    path: "/projectType",
  },
  {
    id: 10,
    name: "Configurações",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <SettingsIcon />,
    isRegisterPage: false,
    path: "/projectStatus",
  },
  {
    id: 11,
    name: "Lançamento de horas Extra",
    hasButton: true,
    buttonText: "Novo lançamento",
    buttonPath: "/releaseHours",
    icon: <HoursProfessionals />,
    isRegisterPage: false,
    path: "/timeSending",
  },
  {
    id: 12,
    name: "Notas fiscais",
    hasButton: true,
    buttonText: "Anexar NF",
    buttonPath: "/invoiceUpload",
    icon: <ReleaseInvoiceIcon />,
    isRegisterPage: false,
    path: "/invoiceSending",
  },
  {
    id: 13,
    name: "Configurações",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <SettingsIcon />,
    isRegisterPage: false,
    path: "/occupation",
  },
  {
    id: 14,
    name: "Empresas",
    hasButton: true,
    buttonText: "Cadastrar Nova",
    buttonPath: "/Companies",
    icon: <CompanyIcon />,
    isRegisterPage: false,
    path: "/Company",
  },
  {
    id: 15,
    name: "Aprovação de horas Extra - Lider técnico",
    hasButton: true,
    buttonText: "Lançar Horas",
    buttonPath: "/timeSending",
    icon: <HoursProfessionals />,
    isRegisterPage: false,
    path: "/timeIstechLead",
  },
  
];

export const noTemplate = {
  name: "Sem template",
  hasButton: false,
  buttonText: "",
  buttonPath: "",
  icon: <></>,
  isRegisterPage: true,
};

