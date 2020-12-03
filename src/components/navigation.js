import React from 'react';
import {Navbar, Nav, Button, FormControl, Form, NavDropdown} from 'react-bootstrap';

export function Navigation(props) {
    return (
        // <h1> HELLO </h1>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Public Libary </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/books">Books</Nav.Link>
                <Nav.Link href="/addbook"> Add Book </Nav.Link>
                <Nav.Link href="/register"> Register</Nav.Link>
                {/* <NavDropdown href="/account" bg="light" variant="dark" title="Account" id="basic-nav-dropdown">
                    <NavDropdown  variant="dark"> View Books </NavDropdown>
                    <NavDropdown > Settings </NavDropdown>
                    <NavDropdown> Log out </NavDropdown>
                </NavDropdown> */}
            </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success"> Search </Button>
            </Form>
      </Navbar>

    );
} 