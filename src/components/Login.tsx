import React from "react";
import { FormControl, InputGroup, Card, Form, Button } from "react-bootstrap";
interface Props {}
const Login: React.FC<Props> = () => {
  return (
    <Card className="container p-20 justify-content-center align-items-center col-md-4">
      <Card.Title>Login</Card.Title>
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              console.log(event.currentTarget.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button className="mt-2 ml-2 align-items-center">Login</Button>
      </Form>
    </Card>
  );
};

export default Login;
