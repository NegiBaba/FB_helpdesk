import React from "react";
import { facebookLogin } from "../facebookSDK/facebookSDK";

import logo from "./fbIcon.png";
import "./Login.css";

export default function Login() {
  return (
    <div className='login-page'>
      <h1>Welcome to FB Helpdesk</h1>
      <table className='login-button' onClick={() => facebookLogin()}>
        <tbody>
          <tr>
              <td><img className="facebook-logo" src={logo} alt="facebook-logo" /></td>
              <td className='button-text'>Login with Facebook</td>
          </tr>
          </tbody>
      </table>
    </div>
  );
}
