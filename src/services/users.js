import config from '../config';

const { SignInRequest, OnBoardRequest, GetUserRequest } = require('../proto/users/users_pb');
const { UserClient } = require('../proto/users/users_grpc_web_pb');

const userService = new UserClient(config.UsersBackend, null, null);

export const signInUser = (idToken) => {
  const request = new SignInRequest();
  request.setIdToken(idToken);

  return new Promise((resolve, reject) => {
    userService.signIn(request, { Authorization: `google ${idToken}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};

export const onBoardUser = (user) => {
  const request = new OnBoardRequest();
  request.setUsername(user.username);
  request.setCollege(user.college);
  request.setPhone(user.phone);
  request.setEmail(user.email);
  request.setImagenumber(user.imageNumber);

  const token = window.localStorage.getItem('token');

  return new Promise((resolve, reject) => {
    userService.onBoard(request, { Authorization: `jwt ${token}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};

export const getUser = (userID) => {
  const request = new GetUserRequest();
  request.setUserid(userID);

  const token = window.localStorage.getItem('token');

  return new Promise((resolve, reject) => {
    userService.getUser(request, { Authorization: `jwt ${token}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};
