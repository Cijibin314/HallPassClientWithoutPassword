// Get the value of the 'username' parameter
try{
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');
  setTimeout(()=>{
    document.getElementById("username").value = username;
  }, 500)
}catch(err){
}


function login(){
  document.getElementById("login").textContent = "Logging in."
  const username = document.getElementById("username").value.toLowerCase();
  userExists(username).then((userData)=>{
    document.getElementById("login").textContent = "Logging in.."
    if(userData){
        document.getElementById("login").textContent = "Logging in..."
          const login = document.getElementById("login")
          login.textContent = `Logged in as ${username}`;
          // redirecting to the goTo page
          window.location.href = `../goToPage/goToPage.html?username=${username}`;
    }else{
      const parent = document.getElementById("username-container")
      const referenceElement = document.getElementById("username")
      const newEle = insertBefore(parent, referenceElement, "User Dosen't exist")
      const referencePassword = document.getElementById("username").value;
      let currentPassword = referencePassword;
      const interval = setInterval(() =>{
        currentPassword = document.getElementById("username").value;
        if(currentPassword !== referencePassword){
          document.getElementById("login").textContent = "Login"
          removeEle(parent, newEle)
          clearInterval(interval);
        }
      }, 500)
    }
  })
}