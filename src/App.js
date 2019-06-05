import React from 'react';
import './App.css';

const { PlayerRequest } = require('./proto/players/players_pb');
const { PlayerClient } = require('./proto/players/players_grpc_web_pb');

const fetchData = () => {
  const playerService = new PlayerClient('http://localhost:8080', null, null);

  const request = new PlayerRequest();
  request.setId(1);

  playerService.getPlayers(request, {}, (err, response) => {
    if (err) {
      console.log("########", err);
    }
    if (response) {
      console.log("@@@@@@@@", response.toObject());
    }
  })
};

function App() {
  return (
    <div>
      <button onClick={fetchData}>Click on me</button>
    </div>
  );
}

export default App;
