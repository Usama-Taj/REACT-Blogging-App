import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery';
import Header from './Header';

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      
    </React.StrictMode>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));