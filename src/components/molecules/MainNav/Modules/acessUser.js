import {
  JobIcon,
  ProjectsIcon,
  OvertimeIcon,
  InvoiceIcon,
  ReportsIcon,
  ServiceOrdersIcon,
  SettingsIcon,
  CompanyIcon,
} from "../../../atoms/icons/NavIcons/index";
import { Modules } from "../Modules";
export const userAccess = [
  {
    1: <Modules id={1} children={<SettingsIcon />} route="/job" />,
  },
  {
    2: <Modules id={1} children={<OvertimeIcon />} route="/overtime" />,
  },
  {
    4: <Modules id={1} children={<InvoiceIcon />} route="/invoice" />,
  },
  {
    5: (
      <Modules id={1} children={<ServiceOrdersIcon />} route="/serviceOrders" />
    ),
  },
  {
    6: <Modules id={1} children={<JobIcon />} route="/professional" />,
  },
  {
    7: <Modules id={1} children={<ProjectsIcon />} route="/project" />,
  },
  {
    8: <Modules id={1} children={<ReportsIcon />} route="/reports" />,
  },
  {
    9: <Modules id={1} children={<OvertimeIcon />} route="/releaseHours" />,
  },
  {
    10: <Modules id={1} children={<InvoiceIcon />} route="/invoiceSending" />,
  },
  {
    11: <Modules id={1} children={<CompanyIcon />} route="/Company" />,
  },
];
