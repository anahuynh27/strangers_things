import React, { useEffect, useState } from "react";
import { fetchAllPostsThatsPosted, fetchDeletePosts, fetchPostMessages } from "../api";
import { useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import { Link } from "react-router-dom"

const PostInfo = ({token, setToken, posts, setPosts, _id, set_Id, content, setContent}) => {
  // const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletePosts, setDeletePosts] = useState([]);


  console.log(posts)

  // const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  // const postToDisplay = searchTerm.length ? filteredPosts : posts;
  
  useEffect(() => {
    const postFunction = async () => {
      let allPost = await fetchAllPostsThatsPosted(token);
      setPosts(allPost);
    }
    postFunction();
  }, []);

  const handleDelete = async (_id) => {

    try {
      let deletePosts = await fetchDeletePosts(token, _id);
      console.log(deletePosts);
      window.confirm("delete message?") && location.reload() 
    } catch (error) {
      console.error()
    }
  }


  return (<div className='post-info-page'>
    {(token) &&
      <Link to='/create-new-post'>
        <button type="button">
          Create New Post
        </button>
      </Link>
    }

    {posts.map((post, index) => {
      return (
        <div
          className="listed-posts"
          key={index}>
          <h2>{post.title}</h2>
          <h4>{post.description}</h4>
          <h4>{post.price}</h4>
          <h5>{post.author.username}</h5>
          <h2>{post._id}</h2>
          <div>

          {(token && post.isAuthor == true) &&
              (<button type="button"
                onClick={()=> handleDelete(post._id)}>
          Delete Post
              </button>)}
          </div>

          <div>
          {(token) &&
              (<Link to={`/send-message-${post._id}`}>
              <button
                type="button"
                onClick={() => set_Id(post._id)}
              >
          Send Message
              </button>
              </Link>)}
          </div>
        </div>
      )
    })}

    </div>)
}


export default PostInfo;

