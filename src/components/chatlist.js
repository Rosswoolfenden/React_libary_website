import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/context';

export function Chatlist() {
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


    return (
        <div className="chatlist">
            <h1> This is the chat list </h1>
        </div>
    )
}