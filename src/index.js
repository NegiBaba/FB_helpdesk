import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initFacebookSdk } from "./components/facebookSDK/facebookSDK";

initFacebookSdk().then(startApp);

function startApp(data) {
  console.log(data);
  ReactDOM.render(
    <React.StrictMode>
      <App response={data} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
