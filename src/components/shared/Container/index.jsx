import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { userFromLocalStore, clearUser } from '../../../actions/user';
import { getTeam } from '../../../actions/team';

class Container extends Component {
  user = {};

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
      IsSignedIn, clearUser, userFromLocalStore, getTeam,
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
        if (!IsSignedIn) {
          userFromLocalStore(user);
        }
        if (parseInt(this.user.TeamID) !== 0 && this.props.teamid === '') {
          getTeam(this.user.TeamID);
        }
      }
    }
  }

  render() {
    const { component, ...rest } = this.props;
    return (
      <div>
        {parseInt(this.user.TeamID) !== 0 && this.props.teamid === '' ? (
          <div className="ui active dimmer">
            <div className="ui large loader" />
          </div>
        ) : (
          <div>
            <div className="ui three item menu" style={{ position: 'fixed', top: 0 }}>
              <Link to="/dashboard" className="item">
                <h3 style={{ color: 'var(--bg-color-primary)' }}>Dashboard</h3>
              </Link>
              <Link to="/level" className="item">
                <h3 style={{ color: 'var(--bg-color-primary)' }}>Levels</h3>
              </Link>
              <Link className="item">
                <h3 style={{ color: 'var(--bg-color-primary)' }}>Our Team</h3>
              </Link>
            </div>
            <div className="ui container" style={{ marginTop: '100px' }}>
              <Route
                {...rest}
                render={props => React.createElement(component, { user: this.user, ...props })}
              />
            </div>
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
