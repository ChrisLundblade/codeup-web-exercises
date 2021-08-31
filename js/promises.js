'use strict';

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
//Instead of the date of the last commit, display the date of the last push event.

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const GITHUB_URL = 'https://api.github.com/';

// const octokit = new Octokit({ auth: `${GITHUB_TOKEN}` });
//
// const response = await octokit.request("GET /orgs/{org}/repos", {
//     org: "octokit",
//     type: "private",
// });


//fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

let options = {
    headers: {'Authorization': `${GITHUB_TOKEN}`},
    method: "GET"
}

function gitHubUsernameSearch(username){
    return fetch(`${GITHUB_URL}users/${username}/events`, options)
        .then(response => {
            return response.json();
        })
        .then(response =>{
            return response[0].created_at.toDateString();
        })
        .catch(response => {
            console.log(`failure ${response}`);
        })
}
