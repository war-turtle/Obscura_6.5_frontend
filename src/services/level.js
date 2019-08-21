import config from '../config';

const { LevelRequest } = require('../proto/levels/levels_pb');
const { LevelClient } = require('../proto/levels/levels_grpc_web_pb');

const levelService = new LevelClient(config.LevelBackend, null, null);

export const getLevel = (levelNo) => {
  const request = new LevelRequest();
  request.setId(levelNo);

  const token = window.localStorage.getItem('token');

  return new Promise((resolve, reject) => {
    levelService.getLevel(request, { Authorization: `jwt ${token}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};
