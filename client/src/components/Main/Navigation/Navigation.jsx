import inbox from "./Logo/inbox.svg";
import people from "./Logo/people.svg";
import facebook from "./Logo/facebook.svg";

import "./Navigation.css";
export default function Navigation() {
    return (
        <div className='navbar'>
            <img className="nav_logo" src={facebook} />
            <ul className='nav-list'>
                <li className="nav-item"><img src={inbox} alt="inbox" /></li>
                <li className="nav-item"><img src={people} alt="people" /> </li>
                <li className="nav-item">logout</li>
            </ul>
        </div>
    );
}