import { Card } from "react-bootstrap";
import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className="border rounded p-2 my-3">
        <Card.Title>
          <h4>{this.props.comment.title}</h4>
          <small className="ml-3">
            <b>Pub Date:</b> {this.props.comment.pub_date}
          </small>
          <br />
          <small className="ml-3">
            <b>By:</b> {this.props.comment.author}
          </small>
        </Card.Title>
        <Card.Text>{this.props.comment.body}</Card.Text>
      </Card>
    );
  }
}

export default Comment;
