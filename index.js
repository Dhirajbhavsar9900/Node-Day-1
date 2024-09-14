require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "Dhirajbhavsar9900",
  "id": 139003559,
  "node_id": "U_kgDOCEkGpw",
  "avatar_url": "https://avatars.githubusercontent.com/u/139003559?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Dhirajbhavsar9900",
  "html_url": "https://github.com/Dhirajbhavsar9900",
  "followers_url": "https://api.github.com/users/Dhirajbhavsar9900/followers",
  "following_url": "https://api.github.com/users/Dhirajbhavsar9900/following{/other_user}",
  "gists_url": "https://api.github.com/users/Dhirajbhavsar9900/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Dhirajbhavsar9900/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Dhirajbhavsar9900/subscriptions",
  "organizations_url": "https://api.github.com/users/Dhirajbhavsar9900/orgs",
  "repos_url": "https://api.github.com/users/Dhirajbhavsar9900/repos",
  "events_url": "https://api.github.com/users/Dhirajbhavsar9900/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Dhirajbhavsar9900/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dhiraj Bhawsar",
  "company": "geekster",
  "blog": "",
  "location": "Shirpur,Maharastra",
  "email": null,
  "hireable": true,
  "bio": "Full Stack Web Developer",
  "twitter_username": null,
  "public_repos": 108,
  "public_gists": 0,
  "followers": 6,
  "following": 16,
  "created_at": "2023-07-08T17:11:52Z",
  "updated_at": "2024-09-03T08:35:57Z"
}


app.get('/', (req, res) => {
  res.send('Hello Worldasdd!')
})

app.get('/Ig', (req, res) => {
    res.send('Dhiraj.Bhawsar_')
})
app.get('/login', (req , res) =>{
  res.send("<h1> Backend With Dhiraj </h1>")
})

app.get('/link' ,(req , res) =>{
  res.send(`<span>Www.google.com</span>`)
})

app.get('/githubdata' ,(req, res)=>{
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
