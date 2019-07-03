import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import initialState from './state';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SIGN_IN':
    case 'USER_FROM_LOCAL_STORE':
    case 'ON_BOARD':
      return {
        ...state,
        IsSignedIn: true,
        ...action.payload,
      };
    case 'CLEAR_USER':
      return { ...initialState.user };
    default:
      return state;
  }
};

export default combineReducers({ user: userReducer, form: formReducer });
