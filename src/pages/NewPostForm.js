import React, {useEffect, useState} from "react"; 
import { Route } from "react-router-dom";
import { APIURL } from "../api";
import {fetchCreateNewPosts, fetchAllPostsThatsPosted} from "../api"


const NewPostForm = ({ token }) => {
    const [post, setPost] = useState([]);
    const [istitle, setTitle] = useState("");
    const [isdescription, setDescription] = useState('');
    const [isprice, setPrice] = useState("");
    const [iswillDeliver, setWillDeliver] = useState(false);

   
    let username = localStorage.getItem('username');
 

    // useEffect(() => {
    //     const createdNewPosts = async () => {
    //         let iCreatedaPost = await fetchCreateNewPosts();
    //         setPosts(iCreatedaPost);
    //     }
    //     createdNewPosts();
    // }, []);

    const handleClick = (event) => {
        event.preventDefault();
        fetchCreateNewPosts( token, istitle, isdescription, isprice, iswillDeliver);
        console.log(token);
        alert('posted');
        setTitle("");
        setDescription("");
        setPrice("");
        setWillDeliver("");
    }
    
   

    return (
        <div className="create-new-post">
            <h1>{username} Fill out the Form below</h1>
            <form className='create-new-post'
            onSubmit={handleClick}>
                <label>Title:</label>
                <input type='text'
                    name='title'
                    value={istitle}
                    onChange={(event) => {
                         setTitle(event.target.value)
                    }}
                    /> 
                <label>Description:</label>    
                <input type='text'
                    name='description'
                    value={isdescription}
                    onChange={(event) => {
                         setDescription(event.target.value)
                    }}
                     />
                <label>Price:</label>
                <input type='text'
                    name='price'
                    value={isprice}
                    onChange={(event) => {
                         setPrice(event.target.value)
                    }}
                />
                <button type="submit"
                >
                    Submit New Post</button>
            </form>
        </div>
    )
}

export default NewPostForm