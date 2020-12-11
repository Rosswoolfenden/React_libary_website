import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/context';
import { ListGroup, Button } from 'react-bootstrap';

export function Chat(props) {
    const { auth } = useContext(UserContext);
    const [msgs, setMsg] = useState([]);
    const [newMsg, setNewMsg] = useState();
    const [owner, setOwner] = useState(false);
    const [details, setDetails] =  useState({});

    const handleChange = async(event) => {
        setNewMsg({...newMsg, [event.target.name]: event.target.value});
    }

    const acceptreq = async(event) => {
        
        let body = details;
        body.msg = newMsg.msg;
        body.sender_name = auth.firstName;
        body.chatid = props.chat;
        setMsg(msg => [...msg, body]);
        const url ='http://localhost:9999/api/v1/requests/sendmsg';
        sendMsgRequest(url, body);
        console.log(body);

    }
    const checkUser = async(reqId, ownId) => {
        if(reqId == auth.ID) {
            console.log("sender");
        } else {
            console.log("R  eceucer");
        }
    }

    const sendMsgRequest = async(url, body) => {
        axios({
            method: 'post',
            url: url,
            data: body,
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            console.log(res);
            alert("Message sent");
        }).catch(e => {
            console.log('failed to send message');
            alert("Failed to send message :(");
        })
    }
    useEffect(() => {
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
                console.log(res);
                const ownid = res.data[0].ownerId;
                let own = false;
                if(ownid === auth.ID) {
                    console.log("owner is true");
                    own = true;
                }
                console.log(res.data[0])
                let chatinfo = res.data[0];
                setDetails({ownerId: chatinfo.ownerId, requesterId: chatinfo.requesterId, bookId: chatinfo.bookId});
                setMsg(res.data);
                setOwner(own);
            }).catch((e) => {
                console.log(e);
                alert('Failed to load chat');
            })
          

        }
    },[auth.ID, auth.password, auth.username, props.chat]);

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
            {owner ? (
                <div className="chat-message">
                    <input className="send-input" name="msg" onChange={handleChange} placeholder="Enter your message"/>
                    <Button varient="success" onClick={acceptreq}> Accept! </Button>
                </div>
            ) : (
                <div className="chat-message">
                    <input className="send-input" name="msg" onChange={handleChange} placeholder="Enter your message"/>
                    <Button varient="success"> Send! </Button>
                </div>
            )}
            
            
            
        </div>
    )
}