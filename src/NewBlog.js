import { Button, Col, Container, Form, Row } from "react-bootstrap";
const NewBlog = () => {
  const submitBlog = (e) => {
    const form = document.getElementById("blog-form");
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: {
        posts: {
          author: "abc",
          title: form.title.value,
          body: form.body.value,
        },
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("Request succeeded with JSON response", data))
      .catch((err) => console.log("Request Failed", err));
    e.preventDefault();
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center my-5">
        <Col md="6" className="border border-dark rounded">
          <h2 className="text-center">Write Your Own Blog</h2>
          <Form id="blog-form" onSubmit={submitBlog}>
            <Form.Group>
              <Form.Label className="mt-2">Title: </Form.Label>
              <Form.Control
                name="title"
                id="title"
                type="text"
                placeholder="Enter Blog Title"
                required
              />
              <Form.Label className="mt-2">Body: </Form.Label>
              <Form.Control
                name="body"
                id="body"
                as="textarea"
                placeholder="Enter Blog Body"
                rows={5}
                style={{ resize: "none" }}
                required
              />
              <Button variant="dark" type="submit" className="w-100 my-2">
                Save
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewBlog;
