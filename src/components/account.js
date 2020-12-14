import React, {useEffect, useState, useContext} from 'react';
import { UserContext } from '../contexts/context';
import {Form, Col, Button, InputGroup } from 'react-bootstrap';
export function Account () { 

    const { auth } =  useContext(UserContext);
    const [curbod, setCurbod] = useState();

    // const logout =
    return (
        <div>
            <div>
                <h1 className="header"> Welcome {auth.firstName}</h1>
            </div>
                {curbod ? (
                    <Button> Log in</Button>
                    
                ) : (
                    <div className="Accountbody">

                    <Button className="logout"> logout </Button>
                    <Button> Update  user </Button>
                    </ div>
                )}

        </div>
    )
}