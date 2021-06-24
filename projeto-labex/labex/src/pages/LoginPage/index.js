import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {

    const history = useHistory()

    const pageHome = () => {
        history.goBack("/")
    }
    const login = () => {
        history.push("/admin/trips/list")
    }
  return (
    <div>
        <h1>Login Page</h1>
     <button onClick={pageHome}>Home</button>
     <button onClick={login}>Login</button>

    </div>
  );
}

export default LoginPage;