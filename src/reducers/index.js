import { combineReducers } from 'redux';

import initialState from './state';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isSignedIn: true,
        name: action.payload.name,
        email: action.payload.email,
      };
    case 'CLEAR_USER':
      return { ...initialState.user };
    default:
      return state;
  }
};

export default combineReducers({ user: userReducer });
