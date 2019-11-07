import React, { Component } from 'react';

const developer = [
  {
    name: 'Kartik Yadav',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnshulMalik.jpg',
  },
  {
    name: 'Saurabh',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AryanKaul.jpg',
  },
  {
    name: 'Saurabh',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AryanKaul.jpg',
  },
  {
    name: 'Saurabh',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AryanKaul.jpg',
  },
  {
    name: 'Saurabh',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AryanKaul.jpg',
  },
  {
    name: 'Kartik Yadav',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AnshulMalik.jpg',
  },
  {
    name: 'Saurabh',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AryanKaul.jpg',
  },
  {
    name: 'Saurabh',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AryanKaul.jpg',
  },
  {
    name: 'Saurabh',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AryanKaul.jpg',
  },
  {
    name: 'Saurabh',
    url:
      'https://raw.githubusercontent.com/war-turtle/Obscura_5.5_frontend/master/public/images/team/AryanKaul.jpg',
  },
];

class OurTeam extends Component {
  render() {
    return (
      <div>
        <h3 className="obscura-heading obscura-text-color">Meet the people behind ObscurA</h3>
        <h2 className="obscura-sub-heading obscura-text-color">Developer</h2>
        <div className="ui grid" style={{ textAlign: 'center' }}>
          {developer.map(ele => (
            <div className="four wide column" style={{ marginBottom: '30px' }}>
              <div className="ui fluid card">
                <div className="image">
                  <img src={ele.url} height="200px" />
                </div>
                <div className="content">
                  <a className="header">{ele.name}</a>
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
