import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider/useAuth';

const Signup = () => {

  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [alert, setAlert] = useState<string>('');

  const auth = useAuth();
  const navigate = useNavigate();


  async function onFinish(values: { email: string, password: string }, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    try {
      await auth.authenticate(values.email, values.password)
      navigate('/profile');

    } catch (error) {
      setAlert('Email ou senha incorretos')
      console.log(error);
    }
  }

  return (
    <>
      {alert ? <Alert variant="danger">{alert}</Alert> : null}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              type="submit"
              className="w-100"
              style={{ marginTop: '15px' }}
              onClick={(e) => onFinish({ email: emailRef.current.value, password: passwordRef.current.value }, e)}>Sign up</Button>
          </Form>
        </Card.Body>
      </Card>

    </>
  );
};

export default Signup;
