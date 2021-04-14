import {Card, Col, Container, Row} from 'react-bootstrap';
const Content = () => {
  return (
      <Container>
        <Row>
          <Col md="8" className="border border-dark vh-100">
          <h1>Your Blogs</h1>
            <Card className="border rounded p-2 my-3">
              <Card.Title>
                  <h4>My First Post</h4>
                  <small className="ml-3">Pub Date: </small>
              </Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Text>
              <Card.Body className="p-2 m-1">
                <Card.Link href="\#">Show Comments</Card.Link>
              </Card.Body>
            </Card>
            
          </Col>
          
        </Row>
      </Container>
  );
}
 
export default Content;