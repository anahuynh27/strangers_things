import React, { useEffect, useState  } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAllPostsThatsPosted, fetchPostMessages } from "../api";
import PostInfo from "./PostInfo";



// useEffect(() => {
  //   const messages = async (token, content) => {
    //     let postMsg = await fetchPostMessages(token, content);
    //   }
    //   postMsg();
    // }, []);
    
    
const SinglePage = ({ posts, token, _id, content, setContent }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let sendMessage = await fetchPostMessages(token, _id, content);
    console.log(sendMessage);
    alert('message sent!');
    return
  }
  

  // console.log(_id)
  // console.log(posts)
  // console.log(token)
  
 
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

      {<h2>Preview:{content}</h2>}
     

      <form className="send-message-content"
        onSubmit={(event) => handleSubmit(event)}
      >
        <h4>Send Message</h4>
        <input
          type="text"
          name="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <input type="submit"
        value="Submit"
        ></input>
    </form>
    </div>
    )
}


export default SinglePage;

