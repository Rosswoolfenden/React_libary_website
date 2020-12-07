import Axios from 'axios';
import React, {useEffect, useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/context';


export function RequestMsgList() {  
    const [msgs, setMsgs] =  useState([]);
    const [hasMsgs, setHasMsgs] =  useState(false);
    const { auth } = useContext(UserContext)
    const history = useHistory();
    const goBackToHome = () => {
        let path ='/';
        history.push(path);
    }
    const goToMsg = (book) => {
        let path = '/send';
        history.push({
            pathname: path,
            Book: book
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
            if(!res.data) {
                setHasMsgs(false);
            } else {
                setHasMsgs(false);
            }
            setMsgs(res.data);
        }).catch(e => {
            console.log(e);
        })
    },[auth.username, auth.password]);

    const listMsg = (msg) => {
        
    }

    const msgList = msgs.map(msg => {
        return (
            <div> 
                {listMsg(msg)}
            </div>
        )
    });
    return (
        <div>
            {hasMsgs ? (
                <div> you have messages </div>
            ) : (
                <div>
                    <h1 className="header"> You have no messages </h1>
                </div>
                
            )}
            
        </div>
    )
}