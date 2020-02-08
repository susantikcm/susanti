import React from 'react';

import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import * as ROUTES from '../routes/routes.paths';

const Header = () => (
    <Navbar collapseOnSelect expand="md" fixed="top" variant="dark" bg="dark">
    <Navbar.Brand href={process.env.PUBLIC_URL + "/"}><strong>Tech-Challenge</strong></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.HOME}>Home</Link>
            <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
                <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.FEEDBACK} style={{color:'black'}}>Feedback</Link>
            </NavDropdown>
        </Nav>
            <Nav>
                <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.SUBSCRIPTIONS}>Subscriptions</Link>
                <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.SIGN_UP}>Sign Up</Link>
            </Nav>
    </Navbar.Collapse>
    </Navbar>
)

export default Header;

