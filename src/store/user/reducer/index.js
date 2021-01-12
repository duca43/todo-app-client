import { PUT_LOGGED_USER } from '../constants';
import * as updateStateFunctions from './update-state-functions';

const initialState = {
  userData: {},
  userLogged: {
    username: localStorage.getItem('username'),
    id: localStorage.getItem('userId'),
    token: localStorage.getItem('token')
  }
};

const userReducer = (state = initialState, { type, payload }) => {
  if (actionHandler.hasOwnProperty(type)) {
    return actionHandler[type](state, payload);
  }

  return state;
};

const actionHandler = {
  [PUT_LOGGED_USER]: updateStateFunctions.putLoggedUser
};

export default userReducer;