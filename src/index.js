import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./style.css";
import { PostInfo, Login, Profile, Home } from "./pages";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <div className="navLinks">
      <BrowserRouter>
        <main>
          <h1 className="title">Stranger's Things</h1>
          <NavLink exact to="/" activeClassName="current-link">
            Home
          </NavLink>
          <NavLink to="/post-info" activeClassName="current-link">
            Post
          </NavLink>
          <NavLink to="/profile" activeClassName="current-link">
            Profile
          </NavLink>
          <NavLink to="/login" activeClassName="current-link">
            Login
          </NavLink>

          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/post-info">
              <PostInfo />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login
                token={token}
                setToken={setToken} />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
