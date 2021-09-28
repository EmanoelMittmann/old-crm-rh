import authentication from './authentication.js';
import settingsStatus from './settingsStatus.js'
import headerMenu from './headerMenu.js'

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  authentication: authentication,
  settingsStatus: settingsStatus,
  headerMenu: headerMenu,
});