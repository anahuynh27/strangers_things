import React, { useEffect, useState } from "react";
import { fetchRecurringUserLogin } from '../api';
import { useHistory } from "react-router-dom";
import { fetchRecurringUserMe } from '../api';



const Login = ({token, setToken}) => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isLoggedIn = (token !== "")

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
        setPassword(password);
        setUsername(username);
        
        try {
            let token = await fetchRecurringUserLogin(username, password);
            console.log(token); 
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            let returningUser = await fetchRecurringUserMe(token);
        console.log(returningUser);
            console.log(returningUser.data.username)
            setToken(token)
        } catch (error) {
            console.error();
        } finally {
            // let history = useHistory();
            // history.push("/post-info");
            console.log(token)
        }
    }

    const handleChange = (event) => {
        setUsername(event.target.value)
    }


    return ( 
        <div className="login-container">
        <h1>Login</h1>
        <form
            className="userAndpass"
            onSubmit={handleSubmit}>
                <label
                    htmlFor="username">Username:</label>
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
                {/* {token}
                {String(isLoggedIn)} */}
        </form>
        </div> 
        ) 
};

const LoggedIn = (setToken) => {
    setToken(username)
}

const LoggedOut = (setToken) => {
    setToken("");
    setUsername("");
    setPassword("");
    <h3>You've been logged out</h3>
}

export default Login;

