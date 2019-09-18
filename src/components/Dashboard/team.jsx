import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';

import { createTeam } from '../../actions/team';
import AllTeams from './allTeams';
import Toast from '../shared/Toast';

class Team extends Component {
  state = {selectedImage: 0, teamName: ''};

  changeTeamName = (e) => {
    this.setState({ teamName: e.target.value });
  };

  createTeam = () => {
    if (this.state.teamName !== '' && this.state.selectedImage !== 0) {
      this.props.createTeam(this.state.teamName, this.state.selectedImage);
    } else {
      Toast('Fill all the field', 'error');
    }
  };

  selectImage = (i) => {
    this.setState({selectedImage: i});
  }

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
