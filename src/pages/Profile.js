import React, {useState} from "react";
import {fetchNewUserRegister} from '../api'

const Profile = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
      const handleSubmit = async (event) => {
          event.preventDefault();
          console.log(username);
          setUsername("");
          setPassword("");
          console.log(password);
          let userNpass = await fetchNewUserRegister(username, password);
        console.log(userNpass); //token created
      }
  
      const handleChange = (event) => {
          setUsername(event.target.value)
      }
  
    return <div className="login-container">
          <h1>Profile</h1>
          
        <form
              className="userAndpass"
              onSubmit={handleSubmit}>
              <label htmlFor="create-username">Create Username:</label>
              <input
                  type='text'
                  name="username"
                  value={username}
                  onChange={handleChange} />
              
              <label htmlFor="create-password">Create Password:</label>
              <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)} />
            <button type="submit">Submit to Create New Account</button>
      </form>
              </div>
}


export default Profile