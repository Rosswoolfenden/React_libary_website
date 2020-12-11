import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/context';
import { ListGroup } from 'react-bootstrap';

export function Chatlist(props) {
    const [chats, addChats] = useState([]);
    
    const { auth } = useContext(UserContext);

    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:9999/api/v1/requests/chats',
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            console.log(res);
            if(res.data) {
                addChats(res.data);
            } 
        }).catch(e => {
            console.log(e);
        })
        // setHasMsgs(true);
    },[auth.username, auth.password]);

    const chooseChat = (chat) =>{
        console.log("The chat values object is " + chat.target.value);
        console.log(chat.target.value);
        // props.
        console.log(chat);
        props.setChat(chat.target.value);
    }

    const chatlist = chats.map(chat => {
        return (
            <ListGroup.Item action varient="secondary" value={chat.ID} name="chat" onClick={chooseChat}>
                Book : {chat.booktitle}
            </ListGroup.Item>
            
        )
    })

    return (
        <div className="chatlist">
            <h1> This is the chat list </h1>
            <ListGroup>
                {chatlist}
            </ListGroup>
            
             
        </div>
    )
}