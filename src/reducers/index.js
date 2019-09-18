import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import initialState from './state';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SIGN_IN':
    case 'USER_FROM_LOCAL_STORE':
    case 'ON_BOARD':
    case 'GET_USER':
      return {
        ...state,
        IsSignedIn: true,
        ...action.payload,
      };
    case 'CREATE_TEAM':
      return {
        ...state,
        ...action.payload.user,
      };
    case 'CLEAR_USER':
      return { ...initialState.user };
    default:
      return state;
  }
};

const teamReducer = (state = initialState.team, action) => {
  switch (action.type) {
    case 'CREATE_TEAM':
      const {
        user: { TeamID },
        name,
        creatorID,
        imageNumber,
      } = action.payload;
      return {
        ...state,
        ID: TeamID,
        name,
        creatorID,
        imageNumber,
      };
    case 'GET_TEAM':
      const team = action.payload;
      return {
        ...state,
        ID: team.id,
        name: team.name,
        level: team.level,
        creatorID: team.creatorid,
        requests: team.requestsList,
        imageNumber: team.imagenumber,
      };
    case 'ACCEPT_USER':
      const userID = action.payload;
      const requests = state.requests.filter(request => request.id !== userID);
      return {
        ...state,
        requests,
      };
    default:
      return state;
  }
};

export default combineReducers({ user: userReducer, team: teamReducer, form: formReducer });
