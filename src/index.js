import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './style.css';
import {PostInfo, Login, Profile} from './pages';

const cohortName = '2209-FTB-CT-WEB-PT';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/posts/`;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function postMatches(post, text) {
    // return true if any of the fields you want to check against include the text
  // strings have an .includes() method 
  }

  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  const postToDisplay = searchTerm.length ? filteredPosts : posts;

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch(APIURL);
      console.log('resp: ', resp)
    }
  })

  return (
    <div className="navLinks">
      <BrowserRouter>
        <header>
          <h1 className="title">Welcome to Stranger's Things!</h1>
          <NavLink exact to="/"
            activeClassName="current-link">
            Home
          </NavLink>
          <NavLink to ="/post-info"
            activeClassName="current-link">
            Post
          </NavLink>
          <NavLink to="/profile"
            activeClassName="current-link">
            Profile
          </NavLink>
            <NavLink to="/login"
            activeClassName="current-link">
            Login
          </NavLink>
          
          <Switch>
            <Route exact path="/"></Route>
          <Route path="/pages/post-info"> <PostInfo /></Route>
          <Route path="/pages/posts/profile"> <Profile /></Route>
          <Route path="/pages/posts/login"> <Login /></Route>
          </Switch>
        </header>
      </BrowserRouter>
  </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);