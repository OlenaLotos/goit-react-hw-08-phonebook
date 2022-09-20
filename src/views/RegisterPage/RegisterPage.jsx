import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.register(user));
    setUser(initialState);
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
            paddingLeft: '10px',
          }}
        >
          {' '}
          Please, create your account!
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} autoComplete="on">
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>
                Name
                <Form.Control
                  type="text"
                  name="name"
                  value={user.name}
                  placeholder="Enter name"
                  onChange={handleChange}
                  style={{ width: '350px' }}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="Enter email"
                  onChange={handleChange}
                  style={{ width: '350px' }}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password
                <Form.Control
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="Enter password"
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
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
