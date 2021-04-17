import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from "./Login";
import SignUp from "./SignUp";
import './style/style.css';

const Welcome = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col id="welcome" md="6">
            <h1 class="my-text-one center"><b>Welcome to My Blogging App</b></h1>
            <h4 class="my-text-two center">
              <b>
                Hello Everyone, This app is created for people who wants to write blogs and share them with other people on this platform. This app is just for practice purposes. It is not suitable for deployement and running in the production environment.
              </b>
              </h4>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#login">
                  <Nav.Item>
                      <Link className="nav-link active"  to="/login">Login</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Switch>
                  <Route path='/login' component={Login} />
                  <Route path='/signup' component={SignUp} />
                </Switch>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default Welcome;