import './App.css';
import React, { useState } from "react";
import Resume from './Resume';


function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  console.log(repoData);
  if(data&&repoData){
    return(
    <Resume data={data} repo={repoData}></Resume>
    )
  }
  return (
    <div className="userNameInputBar">
      <h2>Enter your github username</h2>
      <form
      onSubmit={async e => {
        e.preventDefault();
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const response1 = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        try {
          const json = await response.json();
          const json1 = await response1.json();
          setData(json);
          setRepoData(json1);
        } catch (error) {
          console.log("error");
        }
        
      }}
          >
        <input className="inputfield"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          /><br/>
        <button type="submit" className="submitbutton">Create CV</button>
      </form>
    </div>
  );
}
/*
function repoObject(rName,rDesc,sCount)
{
    this.repoName = rName
    this.repoDescription = rDesc
    this.starCount = sCount
}

function App()
{
    let username = ""
    let infoArray = []

    //Generating required json files
    let user = await fetch(`https://api.github.com/users/${username}`)
    let repo = await fetch(`https://api.github.com/users/${username}/repos`)
    let userData = await user.json()
    let repoData = await repo.json()

    //Creates an array of objects containing project name and description
    for(key in repoData)
    {
        let rObject = new repoObject(repoData[key].full_name.slice(username.length+1),
                                     repoData[key].description,
                                     repoData[key].stargazers_count)
        console.log(rObject)
        infoArray.push(rObject)
    }

    // Required info for cv header
    let followerCount = userData.followers
    let followingCount = userData.following
    console.log(followingCount)
    let location = userData.location
    let repoCount = userData.public_repos
    let imageUrl = userData.avatar_url
    let email = userData.email
}

function search()
{
    let bar = document.getElementById("userNameInputBar").value
    if(bar=="")
        alert("Please enter a username");
    else
        start()
}

*/
export default App;
