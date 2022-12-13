import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PostInfo from './components/PostInfo';

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

  return <div className="app">
    
    <h1>Hello World</h1>
    <h1>{/* <Login /> */}</h1>
    <h1>{<PostInfo />}</h1>
    <h1>{<Profile />}</h1>
  </div>


}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);