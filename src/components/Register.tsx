import React from "react";
import { Button, Card, Form } from "react-bootstrap";
interface Props {}
const Register: React.FC<Props> = () => {
  const handleRegisterFlow = async () => {
    try {
      const response = await fetch("http://localhost:4000/postUsers", {
        method: "POST",
        body: JSON.stringify({ name: "Sumit Kapoor" }),
      });
    } catch (err) {
      console.log("print the error", err);
    }
  };
  return (
    <Card className="container p-20 justify-content-center align-items-center col-md-4">
      <Card.Title>Register</Card.Title>
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
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button
          className="mt-2 ml-2 align-items-center"
          onClick={handleRegisterFlow}
        >
          Register
        </Button>
      </Form>
    </Card>
  );
};

export default Register;
