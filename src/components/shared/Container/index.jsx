import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { userFromLocalStore, clearUser } from '../../../actions/user';
import { getTeam } from '../../../actions/team';

class Container extends Component {
  state = { userLoaded: false };

  componentDidMount() {
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
