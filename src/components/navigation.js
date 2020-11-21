import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Button, FormControl, Form, NavDropdown} from 'react-bootstrap';

export function Navigation(props) {
    return (
        // <h1> HELLO </h1>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Public Libary </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/books">Books</Nav.Link>
                <NavDropdown href="/account" bg="dark" variant="dark" title="Account" id="basic-nav-dropdown">
                    <NavDropdown> View Books </NavDropdown>
                    <NavDropdown> Settings </NavDropdown>
                    <NavDropdown> Log out </NavDropdown>
                </NavDropdown>
            </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success"> Search </Button>
            </Form>
      </Navbar>

    );
} 

// export default Navigation;