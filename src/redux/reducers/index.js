import authentication from './authentication.js';
import headerMenu from './headerMenu.js';
import modalVisibility from './modalVisibility.js';
import modalFunctionality from './modalFunctionality.js';
import settingsPagesFilter from './settingsPagesFilter.js';
import jobs from './jobs.js';
import status from './status.js';
import projectType from './projectType';
import projects from './projects.js';
import jobId from './jobId.js';
import statusId from './statusId.js';
import projectTypeId from './projectTypeId';
import settingsSearchFilter from './settingsSearchFilter.js';
import filterStatus from './filterStatus.js';
import filterOrder from './filterOrder.js';
import projectsPagesFilter from './projectsPagesFilter.js';
import projectsSearchFilter from './projectsSearchFilter.js';
import filterOrderProjects from './filterOrderProjects';
import filterStatusProjects from './filterStatusProjects';
import statusColors from './statusColors.js';
import { combineReducers } from 'redux';
import projectStatusProjects from './projectStatusProjects.js';
import projectTypeProjects from './projectTypeProjects.js';
import filterTypesProjects from './filterTypesProjects.js';
import projectList from './projectsList';
import occupation from './occupation';
import valueOfCommission from './valueOfCommission';
import companiesList from './companyList';
import occupationId from './occupationId';
import disableEditor from './disableEditor.js';
import validTechLead from './isTechLead.js';

export const Reducers = combineReducers({
  authentication,
  headerMenu,
  modalVisibility,
  jobs,
  status,
  projectType,
  projects,
  modalFunctionality,
  jobId,
  statusId,
  projectTypeId,
  settingsPagesFilter,
  settingsSearchFilter,
  filterStatus,
  filterOrder,
  projectsPagesFilter,
  projectsSearchFilter,
  filterOrderProjects,
  filterStatusProjects,
  statusColors,
  projectStatusProjects,
  projectTypeProjects,
  filterTypesProjects,
  projectList,
  occupation,
  occupationId,
  companiesList,
  disableEditor,
  valueOfCommission,
  validTechLead,
});
