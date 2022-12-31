import React, { useEffect, useState } from "react";
import { fetchAllPostsThatsPosted, fetchDeletePosts, fetchPostMessages } from "../api";
import { useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import { Link } from "react-router-dom"

const PostInfo = ({token, setToken, posts, setPosts, _id, set_Id, content, setContent}) => {
  const [search, setSearch] = useState("");
  const [deletePosts, setDeletePosts] = useState([]);


  console.log(posts)
  console.log(search)

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
    {<form onSubmit={(event) =>(event.preventDefault())}>
      <input
        className='search-bar'
        value={search}
      onChange={(event) => {setSearch(event.target.value)}}
    ></input></form>
    }
    {(token) &&
      <Link to='/create-new-post'>
        <button type="button">
          Create New Post
        </button>
      </Link>
    }

    {posts.filter(post => {
      if (search === "") {
        return post
      } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
        return post.title
      } else if (post.author.username.toLowerCase().includes(search.toLowerCase())) {
        return post.author.username
      } else if (post.description.toLowerCase().includes(search.toLowerCase())) {
        return post.description
      }
        }
    ).map((post, index) => {
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

