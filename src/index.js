import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery';
import Header from './Header';
import Content from './Content';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBlog from './NewBlog';
import Welcome from './Welcome';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
      <Header />
      <Switch>
        <Route path="/home" exact component={Content} />
        <Route path="/newblog" component={NewBlog} />
        <Route path="/" component={Welcome} />
      </Switch>
      </Router>
    </React.StrictMode>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));