import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../actions/user';
import { createTeam, acceptUser } from '../../actions/team';
import Team from './team';
import AllTeams from './allTeams';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        {parseInt(this.props.userTeamID) === 0 ? (
          <Team />
        ) : (
          <div>
            <h1 className="ui centered header" style={{ margin: '50px 0' }}>
              Dashboard
            </h1>
            <h2 className="ui centered header">Your Team</h2>
            <table className="ui divided table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Level</th>
                  <th>Requests</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Name">{this.props.team.name}</td>
                  <td data-label="Age">{this.props.team.level}</td>
                  <td data-label="Job">{this.props.team.requests.length}</td>
                </tr>
              </tbody>
            </table>

            {this.props.team.requests.length > 0 && (
              <table className="ui divided stripped table">
                <thead>
                  <tr>
                    <th colSpan="2">Requests</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.team.requests.map(request => (
                    <tr key={request.id}>
                      <td>{request.name}</td>
                      <td className="right aligned">
                        <button
                          className="ui green button"
                          onClick={() => {
                            this.props.acceptUser(request.id);
                          }}
                        >
                          Accept
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <h2 className="ui header centered">
              Other teams
            </h2>
            <AllTeams status={true}/>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userTeamID: state.user.TeamID,
  team: state.team,
});

export default connect(
  mapStateToProps,
  {
    createTeam,
    acceptUser,
    getUser,
  },
)(Dashboard);
