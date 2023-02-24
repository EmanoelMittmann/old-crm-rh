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
    3: <Modules id={1} children={<HomeIcon />} route="/home" />,
  },
  {
    6: <Modules id={1} children={<JobIcon />} route="/professionals" />,
  },
  {
    7: <Modules id={1} children={<ProjectsIcon />} route="/projects" />,
  },
  {
    2: <Modules id={1} children={<OvertimeIcon />} route="/overtime" />,
  },
  {
    4: <Modules id={1} children={<InvoiceIcon />} route="/invoice" />,
  },
  {
    9: <Modules id={1} children={<OvertimeIcon />} route="/releaseHours" />,
  },
  {
    1: <Modules id={1} children={<SettingsIcon />} route="/job" />,
  },
  {
    5: (
      <Modules id={1} children={<ServiceOrdersIcon />} route="/serviceOrders" />
    ),
  },
  {
    8: <Modules id={1} children={<ReportsIcon />} route="/reports" />,
  },

  {
    10: <Modules id={1} children={<InvoiceIcon />} route="/invoiceSending" />,
  },
  {
    11: <Modules id={1} children={<CompanyIcon />} route="/Company" />,
  },
];
