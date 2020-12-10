import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';

export function Chat(props) {

    const [chat, SetChat] = useState();

    useEffect(() => {
        console.log(props)
        if(!props) {
            console.log("No chat");


        } else {
            console.log('props is ' + props.chat);
            SetChat(props.chat);
        }
    })
    return(
        <div className="chatbox">
            <h1 className="header"> Welcome to chat </h1>
            <p> Chat = {chat}</p>
        </div>
    )
}