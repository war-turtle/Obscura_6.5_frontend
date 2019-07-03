import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LoginComponent from './components/Login';
import OnboardComponent from './components/Onboard';
import Dashboard from './components/Dashboard';
import Container from './components/shared/Container';
import history from './history';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={LoginComponent} />
      <Container path="/onboard" component={OnboardComponent} />
      <Container path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default App;
