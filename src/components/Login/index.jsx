import React, { Component } from 'react';
import { connect } from 'react-redux';

import config from '../../config';
import { signIn } from '../../actions/user';
import Toast from '../shared/Toast';

import './login.css';

class LoginComponent extends Component {
  state = { buttonLoading: true };

  componentWillMount() {
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
    const { IsSignedIn, history, Onboard } = this.props;
    if (IsSignedIn) {
      if (!Onboard) {
        history.push('/onboard');
      } else {
        history.push('/dashboard');
      }
    }
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
    return buttonLoading ? 'large ui red disabled loading button' : 'large ui red button';
  };

  render() {
    return (
      <div className="one-page-middle">
        <div style={{ width: '100%', textAlign: 'center' }}>
          <h1 className="heading">ObscurA</h1>
          <button type="button" className={this.buttonClasses()} onClick={this.onSignIn}>
            <i className="google icon" />
            Google Login
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  IsSignedIn: state.user.IsSignedIn,
  Onboard: state.user.Onboard,
});

export default connect(
  mapStateToProps,
  {
    signIn,
  },
)(LoginComponent);
