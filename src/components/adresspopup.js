import React, {useState, useContext, useEffect} from 'react';
import { UserContext } from '../contexts/context';
import axios from 'axios';

export function Adresspopup(props) { 
    const { auth }  = useContext(UserContext);
    const [adress, setAdress] = useState();
    useEffect(() => {
        const id =(props.userid).toString();
        console.log(id);
    
        const url = 'http://localhost:9999/api/v1/requests/getadress/' + id ;
        console.log('URL:  ' + url);
        axios({
            method: 'get',
            url: url,
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            console.log(res);
            setAdress(res.data);
        }).catch(e=>{
            console.log(e)
            alert('Could not get adress right now');
        })
    },[auth.password, auth.username, props.userid]);
    return (
        <div className="popupwindow"> 
            <h2> Adress</h2>
            {/* <p> {adress}</p> */}
            <button onClick={() => {
                props.openWindow(false);
            }}> Close </button>
        </div>
    )
}