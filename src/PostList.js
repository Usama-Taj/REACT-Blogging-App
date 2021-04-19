import Post from "./Post";
import React from "react";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.isPending && <h4>Loading...</h4>}
        {this.props.error && <h4>{this.props.error}</h4>}
        {this.props.users &&
          this.props.users.map((user) =>
            user.posts.map((post) => <Post post={post} key={post.id} />)
          )}
      </>
    );
  }
}

export default PostList;
