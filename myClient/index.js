import Api from './RESTAPIinteractions.js';

let globalUserName = ""

async function login(){
  console.log("logging in.")
  const username = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;
  const userExists = await Api.userExists(username);
  console.log("logging in..")
  let userData;
  if(userExists){
    console.log("user exists")
    userData = await Api.getUserData(username);
    console.log("logging in...")
  }else{
    console.log("user does not exist")
    document.getElementById("usernameError").textContent = "User does not exist";
  }
  const correctPassword = userData.password;
  if(correctPassword === inputPassword){
    globalUserName = username;
    document.getElementById("login").textContent = "Logged in as " + username;
  }else{
    document.getElementById("passwordError").textContent = "Incorrect password";
  }
}