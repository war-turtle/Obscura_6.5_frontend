import jwt from 'jsonwebtoken';
import { signInUser, onBoardUser } from '../services/users';
import Toast from '../components/shared/Toast';
import history from '../history';

const errorHandler = (err) => {
  switch (err.code) {
    case 16:
      Toast('unauthenticated user', 'error');
      break;
    case 2:
      Toast(err.message, 'error');
      break;
    default:
      Toast('something went wrong', 'error');
  }
};

export const signIn = idToken => (dispatch) => {
  signInUser(idToken)
    .then((res) => {
      window.localStorage.setItem('token', res.jwt);
      const user = jwt.decode(res.jwt);
      dispatch({ type: 'SIGN_IN', payload: user });
    })
    .catch((err) => {
      errorHandler(err);
      console.log(err);
      dispatch({ type: 'CLEAR_USER', payload: err });
    });
};

export const onBoard = user => (dispatch, getState) => {
  if (!getState() || !getState().user || !getState().user.Email) {
    dispatch({ type: 'CLEAR_USER', payload: 'missing state' });
  } else {
    user.email = getState().user.Email;
  }
  onBoardUser(user)
    .then((res) => {
      window.localStorage.setItem('token', res.jwt);
      const user = jwt.decode(res.jwt);
      dispatch({ type: 'ON_BOARD', payload: user });
    })
    .catch((err) => {
      errorHandler(err);
      console.log(err);
      dispatch({ type: 'CLEAR_USER', payload: err });
    });
};

export const userFromLocalStore = user => ({
  type: 'USER_FROM_LOCAL_STORE',
  payload: user,
});

export const clearUser = () => (dispatch) => {
  dispatch({ type: 'CLEAR_USER' });
  history.push('/');
};
