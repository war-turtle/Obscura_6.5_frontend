import React, { Component } from 'react';

import { getLevel } from '../../services/level';

class Level extends Component {
  componentDidMount() {
    getLevel(1).then((res) => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <div>wow</div>
      </div>
    );
  }
}

export default Level;
