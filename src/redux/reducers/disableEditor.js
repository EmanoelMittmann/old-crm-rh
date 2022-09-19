import { DISABLEEDITOR } from '../types';

const inicialState = false;

const disableEditor = (state = inicialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DISABLEEDITOR:
      return payload;
    default:
      return state;
  }
};

export default disableEditor;
