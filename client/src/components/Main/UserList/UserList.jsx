import { useEffect, useState } from 'react';
import axios from "axios";

import icon from "./UserIcon.svg"
import './UserList.css'
import Message from './Message/Message';

import { io } from 'socket.io-client';

const socket = io('https://helpdesk-testing.herokuapp.com/');

export default function UserList() {

    //this list will contain all the user who have sent message to the current user's page
    const [userList, setUserList] = useState([]);
    const [userId, setUserId] = useState('123');

    // get the list of users when this component is rendered
    useEffect(() => {
        async function getUserList() {
            await axios.get('https://helpdesk-testing.herokuapp.com/user').then(response => {
                // userList.push(response.data);
                // setting user list to what we got from the database
                setUserList(response.data);
                console.log(response.data)
            }).catch(err => {
                console.log(err);
            });
        }
        getUserList();

        // io.on('connection', (data) => {
        //     console.log(data);
        // })

        //setUserList([{name: '4660329073978141'}, {name: '6086240188116419'}])
    },[])


    return <div className='UserList'>
        <h1 className='UserListHeading'>Conversation</h1>
        {userList.map((user) => <div className='userBox' onClick = {((event) => {setUserId(event.target.innerText)})}><img src={icon} alt='userIcon' className='usericon'/><h3 className='userName'>{ user.name }</h3></div>)}
        <div className='messages'>
            <Message userId={userId}/>
        </div>
    </div>
}