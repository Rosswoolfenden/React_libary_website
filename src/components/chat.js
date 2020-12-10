import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/context';
import { ListGroup } from 'react-bootstrap';

export function Chat(props) {
    const { auth } = useContext(UserContext);
    const [msgs, setMsg] = useState([]);

    useEffect(() => {
        console.log(props.chat);
        if(!props.chat) {
            console.log("No chat");
        } else {
            console.log('props is ' + props.chat);
            const chatid = (props.chat).toString(); 
            console.log("Chat id is " + chatid);
            const url =  'http://localhost:9999/api/v1/requests/chat/' + chatid;
            console.log(url);
            axios({
                method: 'get',
                url: url,
                headers: {
                    "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
                }
            }).then(res => {
                console.log(res.data);
                setMsg(res.data);
            }).catch((e) => {
                console.log(e);
                alert('Failed to load chat');
            })
          

        }
    },[auth.password, auth.username, props.chat]);

    const messageList = msgs.map(msg => {
        return (
            <ListGroup.Item variant="secondary" >
                {msg.sender_name} : {msg.msg}
            </ListGroup.Item>
        )
        
    });
    return(
        <div className="chatbox">
            <h1 className="header"> Welcome to chat </h1>
            <div>
                <ListGroup>
                    {messageList}
                </ListGroup>
            </div>
            <div className>

            </div>
            
            
        </div>
    )
}