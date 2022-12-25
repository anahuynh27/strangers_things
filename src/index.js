import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./style.css";
import { PostInfo, Login, CreateProfile, Home, NewPostForm, Profile, SinglePage } from "./pages";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [posts, setPosts] = useState([]);
  const isLoggedIn = (token !== null);
  const removeToken = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  console.log(posts)

  return (<div id="nav-links">
      <BrowserRouter>
        <header>
          <h1 className="title">Stranger's Things</h1>
          <NavLink exact to="/" activeClassName="current-link">
            Home
          </NavLink>
          <NavLink to="/post-info" activeClassName="current-link">
            Post
        </NavLink>
        
        {(isLoggedIn) &&
        <NavLink to="/Profile" activeClassName="current-link">
          Profile
        </NavLink>
        }
        {(!isLoggedIn) ?
          <NavLink to="/login" activeClassName="current-link">
            <button className='login-button'>Login</button>
          </NavLink>
          : <button className='login-button' onClick={removeToken}> Logout</button>
        }


          <Switch>
            <Route exact path="/"><Home
            token={token} /></Route>
            <Route path="/post-info">
            <PostInfo
              token={token}
              setToken={setToken}
              posts={posts}
              setPosts={setPosts} />
          </Route>
            <Route path="/Create-Profile">
            <CreateProfile />
            </Route>
              <Route path="/login">
              <Login
              token={token}
              setToken={setToken} 
            />
              </Route>
          <Route path='/create-new-post'>
            <NewPostForm
            token={token}
            setToken={setToken}/>
          </Route>
          <Route path="/profile"><Profile /></Route>
          <Route path={`/send-message-${posts._id}`}><SinglePage /></Route>
            </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
