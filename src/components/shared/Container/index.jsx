import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { userFromLocalStore, clearUser } from '../../../actions/user';
import { getTeam } from '../../../actions/team';

class Container extends Component {
  state = { userLoaded: false };

  componentDidMount() {
    const bgColors = [
      ['#ba68c8', '#4a148c'],
      ['#e57373', '#b71c1c'],
      ['#90caf9', '#0d47a1'],
      ['#4db6ac', '#004d40'],
      ['#a5d6a7', '#1b5e20'],
      ['#ff8a65', '#bf360c'],
    ];
    const rand = Math.floor(Math.random() * bgColors.length);
    document.documentElement.style.setProperty('--bg-color-primary', bgColors[rand][0]);
    document.documentElement.style.setProperty('--bg-color-secondary', bgColors[rand][1]);

    const {
      IsSignedIn, clearUser, userFromLocalStore, teamid, getTeam,
    } = this.props;
    const token = window.localStorage.getItem('token');
    if (!token) {
      clearUser();
    } else {
      const user = jwt.decode(token);
      if (!user) {
        clearUser();
      } else {
        this.user = user;
        this.setState({ userLoaded: true });
        if (!IsSignedIn) {
          userFromLocalStore(user);
        }
        if (parseInt(this.user.TeamID) !== 0 && teamid === '') {
          getTeam(this.user.TeamID);
        }
      }
    }
  }

  render() {
    const { component, ...rest } = this.props;
    return (
      <div className="ui container">
        {this.state.userLoaded ? (
          <Route
            {...rest}
            render={props => React.createElement(component, { user: this.user, ...props })}
          />
        ) : (
          <div className="ui active dimmer">
            <div className="ui large loader" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToPropps = state => ({
  IsSignedIn: state.user.IsSignedIn,
  teamid: state.team.ID,
});

export default connect(
  mapStateToPropps,
  { userFromLocalStore, clearUser, getTeam },
)(Container);
