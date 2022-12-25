import React from "react";
import { fetchRecurringUserMe } from '../api';

const Profile = () => {
    let username = localStorage.getItem('username')
    return (<div>
        <h1>Welcome back {username}</h1>
        <h3>Make a New Post
         <a href='/create-new-post'>Here</a>   
        </h3>
        <h3>Delete a Post
            <a href='/create-new-post'>Here</a>   
            You can only delete your own posts.
        </h3>
    </div>
    )
}

export default Profile;