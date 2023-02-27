import {
  JobIcon,
  ProjectsIcon,
  OvertimeIcon,
  InvoiceIcon,
  ReportsIcon,
  ServiceOrdersIcon,
  SettingsIcon,
  CompanyIcon,
  HomeIcon,
} from "../../../atoms/icons/NavIcons/index";
import { Modules } from "../Modules";
export const userAccess = [
  {
    1: <Modules id={1} children={<HomeIcon />} route="/home" />,
  },
  {
    2: <Modules id={2} children={<JobIcon />} route="/professionals" />,
  },
  {
    3: <Modules id={3} children={<ProjectsIcon />} route="/projects" />,
  },
  {
    4: <Modules id={4} children={<OvertimeIcon />} route="/overtime" />,
  },
  {
    5: <Modules id={5} children={<InvoiceIcon />} route="/invoice" />,
  },
  {
    7: <Modules id={7} children={<ServiceOrdersIcon />} route="/serviceOrders" />
  },
  {
    6: <Modules id={6} children={<ReportsIcon />} route="/reports" />,
  },
  {
    8: <Modules id={8} children={<SettingsIcon />} route="/job" />,
  },
  {
    9: <Modules id={9} children={<CompanyIcon />} route="/Company" />,
  },
  {
    10: <Modules id={4} children={<OvertimeIcon/>} route="/timeSending"/>
  },
  {
    11:<Modules id={5} children={<InvoiceIcon/>} route='/invoiceSending'/>
  }
];
