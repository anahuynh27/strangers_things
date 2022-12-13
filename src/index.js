import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const cohortName = '2209-FTB-CT-WEB-PT';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/posts/`;

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch(APIURL);
      console.log('resp: ', resp)
    }
  })

  return <div className="app">
    
    <h1>Hello World</h1>
    {/* <Login /> */}
  </div>


}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);