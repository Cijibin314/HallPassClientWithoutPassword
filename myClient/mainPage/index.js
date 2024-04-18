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
          const parent = document.getElementById("password-container")
          const referenceElement = document.getElementById("password")
          const newEle = insertBefore(parent, referenceElement, "Incorrect Password")
          const referencePassword = document.getElementById("password").value;
          let currentPassword = referencePassword;
          const interval = setInterval(() =>{
            currentPassword = document.getElementById("password").value;
            if(currentPassword !== referencePassword){
              document.getElementById("login").textContent = "Login"
              removeEle(parent, newEle)
              clearInterval(interval);
            }
          }, 500)
        }
      })
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

function insertBefore(parent, referenceElement, contents) {
  let newElement = document.createElement("p")
  newElement.textContent = contents
  newElement.style.color = "red"
  parent.insertBefore(newElement, referenceElement);
  return newElement;
}

function removeEle(parent, elementToDelete){
  parent.removeChild(elementToDelete);
}