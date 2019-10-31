import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, isValid } from 'redux-form';
import { Cat } from 'react-kawaii';

import { clearUser, userFromLocalStore, onBoard } from '../../actions/user';
import Toast from '../shared/Toast';

class OnboardComponent extends Component {
  state = { selectedImage: 0 };

  componentDidMount() {
    const { IsSignedIn, history } = this.props;
    if (!IsSignedIn) {
      history.push('/');
    } else if (this.props.Onboard) {
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
          <div className={`ui label ${valid ? 'green' : 'red'}`}>{label}</div>
          <input {...input} className="obscura-input" placeholder={placeholder} />
          <div className="ui red corner label">
            <i className="asterisk icon" />
          </div>
        </div>
        {!valid && touched && <div className="ui red pointing label">{error}</div>}
      </div>
    );
  };

  onSubmit = (formProps) => {
    if (this.state.selectedImage === 0) {
      Toast('select an avatar', 'error');
    } else {
      this.props.onBoard({ imageNumber: this.state.selectedImage, ...formProps });
    }
  };

  selectImage = (i) => {
    this.setState({ selectedImage: i });
  };

  render() {
    return (
      <div style={{ overflow: 'hidden' }} className="ui container">
        <div className="obscura-heading obscura-text-color">Just Give Us Some Basic Info</div>
        <div className="obscura-sub-heading obscura-text-color">Pick an Avatar</div>
        <div style={{ textAlign: 'center', margin: '20px 0px' }}>
          {Array.from({ length: 30 }, (v, i) => {
            if (i + 1 === this.state.selectedImage) {
              return (
                <img
                  key={i}
                  className="image"
                  style={{
                    padding: '5px 3px',
                    width: '60px',
                    border: '2px solid white',
                    borderRadius: '2px',
                  }}
                  alt="avatar"
                  src={`/images/${i + 1}.png`}
                />
              );
            }
            return (
              <img
                key={i}
                className="image"
                style={{ padding: '5px 3px', width: '60px' }}
                src={`/images/${i + 1}.png`}
                alt="avatar"
                onClick={() => this.selectImage(i + 1)}
              />
            );
          })}
        </div>

        <div className="ui two column grid">
          <div className="tablet computer only column">
            <Cat size={320} mood={`${this.props.valid ? 'lovestruck' : 'ko'}`} color="#fff" />
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
                className={`ui basic white button ${!this.props.valid && 'disabled'}`}
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
