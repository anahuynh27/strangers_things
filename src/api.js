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
  alert("Account not found, create new account")
}
}

//GET /api/COHORT-NAME/users/me
export const fetchRecurringUserMe = async(token) => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    const result = await response.json();
    return result.data
  } catch (error) {
    console.error('no user found, create account', error)
  }
}

//GET /api/COHORT-NAME/test/me


//POST /api/COHORT-NAME/posts
export const fetchCreateNewPosts = async ( token, title, description, price, willDeliver) => {
  try {
    const response = await fetch(`${APIURL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: willDeliver
        }
      })
    })
    const result = await response.json();
    console.log(result)
    return result
} catch (error) {
    console.error('post cannot be created', error)
}
}
//GET /api/COHORT-NAME/posts
export const fetchAllPostsThatsPosted = async (token) => {
  try {
    const response = await fetch(`${APIURL}/posts`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
  })
    const result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.error;
  }
};

//DELETE /api/COHORT-NAME/posts/POST_ID
export const fetchDeletePosts = async (token, _id) => {
  try {
    const response = await fetch(`${APIURL}/posts/${_id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
  })
  const result = await response.json();
    return result;
} catch (error) {
  console.log(error)
}
}

//POST /api/COHORT-NAME/posts/POST_ID/messages
export const fetchPostMessages = async (token, _id, content) => {
  try {
    const response = fetch(`${APIURL}/posts/${_id}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: content
        }
      })
    })
    const result = await response.json();
      console.log(result)
    return result
  } catch (error){
    console.error
    }
  }