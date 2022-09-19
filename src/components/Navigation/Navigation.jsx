import React from 'react';
import authSelectors from '../../Redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return (
    <Container>
      <Row>
        <Col>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
        </Col>
        {isLoggedIn && (
          <Col>
            <Nav.Link as={NavLink} to="/contacts">
              Contacts
            </Nav.Link>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Navigation;
