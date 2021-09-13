import logo from "../logo/facebook.svg";
import "./Login.css";

import facebookLogin from "../facebookSDK/facebookLogin";

export default function Login() {
    return (
        <div className='login-box'>
            <h1 className='login-heading'>Welcome to FB helpdesk</h1>
            <table className='login-button' onClick={facebookLogin}>
                <tbody>
                    <tr>
                        <td><img className='logo' src={logo}></img></td>
                        <td><div className='button-text'>Login with Facebook</div></td></tr>
                </tbody>
            </table>
        </div>
    );
}
