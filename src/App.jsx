import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes ,Route
} from 'react-router-dom';
// import routes from './router';
import Index from './page/Index';
import Login from './page/Login';
import NotFound from './page/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" exact element={<Index />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
