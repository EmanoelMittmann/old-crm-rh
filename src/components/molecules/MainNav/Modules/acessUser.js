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
  ReleaseHoursIcon,
  ReleaseInvoiceIcon,
} from "../../../atoms/icons/NavIcons/index";
import { checkUrl } from "../../../utils/checkUrl";
import { Modules } from "../Modules";


export const userAccess = (isTechLead) => [

  {
    1: <Modules id={2} children={<JobIcon />} route="/professionals" />,
  },
  {
    2: <Modules id={3} children={<ProjectsIcon />} route="/projects" />,
  },
  {
    3: <Modules id={4} children={<OvertimeIcon />} route="/overtime" />,
  },
  {
    4: <Modules id={5} children={<InvoiceIcon />} route="/invoice" />,
  },
  {
    5: <Modules id={7} children={<ServiceOrdersIcon />} route="/serviceOrders" />
  },
  {
    6: <Modules id={6} children={<ReportsIcon />} route="/reports" />,
  },
  {
    7: <Modules id={8} children={<SettingsIcon />} route="/job" />,
  },
  {
    8: <Modules id={9} children={<CompanyIcon />} route="/Company" />,
  },
  {
    9: <Modules id={10} children={<ReleaseHoursIcon />} route={checkUrl(isTechLead)} />
  },
  {
    10: <Modules id={11} children={<ReleaseInvoiceIcon />} route='/invoiceSending' />
  }
];
