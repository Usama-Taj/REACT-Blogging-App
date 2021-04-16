import { Card } from "react-bootstrap";

const Comment = ({comment}) => {
  return (
    <Card className="border rounded p-2 my-3">
      <Card.Title>
          <h4>{comment.title}</h4>
          <small className="ml-3"><b>Pub Date:</b> {comment.pub_date}</small>
          <br/>
          <small className="ml-3"><b>By:</b> {comment.author}</small>
      </Card.Title>
      <Card.Text>
      {comment.body}
      </Card.Text>
    </Card>
  );
}
 
export default Comment;