import './App.css';
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

function App({response}) {
  console.log("Logged in status:", response.status);
  if (response.authResponse) {
    return ( <Main userId={response.authResponse.userID}/> );
  }

  return (
    <Login />
  );
}
export default App;