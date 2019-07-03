import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { userFromLocalStore, clearUser } from '../../../actions';

class Container extends Component {
  state = { userLoaded: false };

  componentWillMount() {
    const { IsSignedIn, clearUser, userFromLocalStore } = this.props;
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
      }
    }
  }

  render() {
    const { component, ...rest } = this.props;
    return (
      <div>
        {this.state.userLoaded ? (
          <Route
            {...rest}
            render={props => React.createElement(component, { user: this.user, ...props })}
          />
        ) : (
          'Loading'
        )}
      </div>
    );
  }
}

const mapStateToPropps = state => ({
  IsSignedIn: state.user.IsSignedIn,
});

export default connect(
  mapStateToPropps,
  { userFromLocalStore, clearUser },
)(Container);
