import authentication from './authentication.js';
import settingsStatus from './settingsStatus.js'
import headerMenu from './headerMenu.js'
import modelVisibility from './modalVisibility.js'
import modalFunctionality from './modalFunctionality.js'
import jobs from './jobs'
import jobId from './jobId'

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    authentication,
    settingsStatus,
    headerMenu,
    modelVisibility,
    jobs,
    modalFunctionality,
    jobId
});