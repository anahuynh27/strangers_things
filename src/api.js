export const APIURL = `https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT`;


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
    const response = await fetch(`${APIURL}/posts`);
    const result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.error;
  }
};

//POST /api/COHORT-NAME/users/register
export const fetchNewUserRegister = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    return result.data.token;
    
  } catch (error) {
    console.error;
  }
}

//POST /api/COHORT-NAME/users/login
export const fetchRecurringUserLogin = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: username,
      password: password
    }
  })
    })
    const result = await response.json();
    return result.data.token
  } catch (error) {
    console.error;
  }
}

//GET /api/COHORT-NAME/users/me
export const fetchRecurringUserMe = async() => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer TOKEN_STRING_HERE'
      },
    })
  } catch (error) {
    console.error('no user found, create account', error)
  }
}

//GET /api/COHORT-NAME/test/me
