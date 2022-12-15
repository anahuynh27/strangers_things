export const cohortName = "2209-FTB-CT-WEB-PT";
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/posts`;
console.log(APIURL);

export async function fetchAuthorizationPosts() {
  APIURL,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer TOKEN_STRING_HERE",
        // TOKEN_STRING_HERE is a token for a person when they log in. API will not authorize if token doesn't match
      },
      body: JSON.stringify({
        /* whatever things you need to send to the API */
      }),
    };
}

//GET /api/COHORT-NAME/posts
export const fetchAllPostsThatsPosted = async () => {
  try {
    const response = await fetch(`${APIURL}`);
    const result = await response.json();
    return setPosts(result.data.posts);

  } catch (error) {
    console.error;
  }
};
