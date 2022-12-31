import React, {useEffect, useState} from "react";
import { fetchRecurringUserMe, fetchAllPostsThatsPosted, fetchDeletePosts, } from '../api';

const Profile = ({posts, token, setPosts}) => {
  let username = localStorage.getItem('username');
  
  const [messages, setMessages] = useState([]);
    useEffect(() => {
        const postFunction = async () => {
          let userMe = await fetchRecurringUserMe(token);
          setMessages(userMe.messages);
        }
      postFunction();
    }, []);
  
  useEffect(() => {
    const myFunction = async () => {
      let allPost = await fetchAllPostsThatsPosted(token);
      setPosts(allPost);
    }
    myFunction();
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
    console.log(messages)
    return (<div>
        <h1>Welcome back {username}</h1>
        <h3>Make a New Post
         <a href='/create-new-post'>Here</a>   
        </h3>

        {posts.filter((post) => post.isAuthor === true).map((post, index) => {
            return (
                <div
                className="listed-posts"
                key={index}>
                <h2>{post.title}</h2>
                <h4>{post.description}</h4>
                <h4>{post.price}</h4>
                <h5>{post.author.username}</h5>
                    <h2>{post._id}</h2>
                    
                    <button type="button"
                onClick={()=> handleDelete(post._id)}>
          Delete Post
              </button>
                </div>    
            )
        })}
      
      <div className="messages-sent">
        <h3>Sent Messages</h3>
        {
          messages.map((message, index) => {
            if (message.fromUser.username === username) {
              return (
                <div
                  key={index}>
                  {message.fromUser.username}
                  {message.post.title}
                  {message.content}
                </div>
              )
            }
          }
          )
        }
      </div>
      
      <div className="messages-received">
        <h3>Received Messages</h3>
        {
          messages.map((message, index) => {
            if (message.fromUser.username !== username) {
              return (
                <div
                  key={index}>
                  {message.fromUser.username}
                  {message.post.title}
                  {message.content}
                </div>
              )
            }
          })
        }
      </div>
        
          </div>
    )
}

export default Profile;