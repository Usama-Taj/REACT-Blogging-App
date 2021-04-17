import { Button, Form } from "react-bootstrap";

const Login = () => {
  return ( 
    <Form>
      <Form.Group>
        <Form.Label>Username: </Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button type="submit" variant="dark" className="w-100">Login</Button>
    </Form>
  );
}
 
export default Login;