import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery";
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewBlog from "./NewBlog";
import Welcome from "./Welcome";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <React.StrictMode>
          <Switch>
            <Route path="/home" exact component={Content} />
            <Route path="/newblog" exact component={NewBlog} />
            <Route path="/" exact component={Welcome} />
          </Switch>
        </React.StrictMode>
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
