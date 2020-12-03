import React, {useState} from 'react';
import axios from 'axios';

import {Form, Col, Button, InputGroup } from 'react-bootstrap';

export function Login(props){

    const userFeilds = {
        username: "",
        password: ""
    };

    const [user, setUser] = useState(userFeilds);

    return (
        <div >
            <div className="App">
                <h1> Log in </h1>
                <h2> Confirm Email and then log in!</h2>
            </div>
        </div>
    )

}
