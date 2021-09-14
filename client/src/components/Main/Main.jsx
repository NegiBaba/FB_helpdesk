import { useEffect } from "react"
import axios from "axios";

import Navigation from "./Navigation/Navigation"
// import "./Main.css"

function getuser(userId, msg) {
    axios.get('https://helpdesk-testing.herokuapp.com/user?userId=' + userId).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });
}
export default function Main() {
    const userId = '4660329073978141';
    useEffect(() => {
        getuser(userId, "from front");
    }, [])
    return (
        <main>
            <Navigation />
        </main>
    )
}