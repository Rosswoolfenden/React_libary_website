import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export function Recieved() {
    const [chats, setChats] =  useState();
    const [cur, setCur] = useState();

    useEffect(() => {
        axios.get('http://localhost:9999/api/v1/books')
            .then(res => {
                setChats(res.data);
            })
            .catch(e => {
                alert("Failed to get Book data");
                console.log(e);
            });
    },[]);
    
    return  (
        <div>
            <h1> Recieved book requests </h1>

        </div>
    )


}