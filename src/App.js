import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import LoginComponent from './components/Login';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={LoginComponent} />
    </div>
  </Router>
);

export default App;
