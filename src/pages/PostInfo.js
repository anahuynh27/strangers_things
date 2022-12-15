import React, { useEffect } from "react";

const PostInfo = ({posts, setPosts}) => {
  
  const cohortName = "2209-FTB-CT-WEB-PT";
  const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/posts`;
  console.log(APIURL);

  
  useEffect(() => {
    const fetchAllPostsThatsPosted = async () => {
      try {
        const response = await fetch(`${APIURL}`);
        const result = await response.json();
        setPosts(result.data.posts);
      } catch (error) {
        console.error;
      }
    };
    fetchAllPostsThatsPosted();
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