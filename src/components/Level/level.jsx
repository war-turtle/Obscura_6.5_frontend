import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getLevel, checkAnswer } from '../../services/level';
import history from '../../history';
import Toast from '../shared/Toast';

class LevelComponent extends Component {
  state = {
    html: '',
    js: '',
    urlalias: '',
    number: -1,
    name: '',
    answer: '',
    final: false,
  };

  componentDidMount() {
    getLevel(this.props.match.params.id, this.props.TeamId)
      .then((res) => {
        this.setState({ ...res, final: res.pb_final });
      })
      .catch((err) => {
        if (err.code === 11 || err.code === 5) {
          history.push('/level');
        }
        Toast(err.message, 'error');
      });
  }

  componentDidUpdate() {
    if (this.state.js !== '') {
      eval(this.state.js);
    }
    if (
      this.state.urlalias !== ''
      && this.props.location.search !== `?ans=${this.state.urlalias}`
    ) {
      history.push(`/level/${this.state.number}?ans=${this.state.urlalias}`);
    }
  }

  changeAnswer = (e) => {
    e.preventDefault();
    this.setState({ answer: e.target.value });
  };

  submitAnswer = () => {
    checkAnswer(this.state.answer, this.state.number, this.props.TeamId)
      .then((res) => {
        console.log(res);
        if (res.valid) {
          Toast('Right answer', 'success');
          history.push('/level');
        } else {
          Toast('Wrong Answer', 'error');
        }
        this.setState({ answer: '' });
      })
      .catch((err) => {
        Toast(err.message, 'error');
        this.setState({ answer: '' });
      });
  };

  render() {
    return (
      <div>
        {this.state.number === -1 ? (
          <div className="ui loading segment" style={{marginTop: '50px', paddingTop: '50px', paddingBottom: '50px', backgroundColor: 'transparent'}}>
            <p></p>
            <p></p>
          </div>
        ) : this.state.final ? (
          <div className="obscura-heading obscura-text-color">Game Finished</div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div className="obscura-heading obscura-text-color">{this.state.name}</div>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.html }}
              style={{ margin: '100px 0px' }}
            />
            <div className="ui field" style={{margin: "0px 0px 10px 0px"}}>
              <div className="ui corner labeled input">
                <input
                  id="ans"
                  className="obscura-input"
                  placeholder="Enter the answer"
                  onChange={this.changeAnswer}
                  value={this.state.answer}
                />
              </div>
            </div>

            <button
              id="submit"
              className={`ui basic white button ${!this.state.answer && 'disabled'}`}
              type="submit"
              onClick={this.submitAnswer}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  TeamId: state.team.ID,
});

export default connect(
  mapStateToProps,
  null,
)(LevelComponent);
