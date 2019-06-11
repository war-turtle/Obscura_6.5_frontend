import { signInUser } from '../services/users';
import Toast from '../components/Toast';

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
      console.log(res);
      dispatch({ type: 'SIGN_IN', payload: res });
    })
    .catch((err) => {
      errorHandler(err);
      console.log(err);
      dispatch({ type: 'CLEAR_USER', payload: err });
    });
};
