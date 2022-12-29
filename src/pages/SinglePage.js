import React, { useEffect, useState  } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAllPostsThatsPosted, fetchPostMessages } from "../api";
import PostInfo from "./PostInfo";

function helperSinglePage({posts}) {
  const { _id } = useParams();
  return (
    <div>
      <h2>hello from helper single function</h2>
    </div>
  )
}

const SinglePage = ({ posts, setPosts, token, setToken, _id }) => {
  const [content, setContent] = useState("");
  console.log(_id)
  console.log(posts)
  console.log(token)
  
    const handleMessage = async (event) => {
      event.preventDefault();
      setContent(event.target.value)
        try {
          let sendMessage = await fetchPostMessages(token, _id, content);
          console.log(sendMessage);
          setPosts(sendMessage);
          alert('message sent!')
          } catch (error) {
          console.error('cannot send message', error)
        } finally {
          localStorage.removeItem('_id');
          <Link to="/post-info"><PostInfo /></Link>
        }
    }
 
    return (<div>
      <Link to="/post-info"><button>Go Back</button></Link>

      {posts.filter((post) => post._id === _id).map((post, index) => {
        return (
          <div
            className="listed-posts"
            key={index}>
            <h2>{post.title}</h2>
            <h4>{post.description}</h4>
            <h4>{post.price}</h4>
            <h5>{post.author.username}</h5>
            <h2>{post._id}</h2>
          </div>)
      })}
      <form>
        <h4>Send Message</h4>
        <textarea name="content"
          value={content}
          onChange={handleMessage}
        ></textarea>
        <button>Submit</button>
    </form>
        </div>
    )
}

export default SinglePage;

//react_devtools_backend.js:4012 cannot send message TypeError: Cannot read properties of undefined (reading 'filter') 
//cannot send message. Whenever I type anything in the textbox, the site crashes. 