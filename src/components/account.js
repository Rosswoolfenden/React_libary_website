import React, {useEffect, useState, useContext} from 'react';
import { Chat } from './chat';
import { Chatlist } from './chatlist';
import { UserContext } from '../contexts/context';

export function Account () { 

    const { auth } =  useContext(UserContext);


    return (
        <div>
            <h1> Welcome {auth.firstName}</h1>
        </div>
    )
}