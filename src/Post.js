import { useState } from "react";
import { Card } from "react-bootstrap";
import CommentList from "./CommentList";

const Post = ({ post }) => {
  const [CommentsShown, setCommentsShown] = useState(false);
  const showComments = () => {
    setCommentsShown(true);
  };
  return (
    <Card className="border rounded p-2 my-3">
      <Card.Title>
        <h4>{post.title}</h4>
        <small className="ml-3">
          <b>Pub Date:</b> {post.pub_date}
        </small>
        <br />
        <small className="ml-3">
          <b>By:</b> Author Name
        </small>
      </Card.Title>
      <Card.Text>{post.body}</Card.Text>
      <Card.Body className="p-2 m-1 nav-item">
        <Card.Link
          className="nav-item nav-link"
          style={{
            cursor: "pointer",
          }}
          onClick={() => showComments()}
        >
          Show Comments
        </Card.Link>
        {CommentsShown && <CommentList comments={post.comments} />}
      </Card.Body>
    </Card>
  );
};

export default Post;
