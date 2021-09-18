import { useEffect } from "react";
import axios from "axios";

export default function Message(userId) {
    useEffect(() => {
        async function getUserMessages(userId) {
            await axios.get('https://helpdesk-testing.herokuapp.com/messages?userId=' + userId)
            .then(response => {
                console.log(response.data);
                console.log(userId);
            })
        }
        getUserMessages(userId.props)
    },[userId])
    return <div>
        <h4>messages fiv</h4>
    </div>
}