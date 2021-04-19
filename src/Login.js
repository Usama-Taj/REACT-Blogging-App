import { Button, Form } from "react-bootstrap";
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Form id="login">
        <Form.Group>
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button type="submit" variant="dark" className="w-100">
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
