import Comment from "./Comment";
import React from "react";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="border border-dark">
        {this.props.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }
}

export default CommentList;
