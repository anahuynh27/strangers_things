import React, { useState } from "react";
import {fetchNewUserRegister} from '../api'
import ReactDOM from "react-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(username);
        setUsername("");
        setPassword("");
        console.log(password);
        let userNpass = await fetchNewUserRegister(username, password);
        console.log(userNpass)
    }

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    return (<div className="login-container">
        <h1> This is Login</h1>
        <form
            className="userAndpass"
            onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type='text'
                name="username"
                value={username}
                onChange={handleChange} />
            
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)} />
            <button type="submit">Submit</button>
            <p>Don't have an account?
                <a href='/Profile'>Sign Up Here</a>
            </p>
        </form>
    </div>
        
    )
};



export default Login;
