import jwt from 'jsonwebtoken';
import {
  createTeam as createTeamService,
  getTeam as getTeamService,
  acceptUser as acceptUserService,
} from '../services/team';
import errorHandler from './errorHandler';

export const createTeam = (name, imageNumber) => (dispatch, getState) => {
  const creatorID = getState().user.ID;
  createTeamService(name, creatorID, imageNumber)
    .then((res) => {
      window.localStorage.setItem('token', res.jwt);
      const user = jwt.decode(res.jwt);

      res.name = name;
      res.creatorID = creatorID;
      res.user = user;
      res.imageNumber = imageNumber;
      dispatch({ type: 'CREATE_TEAM', payload: res });
    })
    .catch((err) => {
      errorHandler(err);
      console.log(err);
    });
};

export const getTeam = teamid => (dispatch) => {
  getTeamService(teamid)
    .then((res) => {
      console.log(res);
      dispatch({ type: 'GET_TEAM', payload: res });
    })
    .catch((err) => {
      errorHandler(err);
      console.log(err);
    });
};

export const acceptUser = userID => (dispatch, getState) => {
  acceptUserService(getState().team.ID, userID)
    .then((res) => {
      dispatch({ type: 'ACCEPT_USER', payload: userID });
    })
    .catch((err) => {
      errorHandler(err);
    });
};
