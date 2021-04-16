import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery';
import Header from './Header';
import Content from './Content';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
      <Header />
      <Content />
      </Router>
    </React.StrictMode>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));