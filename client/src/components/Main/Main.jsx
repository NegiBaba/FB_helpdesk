import { useEffect } from "react"
import Navigation from "./Navigation/Navigation"

// import "./Main.css"

function getuser(userId, msg) {
    return new Promise((resolve, reject) => {
        const body = {
            userId,
            msg
        }
        fetch("https://helpdesk-testing.herokuapp.com/user",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then((resp) => resolve())
            .catch((err) => console.log(err.message))
    })
}
export default function Main() {
    const userId = 533086657953118;
    useEffect(() => {
        getuser(userId, "from front");
    }, [])
    return (
        <main>
            <Navigation />
        </main>
    )
}