import Comment from "./Comment";

const CommentList = ({comments}) => {
  return (<div className="border border-dark">{comments.map(comment => <Comment key={comment.id} comment={comment} />)}</div>);
}
 
export default CommentList;