import { Card } from "react-bootstrap";

const Comment = () => {
  return (
    <Card className="border rounded p-2 my-3">
      <Card.Title>
          <h4>My First Post</h4>
          <small className="ml-3">Pub Date: </small>
      </Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card.Text>
    </Card>
  );
}
 
export default Comment;