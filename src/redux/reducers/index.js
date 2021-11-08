import authentication from './authentication.js';
import headerMenu from './headerMenu.js'
import modelVisibility from './modalVisibility.js'
import modalFunctionality from './modalFunctionality.js'
import settingsPagesFilter from './settingsPagesFilter.js'
import jobs from './jobs.js'
import status from './status.js'
import projectType from './projectType'
import projects from './projects.js';
import jobId from './jobId.js'
import statusId from './statusId.js';
import projectTypeId from './projectTypeId'
import settingsSearchFilter from './settingsSearchFilter.js'
import filterStatus from './filterStatus.js';
import filterOrder from './filterOrder.js';
import projectsPagesFilter from './projectsPagesFilter.js';
import projectsSearchFilter from './projectsSearchFilter.js';

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    authentication,
    headerMenu,
    modelVisibility,
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
    projectsSearchFilter
});