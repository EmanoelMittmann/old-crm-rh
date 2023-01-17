
import {
  CompanyIcon,
  HomeIcon,
  InvoiceIcon,
  JobIcon,
  OvertimeIcon,
  ReportsIcon,
  ServiceOrdersIcon,
  SettingsIcon,
} from "../components/atoms/icons/NavIcons";
import { ReactComponent as Project } from "../assets/icons/project.svg";
import { ReactComponent as Invoice } from "../assets/icons/invoice.svg";
import { ReactComponent as Overtime } from "../assets/icons/overtime.svg";


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
    icon: <Project />,
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
    name: "Relatórios",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
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
    icon: <Overtime/>,
    isRegisterPage: false,
    path: "/timeSending",
  },
  {
    id: 12,
    name: "Notas fiscais",
    hasButton: true,
    buttonText: "Anexar NF",
    buttonPath: "/invoiceUpload",
    icon: <Invoice />,
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
    name: "Cadastro de Empresas",
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
    icon: <Overtime/>,
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
