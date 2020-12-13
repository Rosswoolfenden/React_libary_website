import React, {useState, useContext} from 'react';
import { UserContext } from '../contexts/context';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export function Sendrequest(props) { 
    const { auth }  = useContext(UserContext);
    const [msg, setMsg] = useState();

    // owner id
    const handleChange = (event) => {
        setMsg({...msg, [event.target.name]: event.target.value});
        console.log(msg);
    }


    const submit = (event) => { 
        console.log(props.bookId.ID);
        const data = {
            "bookId": props.bookId.ID,
            "msg": msg.msg
        };
        axios({
            method: 'post',
            url: 'http://localhost:9999/api/v1/requests/sendRequest',
            data: data,
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            alert("Succsefully sent book request!");
            props.close();
        }).catch(e => {
            console.log(e);
            alert("Failed to send book request, please try again ");
            props.close();
        });
        props.close();
        
    }
    return (
        <div className="msg_popup" >
            <h3> Send a message with your request!</h3>
            <div className="chat-message">
                <input className="send-input" name="msg" onChange={handleChange} placeholder="Enter your message"/>
                <Button varient="success" onClick={submit}> Send! </Button>
            </div>
    </div>
    )
}