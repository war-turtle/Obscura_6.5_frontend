import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LoginComponent from './components/Login';
import OnboardComponent from './components/Onboard';
import Dashboard from './components/Dashboard';
import Level from './components/Level';
import LevelComponent from './components/Level/level';
import Container from './components/shared/Container';
import history from './history';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import OurTeam from './components/OurTeam';
import NotFound from './components/NotFound';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={LoginComponent} />
      <Route path="/onboard" component={OnboardComponent} />
      <Container path="/dashboard" component={Dashboard} />
      <Container exact path="/level" component={Level} />
      <Container exact path="/level/:id" component={LevelComponent} />
      <Container exact path="/team" component={OurTeam} />
      <Container exact path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
