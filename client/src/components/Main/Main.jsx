import { useEffect } from "react"
import axios from "axios";

import Navigation from "./Navigation/Navigation"
// import "./Main.css"

const userList = [];
function getuser(userId, msg) {
    axios.get('https://helpdesk-testing.herokuapp.com/user').then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });
}
export default function Main() {
    useEffect(() => {
        getuser(userId, "from front");
    }, [])
    return (
        <main>
            <Navigation />
        </main>
    )
}