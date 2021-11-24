import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import routes from './router'

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map()
        }
      </Switch>
    </Router>
  );
}

export default App;
