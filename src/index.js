import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./style.css";
import { PostInfo, Login, Profile, Home } from "./pages";

const App = () => {
  const [token, setToken] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = (token !== "")


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
          <NavLink to="/profile" activeClassName="current-link">
          {!isLoggedIn ? Profile : null}
        </NavLink>
          <NavLink to="/login" activeClassName="current-link">
          {/* {isLoggedIn} ? login: Logout */}
          Login
          </NavLink>


          <Switch>
            <Route exact path="/"><Home
            token={token} /></Route>
            <Route path="/post-info">
              <PostInfo />
            </Route>
            <Route path="/profile">
            <Profile />
            </Route>
              <Route path="/login">
              <Login
              token={token}
              setToken={setToken}
              // isLoggedIn={isLoggedIn}
            // setIsLoggedIn={setIsLoggedIn} 
            />
              </Route>
              
            </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
