import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { clearUser, userFromLocalStore, onBoard } from '../../actions';

class OnboardComponent extends Component {
  componentWillMount() {
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

  renderInput(formProps) {
    const {
      input,
      label,
      placeholder,
      meta: { error, valid, touched },
    } = formProps;

    return (
      <div className={valid || !touched ? 'field' : 'field error'}>
        <label>{label}</label>
        <input className="red" {...input} placeholder={placeholder} />
        {!valid && touched && (
          <div className="ui error message">
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }

  onSubmit = (formProps) => {
    this.props.onBoard(formProps);
  };

  render() {
    return (
      <div className="ui container">
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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

          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
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

const mapStateToProps = (state, ownProps) => ({
  IsSignedIn: state.user.IsSignedIn,
  Onboard: state.user.Onboard,
  initialValues: {
    username: ownProps.user.Username,
    college: 'NIT Kurukshetra',
  },
});

export default connect(
  mapStateToProps,
  {
    clearUser,
    userFromLocalStore,
    onBoard,
  },
)(OnBoardForm);
