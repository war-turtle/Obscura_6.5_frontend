import React, { Component } from 'react';

const developer = [
  {
    name: 'Kartik Yadav',
    url: '/images/team/kartik.jpg',
  },
];

const architects = [
  {
    name: 'Saurabh',
    url: '/images/team/Saurabh.jpg',
  },
  {
    name: 'Ajay',
    url: '/images/team/Ajay.jpg',
  },
  {
    name: 'Sushant Adlakha',
    url: '/images/team/SushantAdlakha.jpg',
  },
  {
    name: 'Saran',
    url: '/images/team/saran.jpg',
  },
  {
    name: 'Hemant Pandey',
    url: '/images/team/hemantPandey.jpg',
  },
  {
    name: 'Utkarsh.jpg',
    url: '/images/team/Utkarsh.jpg',
  },
];

class OurTeam extends Component {
  render() {
    return (
      <div>
        <h3 className="obscura-heading obscura-text-color">Meet the people behind ObscurA</h3>
        <h2 className="obscura-sub-heading obscura-text-color">Architects</h2>
        <div className="ui grid" style={{ textAlign: 'center' }}>
          {architects.map((ele, id) => (
            <div key={id} className="four wide column" style={{ marginBottom: '30px' }}>
              <div className="ui fluid card">
                <div className="image">
                  <img src={ele.url} alt="team" height="200px" />
                </div>
                <div className="content">
                  <div className="header">{ele.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="obscura-sub-heading obscura-text-color">Developer</h2>
        <div className="ui grid" style={{ textAlign: 'center' }}>
          {developer.map((ele, id) => (
            <div key={id} className="four wide column" style={{ marginBottom: '30px' }}>
              <div className="ui fluid card">
                <div className="image">
                  <img src={ele.url} alt="team" height="200px" />
                </div>
                <div className="content">
                  <div className="header">{ele.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default OurTeam;
