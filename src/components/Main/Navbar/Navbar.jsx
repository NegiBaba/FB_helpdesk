import logo from "./richpanel.png";
import inbox from "./inbox.svg";
import second_white from './second_white.svg';
import second_black from './second_black.svg';
import logout_white from './logout_white.svg';
import logout_black from './logout_black.svg'
import {useState} from 'react';
import './Navbar.css';
import { facebookLogout } from '../../facebookSDK/facebookSDK';

export default function Navbar() {
    //using hooks to change svg with the help of mouseOver instead of hover effect
    const [logout_src, setLogoutSrc] = useState(logout_white); 
    const [second_src, setSecondSrc] = useState(second_white);
    return (
        <div className="mainWrapperNav">
            <div className="navItem" onClick={() => window.open('https://richpanel.com/', '_blank')}>
                <img className="navItemLogo" src={logo} alt="richpanel logo" />
            </div>
            <div className="navItem navItemSelected">
                <img src={inbox} alt="inbox-icon" />
            </div>
            <div className="navItem" onMouseEnter={() => {setSecondSrc(second_black);}}
                                                     onMouseLeave={()=> {(setSecondSrc(second_white));}}>
                <img src={second_src} alt="second" />
            </div>
            <div className="navItem" onMouseEnter={() => {setLogoutSrc(logout_black);}}
                                                     onMouseLeave={()=> {(setLogoutSrc(logout_white));}}>
                <img src={logout_src} alt="logout button" onClick={() => {facebookLogout();} 
                                                    } />
            </div>
            <div className="navItem navProfile">
                <div className="navProfileIcon" />
            </div>
        </div>
    )
};
