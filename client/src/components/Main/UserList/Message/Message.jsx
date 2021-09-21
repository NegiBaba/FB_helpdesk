import { useEffect, useState } from "react";
import axios from "axios";

import { io } from 'socket.io-client'

export default function Message(userId) {

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        async function getUserMessages() {
            await axios.get('https://helpdesk-testing.herokuapp.com/messages?userId=' + userId.userId)
            .then(response => {
                console.log(response.data);
                if (response.data === 'empty') {
                    setMessages({message: 'click on anny id to get their messages', id: 2});
                } else {
                    setMessages(response.data);
                }
                console.log(messages);
            })
        }
        getUserMessages(userId.props)
    },[userId])

    useEffect(() => {
        const socket = io('https://helpdesk-testing.herokuapp.com')
        socket.on('check', (data) => {
            if (data === userId) {
                async function getUserMessages() {
                    await axios.get('https://helpdesk-testing.herokuapp.com/messages?userId=' + userId.userId)
                    .then(response => {
                        console.log(response.data);
                        if (response.data === 'empty') {
                            setMessages({message: 'click on anny id to get their messages', id: 2});
                        } else {
                            setMessages(response.data);
                        }
                        console.log(messages);
                    })
                }
                getUserMessages(userId.props)
            }
        }) 
    },[userId])
    
    return <div>
        <h1>messages will go here</h1>
    </div>
}