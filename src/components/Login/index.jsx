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

  componentDidMount() {
    const bgColors = [
      ['#ba68c8', '#4a148c'],
      ['#e57373', '#b71c1c'],
      ['#90caf9', '#0d47a1'],
      ['#4db6ac', '#004d40'],
      ['#a5d6a7', '#1b5e20'],
      ['#ff8a65', '#bf360c']
    ]
    const rand = Math.floor(Math.random() * bgColors.length);
    document.documentElement.style.setProperty('--bg-color-primary', bgColors[rand][0]);
    document.documentElement.style.setProperty('--bg-color-secondary', bgColors[rand][1]);

    const canvas = this.refs.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext('2d');

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    function Circle(x, y, dx, dy, radius, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = color;
      this.opacity = Math.random();
      this.dOpacity = Math.random() * 0.01;

      this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.fillStyle = `rgba(${this.color.r}, ${this.color.b}, ${this.color.g}, ${this.opacity})`;
        c.fill();
        c.closePath();
      };

      this.update = () => {
        if (this.x > window.innerWidth || this.x < 0) {
          this.dx = -this.dx;
        }

        if (this.y > window.innerHeight || this.y < 0) {
          this.dy = -this.dy;
        }

        if (this.opacity >= 1 || this.opacity <= 0) {
          this.dOpacity = -this.dOpacity;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.opacity += this.dOpacity;

        this.draw();
      };
    }

    const colors = [
      { r: 255, b: 255, g: 255 },
    ];
    const circleCount = 50;
    const circles = [];

    function init() {
      for (let i = 0; i < circleCount; i++) {
        const radius = Math.random() * 5;
        const x = Math.random() * (window.innerWidth - radius * 2) + radius;
        const y = Math.random() * (window.innerHeight - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        circles.push(new Circle(x, y, dx, dy, radius, color));
      }
    }

    const animate = () => {
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < circles.length; i++) {
        circles[i].update();
      }

      requestAnimationFrame(animate);
    };

    animate();
    init();
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
    return buttonLoading ? 'large ui white disabled loading button' : 'large ui white basic button';
  };

  render() {
    return (
      <div>
        <canvas ref="canvas" className="canvas" />
        <div className="one-page-middle">
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h1 className="obscura-heading obscura-text-color">ObscurA</h1>
            <button type="button" className={this.buttonClasses()} onClick={this.onSignIn}>
              <i className="google icon" />
              Google Login
            </button>
          </div>
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
