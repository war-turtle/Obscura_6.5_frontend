import jwt from 'jsonwebtoken';

import { signInUser, onBoardUser, getUser as getUserService } from '../services/users';
import history from '../history';
import errorHandler from './errorHandler';

export const signIn = idToken => (dispatch) => {
  signInUser(idToken)
    .then((res) => {
      window.localStorage.setItem('token', res.jwt);
      const user = jwt.decode(res.jwt);
      dispatch({ type: 'SIGN_IN', payload: user });
    })
    .catch((err) => {
      errorHandler(err);
      dispatch({ type: 'CLEAR_USER', payload: err });
    });
};

export const onBoard = user => (dispatch, getState) => {
  if (!getState() || !getState().user || !getState().user.Email) {
    dispatch({ type: 'CLEAR_USER', payload: 'missing state' });
    return;
  }
  user.email = getState().user.Email;

  onBoardUser(user)
    .then((res) => {
      window.localStorage.setItem('token', res.jwt);
      const user = jwt.decode(res.jwt);
      dispatch({ type: 'ON_BOARD', payload: user });
    })
    .catch((err) => {
      errorHandler(err);
      dispatch({ type: 'CLEAR_USER', payload: err });
    });
};

export const userFromLocalStore = user => ({
  type: 'USER_FROM_LOCAL_STORE',
  payload: user,
});

export const clearUser = () => (dispatch) => {
  history.push('/');
  dispatch({ type: 'CLEAR_USER' });
};

export const getUser = () => (dispatch, getState) => {
  getUserService(getState().user.ID)
    .then((res) => {
      window.localStorage.setItem('token', res.jwt);
      const user = jwt.decode(res.jwt);
      dispatch({ type: 'GET_USER', payload: user });
    })
    .catch((err) => {
      errorHandler(err);
      dispatch(clearUser());
    });
};
