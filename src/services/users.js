import config from '../config';

const { SignInRequest } = require('../proto/users/users_pb');
const { UserClient } = require('../proto/users/users_grpc_web_pb');

const userService = new UserClient(config.UsersBackend, null, null);

export const signInUser = (idToken) => {
  const request = new SignInRequest();
  request.setIdToken(idToken);

  return new Promise((resolve, reject) => {
    userService.signIn(request, null, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};
