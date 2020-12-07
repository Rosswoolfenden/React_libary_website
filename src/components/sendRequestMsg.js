import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../contexts/context';
import { useHistory } from 'react-router-dom';
// import nobook from '../img/nobook.png';

export function SendRequestMsg(props) {
    const { auth } = useContext(UserContext);

    const [chats, setChats] =  useState([]);
    const [newmsg, setMsg] = useState({msg: ""});
    const [book, setBook] = useState();
    const location = useLocation();
    const history = useHistory();

    const goBackToHome = () => {
        let path ='/';
        history.push(path);
    }
    useEffect(() => {
        setBook(location.Book);
        const owner = (location.Book.ownerId).toString();
        const APIurl = 'http://localhost:9999/api/v1/requests/getSent/' + owner;
        const testURL = 'http://localhost:9999/api/v1/requests/getSent/11' 
        console.log(APIurl);
        axios({
            method: 'get',
            url: APIurl,
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            console.log(res.data);
            if(!res.data) {
                console.log("No chats");
            } else {
                setChats(res.data);
            }

        })
        .catch(e => {
            alert("Failed to get Book data");
            console.log(e);
        })

    },[auth.password, auth.username, book, location.Book]);

    const handleChange = async(event) => {
        setMsg({...newmsg, [event.target.name] : event.target.value});
        console.log(newmsg);
    }

    const submit = async() => {
        console.log("submit has been called");
        const msg = "I REQUEST BOOK - " + book.title + " - " + newmsg.msg;
        console.log(msg);
        const data = {
            "bookId": book.ID,
            "msg": msg
        }
        await sendmsg(data);
    }
    const sendmsg = async(data) => {
        axios({
            method: 'post',
            url: 'http://localhost:9999/api/v1/requests/sendRequest',
            data: data,
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            console.log(res);
            
            alert("Sent message to request book");
            goBackToHome();

        }).catch((e) => {
            alert("Failed to send message, try again later");
        })
    }
    const chatGrid = chats.map(msg => {
        console.log("we are here" + msg.msg);
        return(

            <Card.Text>
                {msg.sender_name} : {msg.msg}
            </Card.Text>
        
        )
    });

    return  (
        <div className="header">
            {book ? (
                <div> 
                <h1> Send Message about The book {book.title}</h1>
                <Card className="chatcard">
                    <Card.Title> 
                        Messages:
                    </Card.Title>
                    <Card.Body>
                        {chatGrid}
                    </Card.Body>
                    <from inline>
                        <input className="text-input" name="msg" onChange={handleChange} type="text" />
                        <Button onClick={async() => {
                            await submit();
                        }}> send </Button>
                    </from>
                    {/* <Form className="sendMessage">
                        <FormControl  className="messagebox" type="text" placeholder=" Send Message "  />
                        <Button variant="outline-success"> Search </Button>
                    </Form> */}
                
                </Card>
                 </div>
            ) : (
                <h2> is not loaded </h2>
            )}
            </div>


            
            

       
    )


}