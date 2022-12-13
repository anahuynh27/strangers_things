const cohortName = '2209-FTB-CT-WEB-PT';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/posts/`;

fetch(APIURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
      'Authorization': 'Bearer TOKEN_STRING_HERE',
    // TOKEN_STRING_HERE is a token for a person when they log in. API will not authorize if token doesn't match
  },
  body: JSON.stringify({ /* whatever things you need to send to the API */ })
})