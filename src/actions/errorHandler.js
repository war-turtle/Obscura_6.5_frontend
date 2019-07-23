import Toast from '../components/shared/Toast';
import history from '../history';

export default (err) => {
  switch (err.code) {
    case 16:
      history.push('/');
      Toast('unauthenticated user', 'error');
      break;
    case 2:
      Toast(err.message, 'error');
      break;
    default:
      Toast('something went wrong', 'error');
  }
};
