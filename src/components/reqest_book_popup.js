import React, {useState, useContext} from 'react';
import { UserContext } from '../contexts/context';
import { ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';

export function Sendrequest(props) { 
    const { auth }  = useContext(UserContext);
    const [msg, setMsg] = useState();
    
    const handleChange = (event) => {
        setMsg({...msg, [event.target.name]: event.target.value});
        console.log(msg);
    }
    const submit = (event) => {

    }
    return (
        <div className="msg_popup">
            <div className="chat-message">
                <input className="send-input" name="msg" onChange={handleChange} placeholder="Enter your message"/>
                <Button varient="success" onClick={submit}> Send! </Button>
            </div>
    </div>
    )
}