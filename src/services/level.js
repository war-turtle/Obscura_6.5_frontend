import config from '../config';

const { LevelRequest, AnswerRequest } = require('../proto/levels/levels_pb');
const { LevelClient } = require('../proto/levels/levels_grpc_web_pb');

const levelService = new LevelClient(config.LevelBackend, null, null);

export const getLevel = (levelNo, TeamID) => {
  const request = new LevelRequest();
  request.setId(levelNo);
  request.setTeamid(TeamID);

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

export const checkAnswer = (answer, number, TeamID) => {
  const request = new AnswerRequest();
  request.setAnswer(answer);
  request.setNumber(number);
  request.setTeamid(TeamID);

  const token = window.localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    levelService.checkAnswer(request, { Authorization: `jwt ${token}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};
