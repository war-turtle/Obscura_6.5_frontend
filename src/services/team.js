import config from '../config';

const {
  CreateTeamRequest,
  GetTeamRequest,
  GetAllTeamsRequest,
  JoinTeamRequest,
} = require('../proto/users/users_pb');
const { UserClient } = require('../proto/users/users_grpc_web_pb');

const userService = new UserClient(config.UsersBackend, null, null);

export const createTeam = (name, creatorID) => {
  const request = new CreateTeamRequest();
  request.setName(name);
  request.setCreatorid(creatorID);

  const token = window.localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    userService.createTeam(request, { Authorization: `jwt ${token}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};

export const getTeam = (teamid) => {
  const request = new GetTeamRequest();
  request.setTeamid(teamid);

  const token = window.localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    userService.getTeam(request, { Authorization: `jwt ${token}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};

export const getAllTeams = (page) => {
  const request = new GetAllTeamsRequest();
  request.setPage(page);

  const token = window.localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    userService.getAllTeams(request, { Authorization: `jwt ${token}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};

export const joinTeam = (teamID, userID) => {
  const request = new JoinTeamRequest();
  request.setUserid(userID);
  request.setTeamid(teamID);

  const token = window.localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    userService.joinTeam(request, { Authorization: `jwt ${token}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};

export const acceptUser = (teamID, userID) => {
  const request = new JoinTeamRequest();
  request.setUserid(userID);
  request.setTeamid(teamID);

  const token = window.localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    userService.acceptUser(request, { Authorization: `jwt ${token}` }, (err, res) => {
      if (res) {
        resolve(res.toObject());
      } else if (err) {
        reject(err);
      }
    });
  });
};
