import { useEffect, userState } from 'react';
import axios from "axios";

import './UserList.css'

//this list will contain all the user who have sent message to the current user's page
const [userList, setUserList] = userState([]);

export default function UserList() {
    useEffect(() => {
        async function getUserList() {
            await axios.get('https://helpdesk-testing.herokuapp.com/user').then(response => {
                // userList.push(response.data);
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            });
        }
    },)

    return <div className='UserList'>
        <h1 className='UserListHeading'>Conversation</h1>
    </div>
}