import { Card } from "react-bootstrap";
import CommentList from "./CommentList";
import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { CommentsShown: false };
  }
  render() {
    const showComments = () => {
      this.setState({ CommentsShown: true });
    };
    return (
      <Card className="border rounded p-2 my-3">
        <Card.Title>
          <h4>{this.props.post.title}</h4>
          <small className="ml-3">
            <b>Pub Date:</b> {this.props.post.pub_date}
          </small>
          <br />
          <small className="ml-3">
            <b>By:</b> Author Name
          </small>
        </Card.Title>
        <Card.Text>{this.props.post.body}</Card.Text>
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
          {this.state.CommentsShown && (
            <CommentList comments={this.Postprops.post.comments} />
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default Post;
