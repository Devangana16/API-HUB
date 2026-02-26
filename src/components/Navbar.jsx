import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="white" expand="lg" sticky="top" className="py-3 shadow-sm border-bottom">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold d-flex align-items-center">
                    <span className="text-primary fs-3 me-2">✦</span>
                    <span className="text-dark">API</span>
                    <span className="text-primary">HUB</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center mt-2 mt-lg-0">
                        <Nav.Link as={NavLink} to="/" end className="mx-2">Home</Nav.Link>

                        <NavDropdown title="Explore" id="api-dropdown" className="mx-2">
                            <NavDropdown.Item as={NavLink} to="/weather">Weather</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/recipes">Recipes</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/products">Products</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/movies">Movies</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/finance">Finance</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/news">News</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={NavLink} to="/about" className="mx-2">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="mx-2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
