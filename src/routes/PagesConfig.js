import { HomeIcon, InvoiceIcon, JobIcon, OvertimeIcon, ProjectsIcon, ReportsIcon, ServiceOrdersIcon, SettingsIcon } from "../components/atoms/icons/NavIcons";

export const templates = [
  {
    id: 1,
    name: "Inicio",
    hasButton: false,
    buttonText: "",
    buttonPath: "", 
    icon: <HomeIcon/> ,
    isRegisterPage: false,
    path: "/home"
  },
  {
    id: 2,
    name: "Profissionais",
    hasButton: true,
    buttonText: "Cadastrar novo",
    buttonPath: "/professional",
    icon: <JobIcon/>,
    isRegisterPage: false,
    path: "/professionals"
  },
  {
    id: 3,
    name: "Projetos",
    hasButton: true,
    buttonText: "Cadastrar novo",
    buttonPath: "/project",
    icon: <ProjectsIcon/>,
    isRegisterPage: false,
    path: "/projects"
  },
  {
    id: 4,
    name: "Horas extras",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <OvertimeIcon/>,
    isRegisterPage: false,
    path: "/overtime"
  },
  {
    id: 5,
    name: "Notas fiscais",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <InvoiceIcon/>,
    isRegisterPage: false,
    path: "/invoice"
  },
  {
    id: 6,
    name: "Relatórios",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <ReportsIcon/>,
    isRegisterPage: false,
    path: "/reports"
  },
  {
    id: 7,
    name: "Ordens de serviço",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <ServiceOrdersIcon/>,
    isRegisterPage: false,
    path: "/serviceOrders"
  },
  {
    id: 8,
    name: "Configurações",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <SettingsIcon/>,
    isRegisterPage: false,
    path: "/job"
  },
  {
    id: 9,
    name: "Configurações",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <SettingsIcon/>,
    isRegisterPage: false,
    path: "/projectType"
  },
  {
    id: 10,
    name: "Configurações",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <SettingsIcon/>,
    isRegisterPage: false,
    path: "/projectStatus"
  },
  {
    id: 11,
    name: "Lançamento de horas",
    hasButton: true,
    buttonText: "Novo lançamento",
    buttonPath: "/",
    icon: <OvertimeIcon/>,
    isRegisterPage: false,
    path: "/timeSending"
  },
  {
    id: 12,
    name: "Notas fiscais",
    hasButton: true,
    buttonText: "Enviar NF",
    buttonPath: "/invoiceUpload",
    icon: <InvoiceIcon/>,
    isRegisterPage: false,
    path: "/invoiceSending"
  },
]

export const noTemplate = {
    name: "Sem template",
    hasButton: false,
    buttonText: "",
    buttonPath: "",
    icon: <></>,
    isRegisterPage: true,
}