import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import authOperations from '../../../Redux/auth/auth-operations';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Card
        style={{ width: '400px', margin: '150px auto', borderStyle: 'none' }}
      >
        <Card.Header
          as="h2"
          style={{
            background: 'grey',
            color: 'white',
            paddingLeft: '150px',
          }}
        >
          {' '}
          Sign in
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} autoComplete="on">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  style={{ width: '350px' }}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password
                <Form.Control
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  style={{ width: '350px' }}
                />
              </Form.Label>
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              style={{
                background: 'grey',
                color: 'white',
                marginLeft: '150px',
                borderStyle: 'none',
              }}
            >
              Log in
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
