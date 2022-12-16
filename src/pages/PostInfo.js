import React, { useEffect, useState } from "react";
import { fetchAllPostsThatsPosted } from "../api";

const PostInfo = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  // const postToDisplay = searchTerm.length ? filteredPosts : posts;

const cohortName = "2209-FTB-CT-WEB-PT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/posts`;
  
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
    {posts.map((post, index) => {
      return (
        <div
          key={index}>
          {post.title}
          {post.description}
      </div>)
      })}
    </div>)
}


export default PostInfo;