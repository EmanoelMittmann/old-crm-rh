import { LocalStorageKeys } from '../../settings/LocalStorageKeys';

import { VALIDTOKEN } from '../types';

const inicialState = false;

const authentication = (state = inicialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case VALIDTOKEN:
      const token = JSON.stringify(payload.token);
      const user = JSON.stringify(payload.googleData.name);
      localStorage.setItem(LocalStorageKeys.TOKEN, token);
      localStorage.setItem(LocalStorageKeys.USER, user);
      return payload;
    default:
      return state;
  }
};

export default authentication;
