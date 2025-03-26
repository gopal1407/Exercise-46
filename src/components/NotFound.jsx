import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import errorImage from '../assets/404-image.jpg'; // Replace with your actual image path

const NotFound = () => {
  return (
    <div className="bg-light text-center min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center align-items-center">
          {/* 📸 Left side image */}
          <Col md={6}>
            <Image src={errorImage} fluid rounded alt="404 Not Found" />
          </Col>

          {/* 💬 Right side message */}
          <Col md={6}>
            <h1 className="display-4 text-danger mb-3">404 - Page Not Found</h1>
            <p className="lead text-muted mb-4">
              Oops! The page you're looking for doesn’t exist.
            </p>
            <NavLink to="/">
              <Button variant="primary" size="lg">
                Go Back Home
              </Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
