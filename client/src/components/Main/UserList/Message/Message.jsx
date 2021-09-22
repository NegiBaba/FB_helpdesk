import { useEffect, useState } from "react";
import axios from "axios";

import { io } from 'socket.io-client'

import './Message.css';

export default function Message(userId) {

    const [chatList, setchatList] = useState([{message: 'click on anny id to get their messages', id: 2}, {message: 'list of users', id: 2}]);
    const [message, setMessage] = useState('');
    function handleChange(e) {
        setMessage(e.target.value);
      }

    useEffect(() => {
        async function getUserMessages() {
            await axios.get('https://helpdesk-testing.herokuapp.com/messages?userId=' + userId.userId)
            .then(response => {
                console.log(response.data);
                if (response.data === 'empty') {
                    setchatList([{message: 'click on anny id to get their messages', id: 2}, {message: 'list of users', id: 2}]);
                } else {
                    setchatList(response.data);
                }
            })
        }
        getUserMessages(userId.props)
    },[userId])

    useEffect(() => {
        const socket = io('https://helpdesk-testing.herokuapp.com')
        socket.on('check', (data) => {
            console.log(data);
            if (data === userId.userId) {
                async function getUserMessages() {
                    await axios.get('https://helpdesk-testing.herokuapp.com/messages?userId=' + userId.userId)
                    .then(response => {
                        console.log(response.data);
                        if (response.data === 'empty') {
                            setchatList([{message: 'click on anny id to get their messages', id: 2}, {message: 'list of users', id: 2}]);
                        } else {
                            setchatList(response.data);
                        }
                        console.log(chatList);
                    })
                }
                getUserMessages(userId.props)
            }
        }) 
    },[userId])

    async function sendMessage() {
        await axios.post("https://helpdesk-testing.herokuapp.com/messages?userId=" + userId.userId, {text: message})
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
        setMessage('');
    }
    
    return <div className='chatMessage'>
        {chatList.map((item) => <div className={item.id}> { item.message } </div>)}
        <div className='messageInput'>
                <input placeholder='Your message here'onChange={handleChange} ></input>
                <button onClick={sendMessage}>Send</button>
        </div>
    </div>
}