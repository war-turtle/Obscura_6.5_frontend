import React, { Component } from 'react';

const developer = [
  {
    name: 'Anshul Malik',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnshulMalik.jpg',
  },
  {
    name: 'Anuj Sir',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnujSharma.jpg',
  },
  {
    name: 'Anshul Malik',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnshulMalik.jpg',
  },
  {
    name: 'Anuj Sir',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnujSharma.jpg',
  },
  {
    name: 'Anshul Malik',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnshulMalik.jpg',
  },
  {
    name: 'Anuj Sir',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnujSharma.jpg',
  },
  {
    name: 'Anshul Malik',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnshulMalik.jpg',
  },
  {
    name: 'Anuj Sir',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnujSharma.jpg',
  },
  {
    name: 'Anshul Malik',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnshulMalik.jpg',
  },
  {
    name: 'Anuj Sir',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnujSharma.jpg',
  },
  {
    name: 'Anshul Malik',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnshulMalik.jpg',
  },
  {
    name: 'Anuj Sir',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnujSharma.jpg',
  },
  {
    name: 'Anshul Malik',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnshulMalik.jpg',
  },
  {
    name: 'Anuj Sir',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnujSharma.jpg',
  },
];

class OurTeam extends Component {
  render() {
    return (
      <div>
        <h3 className="obscura-heading obscura-text-color">Meet the people behind ObscurA</h3>
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
