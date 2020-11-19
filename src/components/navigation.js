import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export function Navigation(props) {
    return (
        // <h1> HELLO </h1>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >Public Libary </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Books</Nav.Link>
                <Nav.Link >Login</Nav.Link>
            </Nav>
      </Navbar>

    );
} 

// export default Navigation;