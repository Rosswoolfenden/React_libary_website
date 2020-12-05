import React, {useContext} from 'react';
import {Navbar, Nav, Button, FormControl, Form} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { UserContext } from '../contexts/context';

export function Navigation() {
    const { auth } = useContext(UserContext);    
    return (
        // <h1> HELLO </h1>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Public Libary </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/"> 
                    <Link to="/" className="nav-link">Home</Link>
                </Nav.Link>
                <Nav.Link href="/books"> 
                    <Link to="/books" className="nav-link">Books</Link>
                </Nav.Link>
                <Nav.Link href="/addbook">
                    <Link to="/addbook" className="nav-link">Add</Link>
                </Nav.Link>
                
                
                {/* <NavDropdown href="/account" bg="light" variant="dark" title="Account" id="basic-nav-dropdown">
                    <NavDropdown  variant="dark"> View Books </NavDropdown>
                    <NavDropdown > Settings </NavDropdown>
                    <NavDropdown> Log out </NavDropdown>
                </NavDropdown> */}
            </Nav>
            {auth ? (
                <Nav >
                    <Nav.Link href="/register"> 
                        <Link to="/account" className="nav-link">Account</Link>
                    </Nav.Link>
                </Nav>
                    

                ) : (
                    <Nav>
                        <Nav.Link href="/register"> 
                            <Link to="/login" className="nav-link">Login</Link>
                        </Nav.Link>
                        <Nav.Link href="/register"> 
                            <Link to="/register" className="nav-link">Register</Link>
                        </Nav.Link>

                    </Nav>
                    
                )}

            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success"> Search </Button>
            </Form> */}
      </Navbar>

    );
} 