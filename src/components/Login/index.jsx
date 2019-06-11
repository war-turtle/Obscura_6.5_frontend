import React, { Component } from 'react';
import { connect } from 'react-redux';

import config from '../../config';
import { signIn } from '../../actions';
import Toast from '../Toast';

class Login extends Component {
  state = { buttonLoading: true };

  componentDidMount() {
    console.log(this.props.isSignedIn);
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: config.ClientId,
          scope: 'profile email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          if (this.auth.isSignedIn.get()) {
            Toast('logging you in', 'success');
            this.props.signIn(this.auth.currentUser.get().getAuthResponse().id_token);
          }
          this.setState({ buttonLoading: false });
        });
    });
  }

  componentDidUpdate() {
    const { isSignedIn } = this.props;
    console.log(isSignedIn);
  }

  onSignIn = async () => {
    try {
      const response = await this.auth.signIn();
      this.props.signIn(response.getAuthResponse().id_token);
    } catch (err) {
      Toast(err.error, 'error');
    }
  };

  buttonClasses = () => {
    const { buttonLoading } = this.state;
    return buttonLoading ? 'ui primary disabled loading button' : 'ui primary basic button';
  };

  render() {
    return (
      <button type="button" className={this.buttonClasses()} onClick={this.onSignIn}>
        <i className="google icon" />
        Google Login
      </button>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.user.isSignedIn,
});

export default connect(
  mapStateToProps,
  {
    signIn,
  },
)(Login);
