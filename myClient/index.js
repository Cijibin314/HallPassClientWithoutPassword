let globalUserName = ""
async function login(){
  await returnHi();
  try{
  document.getElementById("passwordError").textContent = "logging in."
  const username = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;
  const userExists = await userExists(username);
  document.getElementById("passwordError").textContent = "logging in.."
  let userData;
  if(userExists){
    document.getElementById("usernameError").textContent = "user exists"
    userData = await getUserData(username);
    document.getElementById("passwordError").textContent = "logging in..."
  }else{
    document.getElementById("usernameError").textContent = "User does not exist";
  }
  const correctPassword = userData.password;
  if(correctPassword === inputPassword){
    globalUserName = username;
    document.getElementById("login").textContent = "Logged in as " + username;
  }else{
    document.getElementById("passwordError").textContent = "Incorrect password";
  }
}catch(e){
  console.log(e)
}
}