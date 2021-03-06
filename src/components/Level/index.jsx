import React, { Component } from 'react';

import { getAllLevel } from '../../services/level';
import Toast from '../shared/Toast';

class Level extends Component {
  state = { total: 0 };

  componentDidMount() {
    getAllLevel('adf')
      .then((res) => {
        this.setState({ total: res.total });
      })
      .catch((err) => {
        Toast(err.message, 'error');
      });
  }

  render() {
    return (
      <div>
        {this.state.total === 0 ? (
          <div
            className="ui loading segment"
            style={{
              marginTop: '50px',
              paddingTop: '50px',
              paddingBottom: '50px',
              backgroundColor: 'transparent',
            }}
          >
            <p />
            <p />
          </div>
        ) : (
          <div>
            {Date.now() >= 1573192800000 ? (
              <div>
                <div className="obscura-heading obscura-text-color">Choose which level to play</div>
                {Array.apply(null, Array(this.state.total)).map((elem, i) => (
                  <button
                    className="ui item white button large fluid basic"
                    key={i}
                    onClick={() => {
                      this.props.history.push(`/level/${i}`);
                    }}
                    style={{ marginTop: '30px' }}
                  >
                    Level
                    {' '}
                    {i}
                  </button>
                ))}
              </div>
            ) : (
              <h5 className="obscura-heading obscura-text-color">
                woow! It's too early, come back on 8th October around 6pm.
              </h5>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Level;
