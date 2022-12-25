import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch, useParams } from "react-router-dom";
import "./style.css";
import { PostInfo, Login, CreateProfile, Home, NewPostForm, Profile, SinglePage } from "./pages";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [posts, setPosts] = useState([]);
  const [_id, set_Id] = useState("");
  const isLoggedIn = (token !== null);
  const removeToken = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  
  // posts.map((post, index) => {
  //   <div key={index} className="index-post-map">
  //     <h1>{post._id}</h1>
  //   </div>
  // })

  console.log(_id)
  const SingPage = ({ posts }) => {
    const { _id } = useParams();
    posts.filter((post, index) => {
      return (
      <div key={index} className="index-post-filter">
          <h1>{post._id}</h1>
      </div>
      )
    })
}


//   function getPostID(posts) {
//   for (let i = 0; i < posts.length; i++) {
//     let value = array[i];
//     let _id = posts[i]._id
//       return _id
//   }
// }
  
  // const { _id } = useParams();
  // let paramIdPost = posts.find(post => post._id === parseInt(_id));
  // console.log(paramIdPost);
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
              setPosts={setPosts}
              _id={_id}
              set_Id={set_Id} />
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

          <Route>
            <Route
              path={`/send-message-${_id}`}>              
              <SinglePage
                posts={posts}
                setPosts={setPosts}
                token={token}
                setToken={setToken}
                _id={_id}
              />
          </Route>
      </Route>
            </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
