import { LocalStorageKeys } from '../../settings/LocalStorageKeys';

import { VALIDTOKEN } from '../types';

const inicialState = false;

const authentication = (state = inicialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case VALIDTOKEN:
      const token = JSON.stringify(payload.token);
      const user = JSON.stringify({
        avatar: payload.googleData.data.avatar,
        user_type_id: payload.googleData.data.user_type_id,
      });
      localStorage.setItem(LocalStorageKeys.TOKEN, token);
      localStorage.setItem(LocalStorageKeys.USER, user);
      return payload;
    default:
      return state;
  }
};

export default authentication;
