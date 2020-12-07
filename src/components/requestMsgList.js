import Axios from 'axios';
import React, {useEffect, useState, useContext} from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/context';


export function RequestMsgList() {  
    const [msgs, setMsgs] =  useState([]);
    const [whoreq, setWhoReq] =  useState("");
    const { auth } = useContext(UserContext)
    const history = useHistory();
    const goBackToHome = () => {
        let path ='/';
        history.push(path);
    }
    const goToMsg = (chat) => {
        let path = '/messages';
        history.push({
            pathname: path,
            chatinfo: chat
        }) 
    }
    useEffect(() => {
        Axios({
            method: 'get',
            url: 'http://localhost:9999/api/v1/requests/chats',
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }

        }).then(res => {
            console.log(res);
            if(res.data) {
                
                setMsgs(res.data);
            } 
            
        }).catch(e => {
            console.log(e);
        })
        // setHasMsgs(true);
    },[auth.username, auth.password]);

    const listMsg = (msg) => {
        return (
            <ListGroup vertica>
                <ListGroup  variant="flush">
                    <ListGroup.Item  > 
                        - 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {msg.booktitle} - 
                        <Button>  View Chat </Button>
                    </ListGroup.Item>
                    <ListGroup.Item>

                    </ListGroup.Item>
                    
                </ListGroup>
            </ListGroup>
        )
        
    }

    const msgList = msgs.map(msg => {
        console.log(msg.ownerId);
      
        return (
            <div className="book-grid" > 
                 {listMsg(msg)}
            </div>
        )
    });
    return (
        
        <div className="header" >
                <h1> Yout Messages </h1>
                {msgList}
            
        </div>
    )
}