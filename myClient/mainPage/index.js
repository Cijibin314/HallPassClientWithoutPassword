const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'username' parameter
try{
  const username = urlParams.get('username');
  const password = urlParams.get('password');
  document.getElementById("username").value = username;
  document.getElementById("password").value = password;
}catch(err){

}


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
          const login = document.getElementById("login")
          login.textContent = `Logged in as ${username}`;
          // redirecting to the goTo page
          window.location.href = `../goToPage/goToPage.html?username=${username}&password=${inputPassword}`;
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
      document.getElementById("usernamLabel").textContent = "User does not exist";
      document.getElementById("login").textContent = "Login";
      setTimeout(() => {
        document.getElementById("usernameLabel").textContent = "Username/Gmail: ";
      }, 2000)
    }
  })
}