import { Form, Button } from "react-bootstrap";
import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Form id="signup">
        <Form.Group>
          <Form.Label>Email Address: </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email Address"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" placeholder="Enter Username" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            required
          />
        </Form.Group>
        <Button type="submit" variant="dark" className="w-100">
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUp;
