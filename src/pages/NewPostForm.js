import React from "react"; 
import { Route } from "react-router-dom";


const NewPostForm = ({token}) => {
    return (
        <div className="create-new-post">
            <h1>Fill out the Form below</h1>
            <form class='create-new-post'>
                <label>Title:</label>
                <input
                    type='text'
                    name='title'
                    /> 
                <label>Description:</label>    
                <input
                    type='text'
                    name='description'
                     />
                <label>Price:</label>
                <input
                    type='text'
                    name='price'
                    />
            </form>
        </div>
    )
}

export default NewPostForm