import React,{useRef} from "react";
import { Form, Button, Card } from "react-bootstrap";

const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required/>
            </Form.Group>
            <Button type="submit" className="w-100" style={{marginTop: '15px'}}>Sign up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an Account? Log in
      </div>
    </>
  );
};

export default Signup;
