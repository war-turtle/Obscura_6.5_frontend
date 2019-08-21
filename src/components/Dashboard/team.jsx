import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';

import { createTeam } from '../../actions/team';
import AllTeams from './allTeams';

class Team extends Component {
  changeTeamName = (e) => {
    this.setState({ teamName: e.target.value });
  };

  createTeam = () => {
    if (this.state.teamName !== '') {
      this.props.createTeam(this.state.teamName);
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Modal
          trigger={(
            <button className="ui white basic large button">
              <i className="plus icon" />
              Create a Team
            </button>
)}
          basic
          size="small"
        >
          <h1 className="ui header">Create a Team</h1>
          <Modal.Content>
            <div className="ui labeled fluid input">
              <div className="ui label">team name</div>
              <input type="text" placeholder="ninja ka panja" onChange={this.changeTeamName} />
            </div>
          </Modal.Content>
          <Modal.Actions>
            <button className="ui green basic button" onClick={this.createTeam}>
              Create
            </button>
          </Modal.Actions>
        </Modal>

        <div className="ui horizontal divider obscura-text-color">Or</div>
        <h1 className="obscura-sub-heading obscura-text-color">Join a Team</h1>

        <AllTeams status={false}/>
      </div>
    );
  }
}

export default connect(
  null,
  {
    createTeam,
  },
)(Team);
