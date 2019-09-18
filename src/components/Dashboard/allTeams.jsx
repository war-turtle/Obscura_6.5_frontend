import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllTeams, joinTeam } from '../../services/team';
import Toast from '../shared/Toast';

import './allTeams.css';

class AllTeams extends Component {
  state = {
    teams: [],
    page: 1,
    totalTeams: 0,
    teamName: '',
    teamLoading: true,
  };

  componentDidMount() {
    getAllTeams(this.state.page)
      .then((res) => {
        this.setState({ teamLoading: false, teams: res.teamsList, totalTeams: res.total });
      })
      .catch((err) => {
        this.setState({ teamLoading: false });
        console.log(err);
      });
  }

  getNewPage = (i) => {
    if (i !== this.state.page) {
      this.setState({ teamLoading: true, teams: [] });
      getAllTeams(i)
        .then((res) => {
          this.setState({
            teamLoading: false,
            teams: res.teamsList,
            totalTeams: res.total,
            page: i,
          });
        })
        .catch((err) => {
          this.setState({ teamLoading: false });
          console.log(err);
        });
    }
  };

  joinTeam = (teamID) => {
    joinTeam(teamID, this.props.userID)
      .then((res) => {
        Toast('request sent successfully', 'success');
      })
      .catch((err) => {
        Toast(err.message, 'error');
      });
  };

  render() {
    return (
      <table className="ui divided striped table" style={{ marginBottom: '30px' }}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Level</th>
            {!this.props.status && <th />}
          </tr>
        </thead>
        <tbody>
          {this.state.teams.map(team => (
            <tr key={team.id}>
              <td>
                <img style={{width: '50px'}} src={`/images/${team.imagenumber}.png`} alt="avatar"/>
              </td>
              <td>{team.name}</td>
              <td>{team.level}</td>
              {!this.props.status && (
                <td className="right aligned">
                  <button
                    className="ui green button"
                    onClick={() => {
                      this.joinTeam(team.id);
                    }}
                  >
                    Join
                  </button>
                </td>
              )}
            </tr>
          ))}
          {this.state.teamLoading
            && Array.apply(null, Array(10)).map((e, i) => (
              <tr key={i}>
                <td>
                  <div
                    className="ui segment"
                    style={{ backgroundColor: 'transparent', border: '0px' }}
                  >
                    <div className="ui active loader" />
                    <br />
                  </div>
                </td>
                <td className="right aligned">
                  <div
                    className="ui segment"
                    style={{ backgroundColor: 'transparent', border: '0px' }}
                  >
                    <div className="ui active loader" />
                    <br />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
        {this.state.totalTeams > 10 && (
          <tfoot>
            <tr>
              <th colSpan="5">
                <div className="ui right floated pagination menu">
                  {this.state.page > 1 && (
                    <button
                      className="ui icon item white button basic"
                      onClick={() => {
                        this.getNewPage(this.state.page - 1);
                      }}
                    >
                      <i className="left chevron icon" />
                    </button>
                  )}
                  {Array.apply(null, Array(Math.ceil(this.state.totalTeams / 10))).map(
                    (elem, i) => (
                      <button
                        className="ui item white button basic"
                        key={i}
                        onClick={() => {
                          this.getNewPage(i + 1);
                        }}
                      >
                        {i + 1}
                      </button>
                    ),
                  )}
                  {this.state.page !== Math.ceil(this.state.totalTeams / 10) && (
                    <button
                      className="ui white button basic icon item"
                      onClick={() => {
                        this.getNewPage(this.state.page + 1);
                      }}
                    >
                      <i className="right chevron icon" />
                    </button>
                  )}
                </div>
              </th>
            </tr>
          </tfoot>
        )}
      </table>
    );
  }
}

const mapStateToProps = state => ({
  userID: state.user.ID,
});

export default connect(
  mapStateToProps,
  null,
)(AllTeams);
