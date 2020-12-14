import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {Adresspopup} from './adresspopup';
import { UserContext } from '../contexts/context';
import { ListGroup, Button } from 'react-bootstrap';

export function Chat(props) {
    const { auth } = useContext(UserContext);
    const [msgs, setMsg] = useState([]);
    const [newMsg, setNewMsg] = useState();
    const [owner, setOwner] = useState(false);
    const [sender, setSender] =  useState();
    const [details, setDetails] =  useState({});
    const [booktitle, setBooktile] = useState();
    const [adress, showAdress] = useState(false);

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
        console.log(props);
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
                const ownid = res.data[0].ownerId;
                let own = false;
                if(ownid === auth.ID) {
                    console.log("owner is true");
                    setSender(res.data[0].requesterId);
                    own = true;
                }
                let chatinfo = res.data[0];
                console.log(chatinfo);
                setDetails({ownerId: chatinfo.ownerId, requesterId: chatinfo.requesterId, bookId: chatinfo.bookId});
                setBooktile(chatinfo.booktitle);
                setMsg(res.data);
                setOwner(own);
            }).catch((e) => {
                console.log(e);
                alert('Failed to load chat');
            })
          

        }
    },[auth.ID, auth.password, auth.username, props, props.chat]);

    
    const acceptReq = async() => {
        axios({
            method: 'post',
            url: 'http://localhost:9999/api/v1/requests/accept',
            data: {
                bookId: details.bookId
            },
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            alert("Set to on loan")
        }).catch(e => {
            console.log(e);
            alert("Failed to set as on lona")
        })
    }
    const messageList = msgs.map(msg => {
        return (
            <ListGroup.Item variant="secondary" >
                {msg.sender_name} : {msg.msg}
            </ListGroup.Item>
        )
        
    });

    const getAdress = async() => {

    }
    return(
        <div className="chatbox">
            {adress ? (
                <div> 
                    <Adresspopup userid={sender} openWindow={showAdress}/>
                </div>
            ) : (
                <div> </div>
            )}

            {owner ? (
                <div className="topbarchat">

                    <h1 className="chathead"> Chat </h1>
                    <Button varient="success" onClick={acceptReq}> Mark as on lonad</Button>
                    <Button className="chattopbutton" varient="secondary" onClick={() => {showAdress(true)}} > Get user info </Button>
                    
                </div>
            ) : (
                <h1 className="header"> Chat </h1>
            )}
            
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