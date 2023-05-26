import React, { useState } from 'react'
import { Container, Row, Col,Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/auth';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const data = { email, password };

        dispatch(login(data, navigate));
    }
  return (
        <Container>
            <Row>
                <Col>
                {" "}
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3"
                    controlId="formbasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">we'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3"
                    controlId="formbasicPassword">
                        <Form.Label>Passwird</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />      
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
  )
}

export default Login