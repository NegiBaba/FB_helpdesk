import { useEffect } from "react";
import axios from "axios";

export default function Message(userId) {
    useEffect(() => {
        async function getUserMessages() {
            await axios.get('https://helpdesk-testing.herokuapp.com/messages?userId=' + userId.userId)
            .then(response => {
                console.log(response.data);
            })
        }
        getUserMessages(userId.props)
    },[userId])
    return <div>
        <h4>messages div</h4>
    </div>
}