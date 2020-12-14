import React, {useContext} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
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
                <Nav.Link href="/addbook"> 
                    <Link to="/addbook" className="nav-link">Add Book</Link>
                </Nav.Link>
                <Nav.Link href="/updatebook">
                    <Link to="/updatebook" className="nav-link"> Your Books </Link>
                </Nav.Link>
                <Nav.Link href="/messenger">
                    <Link to="/messenger" className="nav-link"> Chat </Link>
                </Nav.Link>
                
                
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