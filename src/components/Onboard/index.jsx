import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, isValid } from 'redux-form';
import { Cat } from 'react-kawaii';

import { clearUser, userFromLocalStore, onBoard } from '../../actions/user';

class OnboardComponent extends Component {
  componentDidMount() {
    const { IsSignedIn, user, history } = this.props;
    if (!IsSignedIn) {
      history.push('/');
    } else if (user.Onboard) {
      history.push('/dashboard');
    }
  }

  componentDidUpdate() {
    if (this.props.Onboard) {
      this.props.history.push('/dashboard');
    }
  }

  renderInput = (formProps) => {
    const {
      input,
      label,
      placeholder,
      meta: { error, valid, touched },
    } = formProps;

    return (
      <div className="ui field">
        <div className="ui corner labeled input">
          <div className={`ui label ${valid && 'green basic'}`}>{label}</div>
          <input {...input} placeholder={placeholder} />
          <div className="ui red corner label">
            <i className="asterisk icon" />
          </div>
        </div>
        {!valid && touched && <div className="ui red pointing label">{error}</div>}
      </div>
    );
  };

  onSubmit = (formProps) => {
    this.props.onBoard(formProps);
  };

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <div className="ui centered huge header" style={{ margin: '30px 0px' }}>
          Just Give Us Some Basic Info
        </div>
        <div className="ui two column grid">
          <div className="tablet computer only column">
            <Cat size={320} mood={`${this.props.valid ? 'lovestruck' : 'ko'}`} color="#03a9f4" />
          </div>
          <div
            className="sixteen wide mobile eight wide tablet eight wide computer middle aligned column"
            style={{ textAlign: 'center' }}
          >
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                name="username"
                component={this.renderInput}
                label="Username"
                placeholder="Username"
              />

              <Field
                name="college"
                component={this.renderInput}
                placeholder="College Name"
                label="College Name"
              />

              <Field
                name="phone"
                component={this.renderInput}
                placeholder="Phone Number"
                label="Phone Number"
              />

              <button
                className={`ui green button ${!this.props.valid && 'disabled'}`}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'lenght must be less than 15 characters';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (isNaN(Number(values.phone))) {
    errors.phone = 'Must be a number';
  } else if (values.phone.length !== 10) {
    errors.phone = 'Must be 10 digits long';
  }

  if (!values.college) {
    errors.college = 'Required';
  }

  return errors;
};

const OnBoardForm = reduxForm({
  form: 'Onboard',
  validate,
})(OnboardComponent);

const mapStateToProps = state => ({
  IsSignedIn: state.user.IsSignedIn,
  Onboard: state.user.Onboard,
  initialValues: {
    username: state.user.Username,
    college: 'NIT Kurukshetra',
  },
  valid: isValid('Onboard')(state),
});

export default connect(
  mapStateToProps,
  {
    clearUser,
    userFromLocalStore,
    onBoard,
  },
)(OnBoardForm);
