import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export function Home(props) {
    return (
        <div >
            <div className="App">
                <h1> Public Libary </h1>
            </div>
            <div className="Content">
                <p>Welcome to my public libary app</p>
            </div>
            

        </div>
       
        
        // <p> Hello this is the home page welcome to publ</p>

    );
} 

async function getBooks() {

    axios.get("http://localhost:9999/api/v1/books")
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(e => {
            console.log(e);
        });

}


// export default Navigation;