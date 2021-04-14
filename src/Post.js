import { Card } from "react-bootstrap";

const Post = ({post}) => {
  return (
    <Card className="border rounded p-2 my-3">
    <Card.Title>
        <h4>{post.title}</h4>
        <small className="ml-3">Pub Date: {post.pub_date}</small>
    </Card.Title>
    <Card.Text>
    {post.body}
    </Card.Text>
    <Card.Body className="p-2 m-1">
      <Card.Link href="\">Show Comments</Card.Link>
    </Card.Body>
  </Card>
  );
}
 
export default Post;