let globalUser;

function login(){
  document.getElementById("login").textContent = "logging in."
  const username = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;
  userExists(username).then((userExists)=>{
    document.getElementById("login").textContent = "logging in.."
    if(userExists){
      console.log("user exists")
      getUserData(username).then(userData =>{
        document.getElementById("login").textContent = "logging in..."
        const correctPassword = userData.password;
        if(correctPassword === inputPassword){
          console.log("correct password")
          const login = document.getElementById("login")
          login.textContent = `Logged in as ${username}`;
          globalUser = new User(username, inputPassword);
        }else{
          console.log("hi")
          document.getElementById("passwordLabel").textContent = "Incorrect password";
          document.getElementById("login").textContent = "Login"
          setTimeout(() => {
            document.getElementById("passwordLabel").textContent = "Password: ";
          }, 2000)
        }
      })
    }else{
      console.log("user does not exist")
      document.getElementById("usernamLabel").textContent = "User does not exist";
      document.getElementById("login").textContent = "Login"
      setTimeout(() => {
        document.getElementById("usernameLabel").textContent = "Username/Gmail: ";
      }, 2000)
    }
  })
}