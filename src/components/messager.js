import React, {useEffect, useState, useContext} from 'react';
import { Chat } from './chat';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../contexts/context';
// import { useHistory } from 'react-router-dom';

export function Messenger (props) { 

    const { auth } =  useContext(UserContext);
    const [chat, OpenChat] =  useState();

    useEffect((props) => {

    })
    return (
        <div>

            <h1 className="header"> We here baby </h1>
            <div className="messenger-container"> 
                
                <div className="chat-side-list-container"> 
                    left bank
                </div> 
                <div className="chat-box-container"> 
                     <Chat chat={"Ross"}/>
                </div>
            </div>
        </div>
    )
}