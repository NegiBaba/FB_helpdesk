import inbox from "./Logo/inbox.svg";
import inbox_base from "./Logo/inbox_white.svg";
import people from "./Logo/people.svg";
import people_base from "./Logo/people_white.svg";
import facebook from "./Logo/facebook.svg";
import logout_white from "./Logo/logout_white.svg";

import "./Navigation.css";
export default function Navigation() {
    return (
        <div className='navbar'>
            <img className="nav_logo" src={facebook} />
            <ul className='nav-list'>
                <li className="nav-item"><img src={inbox_base} alt="inbox" /></li>
                <li className="nav-item"><img src={people_base} alt="people" /> </li>
                <li className="nav-item"><img src={logout_white} alt='logout' /></li>
            </ul>
        </div>
    );
}