import React, { useEffect, useState } from "react";
import { fetchAllPostsThatsPosted } from "../api";
import { useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import { Link } from "react-router-dom"

const PostInfo = ({token, setToken}) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  // const postToDisplay = searchTerm.length ? filteredPosts : posts;
  
  useEffect(() => {
    // const fetchAllPostsThatsPosted = async () => {
    //   try {
    //     const response = await fetch(`${APIURL}`);
    //     const result = await response.json();
    //     setPosts(result.data.posts);
    //   } catch (error) {
    //     console.error;
    //   }
    // };
    const postFunction = async () => {
      let allPost = await fetchAllPostsThatsPosted();
      setPosts(allPost);
    }
    postFunction();
  }, []);


  return (<div>
    {/* {!token ? <button>Create New Listing</button> : null} */}
    {(token) &&
      <Link to='/create-new-post'>
        <button type="button">
          Create New Post
        </button>
      </Link>
    }

    {/* <a href='/create-new-post'>Create New Post</a> */}

 
    {posts.map((post, index) => {
      return (
        <div
          className="listed-posts"
          key={index}>
          <h2>{post.title}</h2>
          <h4>{post.description}</h4>
          <h4>{post.price}</h4>
          <h5>{post.author.username}</h5>
      </div>)
    })}

    </div>)
}


export default PostInfo;