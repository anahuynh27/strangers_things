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

    const handleMessage = async (_id) => {
  
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

    // useEffect(() => {
    //   const postFunction = async () => {
    //     let allPost = await fetchAllPostsThatsPosted(token);
    //     setPosts(allPost);
    //   }
    //   postFunction();
    // }, []);
 
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
            <input 
              type="text"
              name="message"
              className="send-message-textbox"
              value={content}
              onChange={handleMessage} />
            <button type="submit">Submit</button>
          </div>)

      })}
        </div>
    )
}

export default SinglePage;

//react_devtools_backend.js:4012 cannot send message TypeError: Cannot read properties of undefined (reading 'filter') 
//cannot send message. Whenever I type anything in the textbox, the site crashes. 