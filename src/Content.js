import {Col, Container, Row} from 'react-bootstrap';
import PostList from './PostList';
import useFetch from './useFetch';
const Content = () => {
  const {data: users, isPending, error} = useFetch('http://localhost:5000/users');
  return (
      <Container>
        <Row>
          <Col md="8" className="border border-dark h-100">
          <h1>Your Blogs</h1>
          <PostList users={users} isPending={isPending} error={error} />
          </Col>
        </Row>
      </Container>
  );
}
 
export default Content;