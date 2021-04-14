import Post from "./Post";

const PostList = ({users, isPending, error}) => {
  return (<>
    {isPending && <h4>Loading...</h4> }
    {error && <h4>{error}</h4> }
    {users && users.map((user) => user.posts.map((post)=><Post post={post} key={post.id} />))}
    </>
  );
}
 
export default PostList;